import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import Theme from "../../src/Theme";

function FullButtonStroke({color,label,handlePress,image}){
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.container, { borderWidth: 1, borderColor: color }]}
      >
        {image ? <Image source={image} style={styles.img} /> : null}
        <Text style={[styles.text]}>{label}</Text>
      </TouchableOpacity>
    );}
export default FullButtonStroke;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection:'row',
    alignItems:'center'
  },
  text: {
    fontSize: 16,
    fontFamily: Theme.OutfitMedium,
  },
  img:{
    height:20,
    width:20,
    resizeMode:'contain',
    marginRight:8
  }
});