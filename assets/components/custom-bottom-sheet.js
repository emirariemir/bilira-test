import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import colors from '../colors/colors';

const { height: screenHeight } = Dimensions.get('window');

const CustomBottomSheet = ( { animatedStyleProp } ) => {
  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, animatedStyleProp]}>
        <Text>Bottom Sheet Content</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primaryBlue300,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    height: screenHeight / 2,
  },
});

export default CustomBottomSheet;
