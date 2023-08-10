import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../../src/Theme";


function FullButton({color,label,handlePress}){
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.container, { backgroundColor: color }]}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );}
export default FullButton;

const styles = StyleSheet.create({
    container: {
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    text:{
        fontSize:16,
        fontFamily:Theme.OutfitMedium,
        color:'#FFF'
    }
});