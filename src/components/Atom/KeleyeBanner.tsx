import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppTheme} from '~constants';
import {Heading} from './Heading';

export const KeleyeBanner: React.FC = () => {
  const logoImage = require('../../assets/keleya-challenge-assets/keleya-logo.png');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
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
    marginBottom: AppTheme.spacing.xs,
  },
});
