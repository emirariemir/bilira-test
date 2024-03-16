import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../colors/colors';

const InteractiveIcon = ({ iconName, onPress, rightMarginAmount }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{marginRight: rightMarginAmount}}>
            <Icon name={iconName} size={24} color={colors.primaryBlack}/>
        </TouchableOpacity>
    )
}

export default InteractiveIcon;