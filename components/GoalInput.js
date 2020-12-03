import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';
import Styles from '../Styles/style';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const styles = Styles;

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addInputHandler = () => {
        if (enteredGoal) {
            props.addInputHandler(enteredGoal);
            setEnteredGoal('');
        }
    };

    const cancelGoalHandler = () => {
        props.cancelGoalHandler();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.modalButtonContainer}>
                    <View style={styles.modalButtons} >
                        <Button title="ADD" onPress={addInputHandler} />
                    </View>
                    <View style={styles.modalButtons} >
                        <Button title="CANCEL" color="red" onPress={cancelGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;