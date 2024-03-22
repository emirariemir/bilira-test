import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View, Image, ScrollView, Appearance, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors, { darkThemeColors, lightThemeColors } from './assets/colors/colors';
import CircleButton from './assets/components/circle-button';
import CoinCard from './assets/components/coin-card';
import InteractiveIcon from './assets/components/interactive-icon';
import { useFonts } from 'expo-font';
import CustomButton from './assets/components/custom-button';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Archivo-Bold': require('./assets/fonts/Archivo-Bold.ttf'),
    'Archivo-ExtraBold': require('./assets/fonts/Archivo-ExtraBold.ttf'),
    'Archivo-ExtraLight': require('./assets/fonts/Archivo-ExtraLight.ttf'),
    'Archivo-Light': require('./assets/fonts/Archivo-Light.ttf'),
    'Archivo-Medium': require('./assets/fonts/Archivo-Medium.ttf'),
    'Archivo-Regular': require('./assets/fonts/Archivo-Regular.ttf'),
    'Archivo-SemiBold': require('./assets/fonts/Archivo-SemiBold.ttf'),
    'Archivo-Thin': require('./assets/fonts/Archivo-Thin.ttf'),
  });

  const colorScheme = Appearance.getColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const currentTheme = isDarkMode ? darkThemeColors : lightThemeColors;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => {
      subscription.remove();
    };
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const handleIconPress = () => {
    console.log('Icon pressed!');
  };

  return (
    <View style={[styles.container, {backgroundColor: currentTheme.background}]}>
      
      {/* STATUS BAR HERE ! */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>

      {/* TOP BAR VIEW STARTS HERE ! */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBarView}>
          <View style={styles.topBarLeft}>
            <InteractiveIcon iconName={isDarkMode ? 'sun' : 'moon'} onPress={toggleTheme} iconColor={currentTheme.textColor}/>
          </View>
          <View style={styles.topBarLogo}>
            <Text style={[styles.logoText, {color: currentTheme.textColor}]}>BiLira</Text>
          </View>
          <View style={styles.topBarRight}>
            <InteractiveIcon iconName={'search'} onPress={handleIconPress} rightMarginAmount={20} iconColor={currentTheme.textColor}/>
            <InteractiveIcon iconName={'bell'} onPress={handleIconPress} iconColor={currentTheme.textColor}/>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView>
        
        {/* LARGE COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Primary</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'primary'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'primary'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Primary</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'primary'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'primary'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Primary</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'primary'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'primary'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'primary'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'primary'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'primary'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'primary'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

         {/* BORDERLESS LARGE COMPONENTS STARTS HERE ! ---------------------------------------------------------- */}
         <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Borderless</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'borderless'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Borderless</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'borderless'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Borderless</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'borderless'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'borderless'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'borderless'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'borderless'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'borderless'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

        {/* BORDERED LARGE COMPONENTS STARTS HERE ! ---------------------------------------------------------- */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bordered</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bordered'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bordered</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bordered'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bordered</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bordered'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bordered'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bordered'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bordered'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bordered'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

        {/* BZELED GRAY LARGE COMPONENTS STARTS HERE ! ---------------------------------------------------------- */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

        {/* BZELED GRAY 2 LARGE COMPONENTS STARTS HERE ! ---------------------------------------------------------- */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray 2</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray 2</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled Gray 2</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled-gray-2'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

        {/* BZELED LARGE COMPONENTS STARTS HERE ! ---------------------------------------------------------- */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'xl'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'xl'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'xl'}/>
        </View>

        {/* MEDIUM COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Medium</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'md'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'md'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'md'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'md'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'md'}/>
        </View>

        {/* SMALL COMPONENTS STARTS HERE ! */}
        <View style={styles.marketsView}>
          <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Bazeled</Text>
          <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
            <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Small</Text>
          </View>
        </View>
      
        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'default'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500} size={'s'}/>
          <CustomButton type={'bazeled'} state={'default'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'hover'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600} size={'s'}/>
          <CustomButton type={'bazeled'} state={'hover'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600} size={'s'}/>
        </View>

        <View style={styles.componentDisplay}>
          <CustomButton type={'bazeled'} state={'disabled'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100} size={'s'}/>
          <CustomButton type={'bazeled'} state={'disabled'} isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100} size={'s'}/>
        </View>

      </ScrollView>

    </View>
  );
}

const screenHeight = Dimensions.get('window').height;
const refHeight = screenHeight / 13.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
  },

  // 1 ---------------------------------------------
  topBarView: {
    height: refHeight * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  topBarLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  topBarLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  logoText: {
    fontSize: 20,
    fontWeight: '600',
  },

  topBarRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  serachIcon: {
    paddingRight: 15,
  },

  // 2 ---------------------------------------------
  budgetView: {
    height: refHeight * 2,
    paddingHorizontal: 15,
  },

  budgetText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  budgetGreetingText: {
    paddingRight: 5,
    fontFamily: 'Archivo-Regular'
  },

  budgetInfo: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  budgetInfoElements: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  budgetAmountText: {
    fontSize: 36,
    fontFamily: 'Archivo-Bold',
  },

  trybText: {
    fontSize: 16,
    fontFamily: 'Archivo-Regular',
    paddingLeft: 10,
    paddingBottom: 5,
  },

  profitAmount: {
    flex: 1,
    flexDirection: 'row',
  },

  percentText: {
    fontFamily: 'Archivo-SemiBold',
    paddingLeft: 3,
    paddingRight: 5,
    color: colors.primaryGreen,
  },

  changedAmountText: {
    fontFamily: 'Archivo-Regular',
    color: colors.lightGrey,
  },

  // 3 ---------------------------------------------
  buttonsView: {
    height: refHeight * 1.5,
    flexDirection: 'row',
  },

  // 4 ---------------------------------------------
  inviteFriendView: {
    flex: refHeight * 2.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    position: 'relative',
  },

  mask: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    overflow: 'hidden',
    borderRadius: 12,
  },

  bannerImage: {
    height: 117.6,
    width: 423.6,
  },

  overlayContent: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 35,
  },

  overlayTitle: {
    fontSize: 16,
    fontFamily: 'Archivo-SemiBold',
  },
  
  overlayText: {
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    marginTop: 6,
    marginRight: 170,
  },

  overlayCloseButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 4,
    marginRight: 25,
    marginTop: 25,
    borderColor: colors.lighterGrey,
    borderWidth: 1,
    borderRadius: 64,
    backgroundColor: colors.primaryWhite
  },

  // 5 ---------------------------------------------
  marketsView: {
    height: refHeight * 0.8,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  piyasalarText: {
    fontSize: 16,
    fontFamily: 'Archivo-Bold',
  },

  categoryDropdown: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 64,
    backgroundColor: colors.lighterGrey,
  },

  categoryText: {
    paddingRight: 5,
    fontFamily: 'Archivo-SemiBold'
  },

  // 6 ---------------------------------------------
  coinsView: {
    height: refHeight * 6,
    paddingHorizontal: 15,
    marginBottom: 20,
    paddingBottom: 15,
  },

  componentDisplay: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

});
