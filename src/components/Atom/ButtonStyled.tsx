import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {AppTheme} from '~constants';

interface IButtonStyled {
  text: string;
  testID: string;
  variant: 'outlined' | 'solid';
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const ButtonStyled: React.FC<IButtonStyled> = ({
  text,
  variant,
  testID,
  onPress,
}) => (
  <Pressable onPress={onPress} testID={testID} style={containerStyles[variant]}>
    <Text style={textStyles[variant]}>{text}</Text>
  </Pressable>
);

const containerStyles = StyleSheet.create({
  outlined: {
    marginVertical: AppTheme.spacing.xs,
    paddingVertical: AppTheme.spacing.xs,
    paddingHorizontal: AppTheme.spacing.m,
    alignSelf: 'center',
  },
  solid: {
    marginVertical: AppTheme.spacing.xs,
    borderRadius: 6,
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
    paddingVertical: AppTheme.spacing.s,
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.PALE_TEAL,
  },
});

const textStyles = StyleSheet.create({
  outlined: {
    color: AppTheme.colors.GREYISH_BROWN,
    textAlign: 'center',
    fontWeight: '700',
    ...AppTheme.textVariants.header,
  },
  solid: {
    fontWeight: '700',
    color: AppTheme.colors.WHITE,
    textAlign: 'center',
    ...AppTheme.textVariants.header,
  },
});
