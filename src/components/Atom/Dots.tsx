import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '~constants';

export const Dots: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dotStyleActive} />
      <View style={styles.dotStyle} />
      <View style={styles.dotStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  dotStyle: {
    backgroundColor: AppColors.LIGHT_TEAL,
    height: 10,
    marginHorizontal: 3,
    width: 10,
    borderRadius: 5,
  },
  dotStyleActive: {
    backgroundColor: AppColors.PALE_TEAL,
    height: 10,
    marginHorizontal: 3,
    width: 10,
    borderRadius: 5,
  },
});
