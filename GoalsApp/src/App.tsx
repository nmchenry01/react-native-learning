import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

const App = () => {
  const [goalInput, setGoalInput] = useState('');
  const [goalList, setGoalList] = useState<String[]>([]);

  const updateGoalHandler = (value: string) => {
    setGoalInput(value);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [...currentGoalList, goalInput]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.goalTextInput}
          onChangeText={updateGoalHandler}
          value={goalInput}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goalList}
        renderItem={({ item: goal }) => (
          <View style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        )}
        keyExtractor={(item, index) => `${item}${index.toString()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
});

export default App;
