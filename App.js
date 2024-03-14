import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from './assets/colors/colors';

export default function App() {
  return (
    <View style={styles.container}>

      {/* TOP BAR VIEW STARTS HERE ! */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBarView}>
          <View style={styles.topBarLeft}>
            <Icon name='menu' size={24} color={'#212121'}></Icon>
          </View>
          <View style={styles.topBarLogo}>
            <Text style={styles.logoText}>BiLira</Text>
          </View>
          <View style={styles.topBarRight}>
            <Icon name='search' size={24} color={'#212121'} style={styles.serachIcon}></Icon>
            <Icon name='bell' size={24} color={'#212121'}></Icon>
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

      <View style={styles.buttonsView}></View>
      <View style={styles.inviteFriendView}></View>
      <View style={styles.marketsView}></View>
      <View style={styles.coinsView}></View>
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

  // 1 --
  topBarView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  topBarLeft: {
    flex: 1,
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



  // 3 --
  buttonsView: {
    flex: 1.5,
    backgroundColor: colors.purple,
  },

  // 4 --
  inviteFriendView: {
    flex: 2,
    backgroundColor: colors.red,
  },

  // 5 --
  marketsView: {
    flex: 0.8,
    backgroundColor: colors.blue,
  },

  // 6 --
  coinsView: {
    flex: 6,
    backgroundColor: colors.lightGreen,
  },

});
