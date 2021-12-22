import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '~constants';

interface IButtonStyled {
  text: string;
  testID: string;
  variant: 'outlined' | 'solid';
}

export const ButtonStyled: React.FC<IButtonStyled> = ({
  text,
  variant,
  testID,
}) => {
  return (
    <View testID={testID} style={containerStyles[variant]}>
      <Text style={textStyles[variant]}>{text}</Text>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  outlined: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  solid: {
    marginVertical: 4,
    borderRadius: 6,
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: AppColors.PALE_TEAL,
  },
});

const textStyles = StyleSheet.create({
  outlined: {
    fontSize: 18,
    color: AppColors.GREYISH_BROWN,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  solid: {
    fontSize: 20,
    letterSpacing: 0.7,
    fontWeight: '700',
    color: AppColors.WHITE,
    textAlign: 'center',
  },
});
