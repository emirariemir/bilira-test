import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '/Users/emir/BiLiraTest/assets/colors/colors.js';

const screenWidth = Dimensions.get('window').width;

const CircleButton = ({ iconName, title, titleColor, buttonColor }) => {
    const buttonWidth = screenWidth * 0.1374;
    const ratio = 1;
    const buttonHeight = buttonWidth * ratio;
  
    const iconSize = screenWidth * 0.05580152671;
  
    const buttonStyle = StyleSheet.create({
      circleButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  
      blueCircle: {
        width: buttonWidth,
        height: buttonHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: buttonColor,
        borderRadius: 64,
      },
  
      titleStyle: {
        fontSize: 12,
        marginTop: 5,
        color: titleColor,
      },
    });
  
    return (
      <View style={buttonStyle.circleButton}>
        <View style={buttonStyle.blueCircle}>
          <Icon name={iconName} size={iconSize} color={colors.primaryWhite}/>
        </View>
        <Text style={buttonStyle.titleStyle}>{title}</Text>
      </View>
    )
  }

export default CircleButton;