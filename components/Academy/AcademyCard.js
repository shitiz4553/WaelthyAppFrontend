import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";

import Typo from "../Utils/Typo";
import Theme from "../../src/Theme";
import useStore from "../../store";
import { LinearGradient } from "expo-linear-gradient";
import Space from "../Utils/Space";

function AcademyCard({
  image,
  title,
  posterProfilePic,
  posterName,
  postedTime,
  minRead,
  articleMessage
}) {
  const isDarkMode = useStore((state) => state.isDarkMode);
  return (
    <View>
      <ImageBackground
        imageStyle={styles.imgStyle}
        style={styles.banner}
        source={{ uri: image }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.3)"]}
          style={styles.gradient}
        >
          <Typo xl white>
            {title}
          </Typo>
        </LinearGradient>
      </ImageBackground>
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
        <View style={{ flexDirection: "row", alignItems: "center",flex:1, }}>
          <Image source={{ uri: posterProfilePic }} style={styles.img} />
          <Typo s>{posterName}</Typo>
          <View style={styles.dot} />
          <Typo style={{ color: "#0A8E3D" }} xs>
            {postedTime}
          </Typo>
          <View style={styles.dot} />
          <Typo style={{ color: "#D3AF36" }} xs>
            {minRead}
          </Typo>
        </View>
       <Space space={10}/>
       <Typo s light>{articleMessage}</Typo>
      </View>
    </View>
  );
}
export default AcademyCard;

const styles = StyleSheet.create({
  container: {

    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 15,
  },
  img: {
    height: 22,
    width: 22,
    borderRadius: 100,
    marginRight: 5,
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  banner: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingBottom: 10,
    overflow: "hidden",
  },
  imgStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dot:{
    marginHorizontal:10,
    backgroundColor:'#d6d6d6',
    height:5,
    width:5,
    borderRadius:10
  }
});