import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors.js';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonHeightRatio = 15.7777777778;
const textSizeRatio = 65.5384615385;

const CustomButton = ( { title, isIconLeft, iconLeft, isIconRight, iconRight, size, type, state, icon} ) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handlePress = () => {
        if (!isDisabled) {
            setIsDisabled(true),
            setTimeout(() => {setIsDisabled(false)}, 2000);
        }
    }

    let buttonContentPadding;
    let textPadding;
    let iconPadding;

    if (size === 'xl') {
        buttonContentPadding = 18;
        textPadding = 0;
        iconPadding = 7;
    } else if (size === 'md') {
        buttonContentPadding = 11;
        textPadding = 4;
        iconPadding = 7;
    } else {
        buttonContentPadding = 7;
        textPadding = 8;
        iconPadding = 0;
    }

    let buttonBackgroundColor;
    let textColor;
    let borderSize;
    let borderColor;
    let iconColor;

    if (type === 'primary') {

        if (state === 'default') {
            buttonBackgroundColor = colors.primaryBlue500;
            textColor = colors.primaryWhite;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.primaryBlue700;
            textColor = colors.primaryWhite;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.primaryBlue100;
            textColor = colors.primaryWhite;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else if (type === 'borderless') {

        if (state === 'default') {
            buttonBackgroundColor = null;
            textColor = colors.primaryBlue500;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.primaryBlue500;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else if (type === 'bordered') {

        if (state === 'default') {
            buttonBackgroundColor = colors.primaryWhite;
            textColor = colors.lightTheme900;
            iconColor = textColor;
            borderSize = 1;
            borderColor = colors.lightTheme400;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme900;
            iconColor = textColor;
            borderSize = 1.5;
            borderColor = colors.lightTheme500;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else if (type === 'bazeled-gray') {

        if (state === 'default') {
            buttonBackgroundColor = colors.lightTheme300;
            textColor = colors.primaryBlue500;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.lightTheme400;
            textColor = colors.primaryBlue500;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else if (type === 'bazeled-gray-2') {

        if (state === 'default') {
            buttonBackgroundColor = colors.lightTheme300;
            textColor = colors.lightTheme900;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.lightTheme400;
            textColor = colors.lightTheme900;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else if (type === 'bazeled') {

        if (state === 'default') {
            buttonBackgroundColor = colors.primaryBlue50;
            textColor = colors.primaryBlue500;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'hover') {
            buttonBackgroundColor = colors.primaryBlue100;
            textColor = colors.primaryBlue600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }
        if (state === 'disabled') {
            buttonBackgroundColor = colors.lightTheme200;
            textColor = colors.lightTheme600;
            iconColor = textColor;
            borderSize = null;
            borderColor = null;
        }

    } else {
        buttonBackgroundColor = null;
        textColor = null;
        iconColor = null;
        borderSize = null;
        borderColor = null;
    }

    const customButtonStyles = StyleSheet.create({
        container: {
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },

        buttonBackground: {
            borderRadius: 64,
            borderWidth: borderSize,
            borderColor: borderColor,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: buttonBackgroundColor,
        },

        buttonContent: {
            padding: buttonContentPadding,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },

        titleStyle: {
            fontSize: screenHeight / textSizeRatio,
            paddingHorizontal: textPadding,
            fontWeight: '600',
            color: textColor,
        },

        iconLeft: {
            paddingRight: typeof title !== 'string' ? 0 : iconPadding,
        },

        iconRight: {
            paddingLeft: typeof title !== 'string' ? 0 : iconPadding,
        },

        blank: {},
    });

    return (
        <View style={customButtonStyles.container}>
            {isDisabled ? (
                <View style={{backgroundColor: colors.primaryBlue100, borderRadius: 64}}>
                    <View style={customButtonStyles.buttonContent}>
                        <Icon style={isIconLeft === 'true' ? customButtonStyles.iconLeft : customButtonStyles.blank} name={isIconLeft === 'true' ? iconLeft : ''} size={18} color={iconColor}/>
                        <Text style={typeof title !== 'string' ? customButtonStyles.blank : customButtonStyles.titleStyle}>{typeof title !== 'string' ? null : 'Executing'}</Text>
                        <Icon style={isIconRight === 'true' ? customButtonStyles.iconRight : customButtonStyles.blank} name={isIconRight === 'true' ? iconRight : ''} size={18} color={iconColor}/>
                    </View>
                </View>
            ) : (
                <TouchableOpacity onPress={handlePress} activeOpacity={1.0}>
                    <View style={customButtonStyles.buttonBackground}>
                        <View style={customButtonStyles.buttonContent}>
                            {icon && <View style={customButtonStyles.iconLeft}>{icon}</View>}
                            <Icon style={isIconLeft === 'true' ? customButtonStyles.iconLeft : customButtonStyles.blank} name={isIconLeft === 'true' ? iconLeft : ''} size={18} color={iconColor}/>
                            <Text style={typeof title !== 'string' ? customButtonStyles.blank : customButtonStyles.titleStyle}>{title}</Text>
                            <Icon style={isIconRight === 'true' ? customButtonStyles.iconRight : customButtonStyles.blank} name={isIconRight === 'true' ? iconRight : ''} size={18} color={iconColor}/>
                            {icon && <View style={customButtonStyles.iconRight}>{icon}</View>}
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default CustomButton;