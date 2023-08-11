import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Theme from '../../src/Theme';


const Typo = ({
  numberOfLines,
  light,
  grey,
  children,
  xl,
  xxl,
  l,
  m,
  s,
  xs,
  white,
  fontFamily,
  style,
  ...props
}) => {
  const getFontSizeStyle = () => {
    if (xxl) return { fontSize: 30 };
    if (xl) return { fontSize: 24 };
    if (l) return { fontSize: 18 };
    if (m) return { fontSize: 16 };
    if (s) return { fontSize: 14 };
    if (xs) return { fontSize: 12 };
    return { fontSize: 16 }; // Default font size
  };

  const fontStyles = {
    fontFamily: light ? Theme.OutfitLight : Theme.OutfitMedium,
    color: grey ? Theme.lightTextcolor : white ? "white" : 'black',
  };

  // Merge the font size styles, font family, and provided styles
  const mergedStyles = [getFontSizeStyle(), fontStyles, style];

  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines :100}
      style={mergedStyles}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typo;
