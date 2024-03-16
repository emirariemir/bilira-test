import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from './assets/colors/colors';
import CircleButton from './assets/components/circle-button';
import CoinCard from './assets/components/coin-card';
import InteractiveIcon from './assets/components/interactive-icon';

export default function App() {
  
  const handleIconPress = () => {
    console.log('Icon pressed!');
  };

  return (
    <View style={styles.container}>

      {/* TOP BAR VIEW STARTS HERE ! */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBarView}>
          <View style={styles.topBarLeft}>
            <InteractiveIcon iconName={'menu'} onPress={handleIconPress}/>
          </View>
          <View style={styles.topBarLogo}>
            <Text style={styles.logoText}>BiLira</Text>
          </View>
          <View style={styles.topBarRight}>
            <InteractiveIcon iconName={'search'} onPress={handleIconPress} rightMarginAmount={20}/>
            <InteractiveIcon iconName={'bell'} onPress={handleIconPress}/>
          </View>
        </View>
      </SafeAreaView>

      {/* BUDGET VIEW STARTS HERE ! */}
      <View style={styles.budgetView}>
        <View style={styles.budgetText}>
          <Text style={styles.budgetGreetingText}>Varlıkların toplam değeri</Text>
          <Icon name='eye' size={16} color={colors.lightGrey}/>
        </View>
        <View style={styles.budgetInfo}>
          <View style={styles.budgetInfoElements}>
            <Text style={styles.budgetAmountText}>4.883,98</Text>
            <Text style={styles.trybText}>TRYB</Text>
          </View>
        </View>
        <View style={styles.profitAmount}>
          <Icon name='arrow-up-right' size={16} color={colors.primaryGreen}/>
          <Text style={styles.percentText}>%1,60</Text>
          <Text style={styles.changedAmountText}>(+324.10 TRYB)</Text>
        </View>
      </View>

      {/* BUTTONS VIEW STARTS HERE ! */}
      <View style={styles.buttonsView}>
        <CircleButton iconName='download' title='Yatırma'/>
        <CircleButton iconName='plus' title='Kripto Al'/>
        <CircleButton iconName='send' title='Gönder'/>
        <CircleButton iconName='target' title='OTC'/>
        <CircleButton iconName='maximize' title='Tara'/>
      </View>

      {/* INVITE FRIEND STARTS HERE ! */}
      <View style={styles.inviteFriendView}>
        <View style={styles.mask}>
          <Image source={require('./assets/images/Bg.png')} style={styles.bannerImage}/>
        </View>
        <View style={styles.overlayContent}>
          <Text style={styles.overlayTitle}>Davet edin</Text>
          <Text style={styles.overlayText}>Arkadaşlarınızı davet ederek TRYB ödülleri kazanın.</Text>
        </View>
        <View style={styles.overlayCloseButton}>
          <Icon name='x' size={18} color={colors.primaryBlack}/>
        </View>
      </View>

      {/* MARKETS VIEW STARTS HERE ! */}
      <View style={styles.marketsView}>
        <Text style={styles.piyasalarText}>Piyasalar</Text>
        <View style={styles.categoryDropdown}>
          <Text style={styles.categoryText}>Popüler</Text>
          <Icon name='chevron-down' size={16} color={colors.primaryBlack}/>
        </View>
      </View>

      {/* COINS VIEW STARTS HERE ! */}
      <View style={styles.coinsView}>
        <SafeAreaView>
          <ScrollView>
            <CoinCard coinTag={'ETH'} coinName={'Ethereum'} graphName={'trending-up'} graphColor={colors.primaryGreen} price={'2,208.00'} arrowIconName={'arrow-up-right'} percentage={'%2.68'} />
            <CoinCard coinTag={'AVAX'} coinName={'Avalanche'} graphName={'trending-down'} graphColor={colors.red} price={'225.71'} arrowIconName={'arrow-down-right'} percentage={'%1.60'} />
            <CoinCard coinTag={'MATIC'} coinName={'Polygon'} graphName={'trending-up'} graphColor={colors.primaryGreen} price={'15.21'} arrowIconName={'arrow-up-right'} percentage={'%0.73'} />
            <CoinCard coinTag={'SOL'} coinName={'Solana'} graphName={'trending-up'} graphColor={colors.primaryGreen} price={'167.26'} arrowIconName={'arrow-up-right'} percentage={'%6.54'} />
            <CoinCard coinTag={'BTC'} coinName={'Bitcoin'} graphName={'trending-down'} graphColor={colors.red} price={'70,786.00'} arrowIconName={'arrow-down-right'} percentage={'%2.63'} />
            <CoinCard coinTag={'TRX'} coinName={'Tron'} graphName={'trending-down'} graphColor={colors.red} price={'0.13'} arrowIconName={'arrow-down-right'} percentage={'%2.03'} />
            <CoinCard coinTag={'ADA'} coinName={'Cardano'} graphName={'trending-up'} graphColor={colors.primaryGreen} price={'0.74'} arrowIconName={'arrow-up-right'} percentage={'%0.12'} />
          </ScrollView>
        </SafeAreaView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  // 1 ---------------------------------------------
  topBarView: {
    flex: 1,
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
    flex: 2,
    paddingHorizontal: 15,
  },

  budgetText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  budgetGreetingText: {
    paddingRight: 5,
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
    fontWeight: '700'
  },

  trybText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  profitAmount: {
    flex: 1,
    flexDirection: 'row',
  },

  percentText: {
    fontWeight: '600',
    paddingLeft: 3,
    paddingRight: 5,
    color: colors.primaryGreen,
  },

  changedAmountText: {
    color: colors.lightGrey,
  },

  // 3 ---------------------------------------------
  buttonsView: {
    flex: 1.5,
    flexDirection: 'row',
  },

  // 4 ---------------------------------------------
  inviteFriendView: {
    flex: 2.5,
    justifyContent: 'center',
    position: 'relative',
  },

  mask: {
    flex: 1,
    margin: 15,
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
    fontWeight: '600',
  },
  
  overlayText: {
    fontSize: 14,
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
    flex: 0.8,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  piyasalarText: {
    fontSize: 16,
    fontWeight: '700',
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
    fontWeight: '600',
  },

  // 6 ---------------------------------------------
  coinsView: {
    flex: 6,
    paddingHorizontal: 15,
  },

});
