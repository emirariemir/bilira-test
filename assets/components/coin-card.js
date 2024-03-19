import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '/Users/emir/BiLiraTest/assets/colors/colors.js';
import { useFonts } from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const cardHeight = screenHeight * 0.07746478873;

const CoinCard = ({ coinColor, coinTag, coinName, textColor, graphName, graphColor, price, arrowIconName, percentage }) => {

    const [fontsLoaded, fontError] = useFonts({
        'Archivo-Bold': require('../../assets/fonts/Archivo-Bold.ttf'),
        'Archivo-ExtraBold': require('../../assets/fonts/Archivo-ExtraBold.ttf'),
        'Archivo-ExtraLight': require('../../assets/fonts/Archivo-ExtraLight.ttf'),
        'Archivo-Light': require('../../assets/fonts/Archivo-Light.ttf'),
        'Archivo-Medium': require('../../assets/fonts/Archivo-Medium.ttf'),
        'Archivo-Regular': require('../../assets/fonts/Archivo-Regular.ttf'),
        'Archivo-SemiBold': require('../../assets/fonts/Archivo-SemiBold.ttf'),
        'Archivo-Thin': require('../../assets/fonts/Archivo-Thin.ttf'),
      });

    return (
        <View style={cardStyle.coinCard}>
          <View style={cardStyle.coinImage}>
            <View style={[cardStyle.image, {backgroundColor: coinColor}]}></View>
          </View>
          <View style={cardStyle.coinInfo}>
            <View style={cardStyle.coinTag}>
                <Text style={{fontFamily: 'Archivo-Bold', fontSize: 16, color: textColor}}>{coinTag}</Text>
                <Text style={{fontSize: 12, fontFamily: 'Archivo-Light', color: textColor}}> / USDT</Text>
            </View>
            <View style={cardStyle.coinName}>
                <Text style={{color: textColor}}>{coinName}</Text>
            </View>
          </View>
          <View style={cardStyle.graph}>
            <Icon name={graphName} size={40} color={graphColor}/>
          </View>
          <View style={cardStyle.priceInfo}>
            <View style={cardStyle.currentPrice}>
                <Text style={{fontSize: 16, fontWeight: '700', color: textColor}}>{price}</Text>
                <Text style={{fontSize: 12, color: textColor}}> USDT</Text>
            </View>
            <View style={cardStyle.percentage}>
                <Icon name={arrowIconName} size={20} color={graphColor}/>
                <Text style={{fontSize: 15, fontWeight: '700', color: graphColor}}>{percentage}</Text>
            </View>
          </View>
        </View>
    )
}

const cardStyle = StyleSheet.create({
    coinCard: {
        flexDirection: 'row',
        height: cardHeight,
        width: '%100',
    },

    coinImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    image: {
        width: cardHeight * 0.65,
        height: cardHeight * 0.65,
        borderRadius: 64,
        backgroundColor: colors.primaryBlue,
    },

    coinInfo: {
        flex: 1.5,
    },

    coinTag: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    coinName: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    graph: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    priceInfo: {
        flex: 2.2,
    },

    currentPrice: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    percentage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

});

export default CoinCard;