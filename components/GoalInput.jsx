import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState("");

  const changeInputHandler = textInput => {
    setGoal(textInput);
  };

  return (
      <View style={props.inputContainerStyle}>
        <TextInput
          style={props.textInputStyle}
          placeholder={props.placeholder}
          onChangeText={changeInputHandler}
          value={goal}
        />
        <Button title={props.title} onPress={() => props.onAddGoal(goal)} />
      </View>
  );
};

export default GoalInput;
