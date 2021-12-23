import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
interface IContainer {
  style?: StyleProp<ViewStyle>;
}

export const Container: React.FC<IContainer> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
  },
});
