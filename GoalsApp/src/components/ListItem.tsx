import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export type ListItemProps = {
  goal: String;
};

export const ListItem = ({ goal }: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
});
