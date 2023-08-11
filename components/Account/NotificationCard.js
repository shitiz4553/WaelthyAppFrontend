import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import Typo from "../Utils/Typo";
import Theme from "../../src/Theme";
import useStore from "../../store";

function NotificationCard({image,title,subtitle}){
  const isDarkMode = useStore((state) => state.isDarkMode)
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode
              ? Theme.containerGreyDarkMode
              : Theme.backgroundColor,
          },
        ]}
      >
        <Image source={image} style={styles.img} />

        <View style={{ paddingLeft: 10,flex:1 }}>
          <Typo>{title}</Typo>
          <Typo xs grey>
            {subtitle}
          </Typo>
        </View>
      </View>
    );}
export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical:15,
    borderRadius:10,
    paddingHorizontal:15,
    width:'100%'
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  circle:{
    height:45,
    width:45,
    borderRadius:100,
  }
});