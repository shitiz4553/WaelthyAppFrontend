import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons';
import useStore from "../../store";
import Theme from "../../src/Theme";

function IconHolder({icon,handlePress}){

    const isDarkMode = useStore((state) => state.isDarkMode)

    return(
    <TouchableOpacity onPress={handlePress} style={[styles.container,{
        backgroundColor:isDarkMode ? Theme.containerGreyDarkMode : Theme.containerGrey
    }]}>
      <Feather name={icon} size={17} color={isDarkMode ? "white" :"black"} />
    </TouchableOpacity>
    )}
export default IconHolder;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
  }
});