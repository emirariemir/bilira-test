import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors.js';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonHeightRatio = 15.7777777778;
const textSizeRatio = 65.5384615385;

const CustomButton = ( { title, isIconLeft, iconLeft, isIconRight, iconRight, buttonColor} ) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handlePress = () => {
        if (!isDisabled) {
            setIsDisabled(true),
            setTimeout(() => {setIsDisabled(false)}, 2000);
        }
    }

    const customButtonStyles = StyleSheet.create({
        container: {
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },

        buttonBackground: {
            borderRadius: 64,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: buttonColor,
        },

        buttonContent: {
            padding: 18,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },

        titleStyle: {
            fontSize: screenHeight / textSizeRatio,
            fontWeight: '600',
            color: '#FFF',
        },

        iconLeft: {
            paddingRight: typeof title !== 'string' ? 0 : 7,
        },

        iconRight: {
            paddingLeft: typeof title !== 'string' ? 0 : 7,
        },

        blank: {},
    });

    return (
        <View style={customButtonStyles.container}>
            {isDisabled ? (
                <View style={{backgroundColor: colors.primaryBlue100, borderRadius: 64}}>
                    <View style={customButtonStyles.buttonContent}>
                        <Icon style={isIconLeft === 'true' ? customButtonStyles.iconLeft : customButtonStyles.blank} name={isIconLeft === 'true' ? iconLeft : ''} size={18} color={colors.primaryWhite}/>
                        <Text style={typeof title !== 'string' ? customButtonStyles.blank : customButtonStyles.titleStyle}>{typeof title !== 'string' ? null : 'Executing'}</Text>
                        <Icon style={isIconRight === 'true' ? customButtonStyles.iconRight : customButtonStyles.blank} name={isIconRight === 'true' ? iconRight : ''} size={18} color={colors.primaryWhite}/>
                    </View>
                </View>
            ) : (
                <TouchableOpacity onPress={handlePress} activeOpacity={1.0}>
                    <View style={customButtonStyles.buttonBackground}>
                        <View style={customButtonStyles.buttonContent}>
                            <Icon style={isIconLeft === 'true' ? customButtonStyles.iconLeft : customButtonStyles.blank} name={isIconLeft === 'true' ? iconLeft : ''} size={18} color={colors.primaryWhite}/>
                            <Text style={typeof title !== 'string' ? customButtonStyles.blank : customButtonStyles.titleStyle}>{title}</Text>
                            <Icon style={isIconRight === 'true' ? customButtonStyles.iconRight : customButtonStyles.blank} name={isIconRight === 'true' ? iconRight : ''} size={18} color={colors.primaryWhite}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default CustomButton;