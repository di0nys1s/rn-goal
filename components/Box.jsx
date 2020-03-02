import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = props => {
  return (
    <View style={styles.boxStyle}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "#eee",
    borderWidth: 1,
    marginTop: 10
  },
  textStyle: {
    marginLeft: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "500"
  }
});

export default Box;
