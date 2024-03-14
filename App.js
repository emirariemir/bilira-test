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
            <Text>BiLira</Text>
          </View>
          <View style={styles.topBarRight}>
            <Icon name='search' size={24} color={'#212121'}></Icon>
            <Icon name='bell' size={24} color={'#212121'}></Icon>
          </View>
        </View>
      </SafeAreaView>

      {/* BUDGET VIEW STARTS HERE ! */}
      <View style={styles.budgetView}></View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: colors.green,
  },

  topBarLeft: {
    flex: 1,
  },

  topBarLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  topBarRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  // 2 --
  budgetView: {
    flex: 1,
    backgroundColor: colors.orange,
  },

  // 3 --
  buttonsView: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  // 4 --
  inviteFriendView: {
    flex: 1,
    backgroundColor: colors.red,
  },

  // 5 --
  marketsView: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  // 6 --
  coinsView: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },

});
