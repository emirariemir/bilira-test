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

      {/* BUDGET VIEW STARTS HERE ! */}
      <View style={styles.budgetView}>
        <View style={styles.budgetText}>
          <Text style={[styles.budgetGreetingText, {color: currentTheme.textColor}]}>Varlıkların toplam değeri</Text>
          <Icon name='eye' size={16} color={currentTheme.primaryGrey}/>
        </View>
        <View style={styles.budgetInfo}>
          <View style={styles.budgetInfoElements}>
            <Text style={[styles.budgetAmountText, {color: currentTheme.textColor}]}>4.883,98</Text>
            <Text style={[styles.trybText, {color: currentTheme.textColor}]}>TRYB</Text>
          </View>
        </View>
        <View style={styles.profitAmount}>
          <Icon name='arrow-up-right' size={16} color={currentTheme.primaryGreen}/>
          <Text style={[styles.percentText, {color: currentTheme.primaryGreen}]}>%1,60</Text>
          <Text style={[styles.changedAmountText, {color: currentTheme.primaryGrey}]}>(+324.10 TRYB)</Text>
        </View>
      </View>

      {/* BUTTONS VIEW STARTS HERE ! */}
      <View style={styles.buttonsView}>
        <CircleButton iconName='download' title='Yatırma' fontFamily={'Archivo-Regular'} titleColor={currentTheme.textColor} buttonColor={currentTheme.primaryBlue}/>
        <CircleButton iconName='plus' title='Kripto Al' fontFamily={'Archivo-Regular'} titleColor={currentTheme.textColor} buttonColor={currentTheme.primaryBlue}/>
        <CircleButton iconName='send' title='Gönder' fontFamily={'Archivo-Regular'} titleColor={currentTheme.textColor} buttonColor={currentTheme.primaryBlue}/>
        <CircleButton iconName='target' title='OTC' fontFamily={'Archivo-Regular'} titleColor={currentTheme.textColor} buttonColor={currentTheme.primaryBlue}/>
        <CircleButton iconName='maximize' title='Tara' fontFamily={'Archivo-Regular'} titleColor={currentTheme.textColor} buttonColor={currentTheme.primaryBlue}/>
      </View>

      {/* INVITE FRIEND STARTS HERE ! */}
      <View style={styles.inviteFriendView}>
        <View style={styles.mask}>
          <Image source={isDarkMode ? require('./assets/images/Bg-dark.png') : require('./assets/images/Bg.png')} style={styles.bannerImage}/>
        </View>
        <View style={styles.overlayContent}>
          <Text style={[styles.overlayTitle, {color: currentTheme.textColor}]}>Davet edin</Text>
          <Text style={[styles.overlayText, {color: currentTheme.textColor}]}>Arkadaşlarınızı davet ederek TRYB ödülleri kazanın.</Text>
        </View>
        <View style={[styles.overlayCloseButton, {backgroundColor: currentTheme.background}]}>
          <Icon name='x' size={18} color={currentTheme.textColor}/>
        </View>
      </View>

      {/* MARKETS VIEW STARTS HERE ! */}
      <View style={styles.marketsView}>
        <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Piyasalar</Text>
        <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
          <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Popüler</Text>
          <Icon name='chevron-down' size={16} color={currentTheme.textColor}/>
        </View>
      </View>

      {/* COINS VIEW STARTS HERE ! */}
      <View style={styles.coinsView}>
        
          <ScrollView>
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'ETH'} coinName={'Ethereum'} textColor={currentTheme.textColor} graphName={'trending-up'} graphColor={currentTheme.primaryGreen} price={'2,208.00'} arrowIconName={'arrow-up-right'} percentage={'%2.68'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'AVAX'} coinName={'Avalanche'} textColor={currentTheme.textColor} graphName={'trending-down'} graphColor={currentTheme.primaryRed} price={'225.71'} arrowIconName={'arrow-down-right'} percentage={'%1.60'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'MATIC'} coinName={'Polygon'} textColor={currentTheme.textColor} graphName={'trending-up'} graphColor={currentTheme.primaryGreen} price={'15.21'} arrowIconName={'arrow-up-right'} percentage={'%0.73'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'SOL'} coinName={'Solana'} textColor={currentTheme.textColor} graphName={'trending-up'} graphColor={currentTheme.primaryGreen} price={'167.26'} arrowIconName={'arrow-up-right'} percentage={'%6.54'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'BTC'} coinName={'Bitcoin'} textColor={currentTheme.textColor} graphName={'trending-down'} graphColor={currentTheme.primaryRed} price={'70,786.00'} arrowIconName={'arrow-down-right'} percentage={'%2.63'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'TRX'} coinName={'Tron'} textColor={currentTheme.textColor} graphName={'trending-down'} graphColor={currentTheme.primaryRed} price={'0.13'} arrowIconName={'arrow-down-right'} percentage={'%2.03'} />
            <CoinCard coinColor={currentTheme.primaryBlue} coinTag={'ADA'} coinName={'Cardano'} textColor={currentTheme.textColor} graphName={'trending-up'} graphColor={currentTheme.primaryGreen} price={'0.74'} arrowIconName={'arrow-up-right'} percentage={'%0.12'} />
          </ScrollView>
        
      </View>

      <View style={styles.marketsView}>
        <Text style={[styles.piyasalarText, {color: currentTheme.textColor}]}>Components</Text>
        <View style={[styles.categoryDropdown, {backgroundColor: currentTheme.dropdownColor}]}>
          <Text style={[styles.categoryText, {color: currentTheme.textColor}]}>Large</Text>
        </View>
      </View>
      
      <View style={styles.componentDisplay}>
        <CustomButton title={'Button'} buttonColor={colors.primaryBlue500}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue500}/>
        <CustomButton isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue500}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue500}/>
      </View>

      <View style={styles.componentDisplay}>
        <CustomButton title={'Button'} buttonColor={colors.primaryBlue600}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue600}/>
        <CustomButton isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue600}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue600}/>
      </View>

      <View style={styles.componentDisplay}>
        <CustomButton title={'Button'} buttonColor={colors.primaryBlue100}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} title={'Button'} buttonColor={colors.primaryBlue100}/>
        <CustomButton isIconRight={'true'} iconRight={'box'} title={'Button'} buttonColor={colors.primaryBlue100}/>
        <CustomButton isIconLeft={'true'} iconLeft={'box'} buttonColor={colors.primaryBlue100}/>
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
