import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState("");

  const changeInputHandler = textInput => {
    setGoal(textInput);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal
      style={props.modalStyle}
      visible={props.visible}
      animationType={props.animationType}>
      <View style={props.inputContainerStyle}>
        <TextInput
          style={props.textInputStyle}
          placeholder={props.placeholder}
          onChangeText={changeInputHandler}
          value={goal}
        />
        <View style={props.buttonsContainerStyle}>
          <Button
            title={props.cancelButtonTitle}
            color={props.cancelButtonColor}
            onPress={props.cancelModal}
          />
          <Button title={props.title} onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
