import React from "react";
import { Dimensions, StyleSheet, Text, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import * as shape from "d3-shape";
import StaticTabbar from "./StaticTabbar";

const tabs = [{ name: "grid" }, { name: "list" }, { name: "refresh-cw" }, { name: "box" }, { name: "user" }];
const { width } = Dimensions.get("window");
const tabWidth = width / tabs.length;
const height = 64;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const left = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: 0, y: 0 },
  { x: width, y: 0 },
]);
const tab = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(shape.curveBasis)([
  { x: width, y: 0 },
  { x: width + 5, y: 0 },
  { x: width + 10, y: 10 },
  { x: width + 10, y: height },
  { x: width + tabWidth - 10, y: height },
  { x: width + tabWidth - 10, y: 10 },
  { x: width + tabWidth - 5, y: 0 },
  { x: width + tabWidth, y: 0 },
]);
const right = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: width + tabWidth, y: 0 },
  { x: width * 2, y: 0 },
  { x: width * 2, y: height },
  { x: 0, y: height },
  { x: 0, y: 0 },
]);
console.log(width);

const d = `${left} ${tab} ${right}`;

export default function Tabbar() {
  const value = new Animated.Value(-width);

  return (
    <>
      <View {...{ width, height }}>
        <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX: value }] }}>
          <Path {...{ d }} fill="white" />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar tabsnames={tabs} tabwidth={tabWidth} tabValue={value} />
        </View>
      </View>

      <SafeAreaView style={styles.safeArea} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
  },
});
