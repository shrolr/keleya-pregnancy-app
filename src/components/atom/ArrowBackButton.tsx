import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
interface IArrowBackButton {
  onPress?: () => void;
}
const arrowBackIcon = require('../../assets/icons/left-arrow.png');

export const ArrowBackButton: React.FC<IArrowBackButton> = ({onPress}) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Image style={styles.icon} source={arrowBackIcon} />
  </Pressable>
);

const iconSize = 30;
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: iconSize / 2,
    left: iconSize / 2,
  },
  icon: {
    height: iconSize,
    width: iconSize,
  },
});
