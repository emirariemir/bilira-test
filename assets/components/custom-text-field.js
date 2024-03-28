import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors.js';
import React from 'react';
import { useFonts } from 'expo-font';

const CustomTextField = ( { type } ) => {

    const [fontsLoaded, fontError] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf'),
        'Archivo-Regular': require('../../assets/fonts/Archivo-Regular.ttf'),
        'Archivo-Medium': require('../../assets/fonts/Archivo-Medium.ttf'),
      });

    const [text, onChangeText] = React.useState('Useless Text');

    // Determine which placeholder and icon to use based on the type
    let title = '';
    let currentAmount = null;
    let placeholder = '';
    let icon = null;
    let additionalButton = null;
    let line = null;
    let additionalInformation = null;

    switch (type) {

        case 'IBAN':
            title = 'IBAN';
            placeholder = 'Talep ettiginiz banka iban adresi';
            icon = (
                <TouchableOpacity>
                    <Icon name={'file-text'} size={18} color={colors.lightTheme900}/>
                </TouchableOpacity>
            );
            break;

        case 'amount':
            title = 'Tutar';
            currentAmount = (
                <Text style={fieldStyles.currentAmount}>{'Mevcut: 4.889,98 TRYB'}</Text>
            );
            placeholder = '0.00';
            icon = (
                <TouchableOpacity>
                    <Icon name={'plus'} size={18} color={colors.primaryBlue500}/>
                </TouchableOpacity>
            );
            additionalButton = (
                <TouchableOpacity>
                    <Text style={fieldStyles.trybButton}>TRYB</Text>
                </TouchableOpacity>
            );
            line = (
                <View style={fieldStyles.line}/>
            );
            break;

        case 'accountTitle':
            title = 'Hesap Başlık';
            placeholder = '4-20 karakter. Örn; Türk banka adresim';
            break;

        case 'emailVerification':
            title = 'E-Posta doğrulama kodu';
            placeholder = 'Gelen kodu buraya gir';
            additionalButton = (
                <TouchableOpacity>
                    <Text style={fieldStyles.sendCode}>Kodu gönder</Text>
                </TouchableOpacity>
            );
            additionalInformation = (
                <Text style={fieldStyles.emailAddition}>“tay**es@gmail.com” e-posta adresine gönderilen 6 haneli kodu girin</Text>
            );
            break;

        case 'specificType':
            placeholder = 'Enter specific type';
            iconName = 'specific-icon'; // Replace 'specific-icon' with the name of your specific icon
            additionalButton = (
                <TouchableOpacity style={fieldStyles.button}>
                    <Text style={fieldStyles.buttonText}>Button 2</Text>
                </TouchableOpacity>
            );
            break;
        default:
            title =  'IBAN';
            placeholder = 'Talep ettiginiz banka iban adresi';
            iconName = 'file-text';
    }

    return (
        <View style={fieldStyles.root}>
            <View style={fieldStyles.information}>
                <Text style={fieldStyles.title}>{title}</Text>
                {currentAmount}
            </View>
            <View style={fieldStyles.container}>
                <TextInput style={fieldStyles.input} onChange={onChangeText} text={text} placeholder={placeholder} />
                <View style={fieldStyles.textFieldAction}>
                    {icon}
                    {line}
                    {additionalButton}
                </View>
            </View>
            {additionalInformation}
        </View>
    );
}

const fieldStyles = StyleSheet.create({

    root: {
        marginVertical: 25,
        paddingHorizontal: 15,
        //backgroundColor: colors.green,
    },

    currentAmount: {
        fontSize: 12,
        fontFamily: 'Archivo-Regular',
    },

    information: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 12,
        fontFamily: 'Archivo-Medium',
        color: colors.lightTheme900,
    },

    container: {
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'space-between',
        backgroundColor: colors.lightTheme300,
    },

    input: {
        fontSize: 13,
        fontFamily: 'Archivo-Regular',
    },

    textFieldAction: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    trybButton: {
        fontSize: 12,
        fontFamily: 'Archivo-Regular',
        color: colors.lightTheme600,
        marginLeft: 8,
    },

    line: {
        width: 1,
        height: 25,
        marginLeft: 8,
        backgroundColor: colors.lightTheme500,
    },

    sendCode: {
        fontSize: 13,
        fontFamily: 'Archivo-Bold',
        color: colors.primaryBlue500,
    },

    emailAddition: {
        fontSize: 11,
        marginTop: 8,
        fontFamily: 'Archivo-Regular',
        color: colors.lightTheme600,
    },
});

export default CustomTextField;