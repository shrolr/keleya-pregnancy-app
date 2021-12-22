import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AppTheme} from '~constants';

interface IHeading {
  text: string;
}

export const Heading: React.FC<IHeading> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text ellipsizeMode="tail" numberOfLines={2} style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.7,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    color: AppTheme.colors.GREYISH_BROWN,
    ...AppTheme.textVariants.header,
  },
});
