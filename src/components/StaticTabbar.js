import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Dimensions } from "react-native";

import Icon from "react-native-vector-icons/Feather";

export default function StaticTabbar({ tabsnames, tabValue }) {
  // const animtedValue = useRef(new Animated.Value(0)).current;
  let activecVlaue = [];
  activecVlaue = tabsnames.map((tab, index) => {
    useRef(new Animated.Value(index === 0 ? 1 : 0)).current;
  });
  const { width } = Dimensions.get("window");
  const tabWidth = width / tabsnames.length;
  const onpress = (index) => {
    Animated.sequence([
      activecVlaue.map((Value) =>
        Animated.timing(Value, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        })
      ),
      Animated.parallel([
        Animated.spring(activecVlaue[index], {
          toValue: 1,
          useNativeDriver: true,
        }),

        Animated.spring(tabValue, {
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {tabsnames.map((tab, index) => {
        const activeTab = activecVlaue[index];
        const opacity = tabValue.interpolate({
          inputRange: [-width + tabWidth * (index - 1), -width + tabWidth * index, -width + tabWidth * (index + 1)],
          outputRange: [1, 0, 1],
          extrapolate: "clamp",
        });
        //disappears icon
        const translateY = activecVlaue.interpolate({
          inputRange: [0, 1],
          outputRange: [64, 0],
        });
        return (
          <React.Fragment key={index}>
            <TouchableWithoutFeedback key={index} onPress={() => onpress(index)}>
              <Animated.View style={[styles.tab, { opacity: opacity }]}>
                <Icon name={tab.name} size={25} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: "absolute",
                top: -8,
                width: tabWidth,
                left: tabWidth * index,
                height: 64,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ translateY }],
              }}
            >
              <View style={styles.circle}>
                <Icon size={25} name={tab.name} />
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    height: 64,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {},
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
