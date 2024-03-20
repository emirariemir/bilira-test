import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors.js';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonHeightRatio = 15.7777777778;
const textSizeRatio = 65.5384615385;

const CustomButton = ( {onPress, title, isIconLeft, iconLeft, isIconRight, iconRight, buttonColor} ) => {

    

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
            <TouchableOpacity onPress={onPress}>
                <View style={customButtonStyles.buttonBackground}>
                    <View style={customButtonStyles.buttonContent}>
                        <Icon style={isIconLeft === 'true' ? customButtonStyles.iconLeft : customButtonStyles.blank} name={isIconLeft === 'true' ? iconLeft : ''} size={18} color={colors.primaryWhite}/>
                        <Text style={typeof title !== 'string' ? customButtonStyles.blank : customButtonStyles.titleStyle}>{title}</Text>
                        <Icon style={isIconRight === 'true' ? customButtonStyles.iconRight : customButtonStyles.blank} name={isIconRight === 'true' ? iconRight : ''} size={18} color={colors.primaryWhite}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;