import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import Styles from './Styles/style';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const styles = Styles;

  const addGoalHandler = (goalTitle) => {
    if (goalTitle === 0) {
      return;
    }
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setAddMode(false);
  };
  const cancelGoalHandler = () => {
    setAddMode(false);
  };

  const deleteItem = (goalID) => {
    setCourseGoals(currentGoals => {
      return courseGoals.filter((goal) => goal.id !== goalID);
    })
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={isAddMode} addInputHandler={addGoalHandler} cancelGoalHandler={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={deleteItem} title={itemData.item.value} />}
      />
    </View>
  );
}