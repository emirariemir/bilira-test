import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '/Users/emir/BiLiraTest/assets/colors/colors.js';

const screenHeight = Dimensions.get('window').height;
const cardHeight = screenHeight * 0.07746478873;

const CoinCard = ({ coinTag, coinName, graphName, graphColor, price, arrowIconName, percentage }) => {
    return (
        <View style={cardStyle.coinCard}>
          <View style={cardStyle.coinImage}>
            <View style={cardStyle.image}></View>
          </View>
          <View style={cardStyle.coinInfo}>
            <View style={cardStyle.coinTag}>
                <Text style={{fontWeight: '700', fontSize: 16}}>{coinTag}</Text>
                <Text style={{fontSize: 12}}> / USDT</Text>
            </View>
            <View style={cardStyle.coinName}>
                <Text>{coinName}</Text>
            </View>
          </View>
          <View style={cardStyle.graph}>
            <Icon name={graphName} size={40} color={graphColor}/>
          </View>
          <View style={cardStyle.priceInfo}>
            <View style={cardStyle.currentPrice}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>{price}</Text>
                <Text style={{fontSize: 12}}> USDT</Text>
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