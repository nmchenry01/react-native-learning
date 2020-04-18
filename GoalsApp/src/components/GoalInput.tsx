import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export type GoalInputProps = {
  setGoalList: React.Dispatch<React.SetStateAction<String[]>>;
};

export const GoalInput = ({ setGoalList }: GoalInputProps) => {
  const [goalInput, setGoalInput] = useState('');

  const updateGoalHandler = (value: string) => {
    setGoalInput(value);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [...currentGoalList, goalInput]);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.goalTextInput}
        onChangeText={updateGoalHandler}
        value={goalInput}
      />
      <Button title="Add" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
});
