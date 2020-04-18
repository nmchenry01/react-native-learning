import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from './components/ListItem';
import { GoalInput } from './components/GoalInput';

const App = () => {
  const [goalList, setGoalList] = useState<String[]>([]);

  return (
    <View style={styles.screen}>
      <GoalInput setGoalList={setGoalList} />
      <FlatList
        data={goalList}
        renderItem={({ item }) => <ListItem goal={item} />}
        keyExtractor={(item, index) => `${item}${index.toString()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
