import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Button } from "react-native";
import Box from "./components/Box";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = goalInput => {
    if (goalInput === "") {
      Alert.alert("Warning", "You cannot add an empty goal");
    } else {
      setCourseGoals(prevGoals => [
        ...prevGoals,
        { id: Math.random().toString(), value: goalInput }
      ]);
      setIsAddModal(false);
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
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      <GoalInput
        visible={isAddModal}
        inputContainerStyle={styles.inputContainer}
        textInputStyle={styles.textInput}
        modalStyle={styles.modalStyle}
        buttonsContainerStyle={styles.buttonsContainerStyle}
        placeholder="Add Course Goal"
        title="ADD"
        cancelButtonTitle="CANCEL"
        onAddGoal={addGoalHandler}
        cancelModal={() => setIsAddModal(false)}
        cancelButtonColor="red"
        animationType="slide"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    fontSize: 20,
    borderRadius: 5
  },
  headerStyle: {
    textAlign: "center",
    color: "red"
  },
  headerStyle: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  textStyle: {
    color: "green",
    fontSize: 20,
    fontWeight: "600"
  },
  modalStyle: {
    marginTop: 50
  },

  buttonsContainerStyle: {
    marginTop: 20,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly"
  }
});
