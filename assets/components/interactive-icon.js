import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../colors/colors';

const InteractiveIcon = ({ iconName, onPress, rightMarginAmount, iconColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{marginRight: rightMarginAmount}}>
            <Icon name={iconName} size={24} color={iconColor}/>
        </TouchableOpacity>
    )
}

export default InteractiveIcon;