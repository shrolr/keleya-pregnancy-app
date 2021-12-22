import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {AppColors} from '~constants';

interface IHeading {
  text: string;
}

export const Heading: React.FC<IHeading> = ({text}) => {
  return (
    <Text ellipsizeMode="tail" numberOfLines={2} style={styles.text}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: AppColors.GREYISH_BROWN,
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: Dimensions.get('screen').width * 0.7,
  },
});
