import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Heading} from './Heading';

export const KeleyeBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/keleya-challenge-assets/keleya-logo.png')}
      />
      <Heading text="For a fit and relaxed pregnancy" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 4,
  },
});
