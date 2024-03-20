import React from 'react';
import { Animated } from 'react-native';

export default function HeaderTitle({ style, children, opacity, color }) {
  return <Animated.Text style={[style, {opacity: opacity, color: color }]}>{children}</Animated.Text>;
}