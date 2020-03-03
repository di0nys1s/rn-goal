import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import Box from "./components/Box";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalInput => {
    if (goalInput === "") {
      Alert.alert("Warning", "You cannot add an empty goal");
    } else {
      setCourseGoals(prevGoals => [
        ...prevGoals,
        { id: Math.random().toString(), value: goalInput }
      ]);
    }
  };

  const deleteGoalHandler = goalID => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(item => item.id !== goalID);
    });
  };

  return (
    <View style={styles.screen}>
      <Header
        headerStyle={styles.headerStyle}
        textStyle={styles.textStyle}
        headerText="Welcome to Course Goals"
      />
      <GoalInput
        inputContainerStyle={styles.inputContainer}
        textInputStyle={styles.textInput}
        placeholder="Course Goal"
        title="ADD"
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <Box
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
            text={itemData.item.value}
          />
        )}
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
  },
  headerStyle: {
    textAlign: "center",
    color: "red"
  },
  headerStyle: {
    alignItems: "center",
    marginLeft: -30,
    marginTop: 10,
    marginBottom: 20
  },
  textStyle: {
    color: "green",
    fontSize: 20,
    fontWeight: "600"
  }
});
