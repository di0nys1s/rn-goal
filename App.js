import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Box from "./components/Box";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalInput => {
    if (goalInput === "") {
      Alert.alert("Warning", "You cannot add an empty goal");
    } else {
      setCourseGoals([
        ...courseGoals,
        { key: Math.random().toString(), value: goalInput }
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        inputContainerStyle={styles.inputContainer}
        textInputStyle={styles.textInput}
        placeholder="Course Goal"
        title="ADD"
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemData => <Box text={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    fontSize: 20
  }
});
