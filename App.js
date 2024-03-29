import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View, Image, ScrollView, Appearance, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors, { darkThemeColors, lightThemeColors } from './assets/colors/colors';
import CircleButton from './assets/components/circle-button';
import CoinCard from './assets/components/coin-card';
import InteractiveIcon from './assets/components/interactive-icon';
import { useFonts } from 'expo-font';
import CustomButton from './assets/components/custom-button';
import CustomTextField from './assets/components/custom-text-field';
import { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import CustomBottomSheet from './assets/components/custom-bottom-sheet';

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

  {/* ANIMATION LOGIC HERE ! --------------------------------------------------------------------- */}

  const [isOpen, setIsOpen] = useState(false);
  const translateY = useSharedValue(0);

  const toggleBottomSheet = () => {
    translateY.value = withSpring(isOpen ? 100 : 500);
    setIsOpen(!isOpen);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  {/* ANIMATION LOGIC ENDS HERE ! ---------------------------------------------------------------- */}

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
            <InteractiveIcon iconName={'search'} rightMarginAmount={20} iconColor={currentTheme.textColor}/>
            <InteractiveIcon iconName={'bell'} iconColor={currentTheme.textColor}/>
          </View>
        </View>

      </SafeAreaView>

      <ScrollView>

        <CustomButton type={'primary'} state={'default'} title={'Invoke bottom sheet'} buttonColor={colors.primaryBlue500} size={'xl'} onPress={toggleBottomSheet}></CustomButton>

        <CustomTextField type={'IBAN'}></CustomTextField>

        <CustomTextField type={'amount'}></CustomTextField>

        <CustomTextField type={'accountTitle'}></CustomTextField>

        <CustomTextField type={'emailVerification'}></CustomTextField>

        
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

      </ScrollView>

      <CustomBottomSheet animatedStyleProp={animatedStyle} />

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
