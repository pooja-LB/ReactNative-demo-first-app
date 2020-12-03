import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Styles from '../Styles/style'


const GoalItem = props => {
    const styles = Styles;
    return (<TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
        <View style={styles.listItem} >
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>)
};

export default GoalItem;