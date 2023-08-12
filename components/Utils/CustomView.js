import React from 'react';
import {  StyleSheet,View } from "react-native";
import Theme from '../../src/Theme';
import useStore from '../../store';

const CustomView = ({ children }) => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (

      <View
        style={[styles.container, { backgroundColor:isDarkMode ? "black" : "#f7f7f7" }]}
      >
         {children}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomView;