import { StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors.js';
import React from 'react';
import { useFonts } from 'expo-font';

const CustomTextField = ( { type } ) => {

    const [fontsLoaded, fontError] = useFonts({
        'Archivo-Regular': require('../../assets/fonts/Archivo-Regular.ttf'),
      });

    const [text, onChangeText] = React.useState('Useless Text');

    let IBAN = false;
    let amount = false;
    let accountTitle = false;
    let emailVerification = false;

    if (type === 'IBAN') {
        IBAN = true;
    } else if (type === 'amount') {
        amount = true;
    } else if (type === 'accountTitle') {
        accountTitle = true;
    } else if (type === 'emailVerification') {
        emailVerification = true;
    } else {
        // Give error message (I will just make it IBAN field)
        IBAN = true;
    }

    return (
        <View style={fieldStyles.container}>
            <TextInput style={fieldStyles.input} onChange={onChangeText} text={text} placeholder='Talep ettiginiz banka iban adresi' />
            <Icon name='file-text' size={20} color={colors.lightTheme900}/>
        </View>
    );
}

const fieldStyles = StyleSheet.create({
    container: {
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'space-between',
        backgroundColor: colors.lightTheme300,
    },

    input: {
        fontSize: 13,
        fontFamily: 'Archivo-Regular',
    }
});

export default CustomTextField;