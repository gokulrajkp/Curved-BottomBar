import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated, Button, Easing } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// const FadeInView = (props) => {
// const fadeAnim = useRef(new Animated.Value(0)).current; //initial valur for the opacity is 0
// useEffect(() => {
//   Animated.timing(fadeAnim, {
//     toValue: 250,
//     duration: 5000,
//     useNativeDriver: true,
//   }).start();
//   // Animated.timing(this.state.xPosition, {
//   //   toValue: 100,
//   //   easing: Easing.back(),
//   //   duration: 2000,
//   // }).start();
// }, []);
// const animationStyles=()=>{
//   transfom:[{transla}]
// }
//   return <Animated.View style={{ ...props.style, opacity: fadeAnim }}>{props.children}</Animated.View>;
// };
export default function FadeIn() {
  const fadeAnim = useRef(new Animated.Value(100)).current; //initial valur for the opacity is 0
  var animatedValue = fadeAnim;
  const onMotion = () => {
    animatedValue.setValue(1);
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    // Animated.sequence([
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     useNativeDriver: true,
    //     easing: Easing.linear,
    //     duration: 400,
    //   }),
    //   Animated.spring(fadeAnim, {
    //     toValue: 2,
    //     delay: 1000,
    //     friction: 1,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    // Animated.parallel([
    //   Animated.timing(fadeAnim, {
    //     toValue: 100,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(fadeAnim, {
    //     toValue: 0,
    //     duration: 200,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
    // Animated.decay(fadeAnim, {
    //   toValue: 50,
    //   duration: 2000,
    //   velocity: 0.95,
    //   deceleration: 0.998,
    //   useNativeDriver: false,
    // }).start();
    // Animated.timing(this.state.xPosition, {
    //   toValue: 100,
    //   easing: Easing.back(),
    //   duration: 2000,
    // }).start();
  };
  const inet = animatedValue.i;

  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "90deg", "0deg"],
  });

  const onMotionBack = () => {
    animatedValue = new Animated.Value(1);
    Animated.timing(fadeAnim, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <FadeInView style={{ width: 250, height: 50, backgroundColor: "powderblue" }}>
    //     <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>Fading in</Text>
    //   </FadeInView>
    // </View>
    <View style={{ flex: 1 }}>
      {/* <Animated.View
        style={[{ width: 100, height: 100, backgroundColor: "red" }, { transform: [{ translateY: fadeAnim }] }]}
      ></Animated.View>
      <TouchableWithoutFeedback
        onPress={() => {
          onMotion();
        }}
      >
        <Text>click</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          onMotionBack();
        }}
      >
        <Text>click to back</Text>
      </TouchableWithoutFeedback> */}
      {/* <View style={{ justifyContent: "center", flex: 1 }}>
        <Button title="click" onPress={() => onMotion()} />
        <Animated.View
          style={{ width: 100, height: 100, backgroundColor: "blue", transform: [{ scale: fadeAnim }] }}
        ></Animated.View>
      </View> */}

      <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{ height: 50, width: 50, backgroundColor: "red", transform: [{ translateX: fadeAnim }] }}
        />
        {/* <Animated.View
          style={{ width: 100, height: 100, backgroundColor: "red", transform: [{ translateX: fadeAnim }] }}
        ></Animated.View> */}
        <View style={{ width: 100, marginTop: 100 }}>
          <Button onPress={() => onMotion()} title="press me" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
