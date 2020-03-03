import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Box = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.onDelete(props.id)}>
      <View style={props.boxStyle}>
        <Text style={props.textStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Box;
