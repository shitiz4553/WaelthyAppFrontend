import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    Image
} from "react-native";
import assets from "../../assets/assets";
import Theme from "../../src/Theme";
import IconHolder from "../Utils/IconHolder";
import Typo from "../Utils/Typo";
import { useNavigation } from "@react-navigation/native";

function CustomHeader({logoMode,label,edit}){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.innerView}>
            {logoMode ? (
              <Image source={assets.logo} style={styles.logo} />
            ) : (
              <View style={[Theme.align,{gap:10,flex:1,maxWidth:'25%'}]}>
                <IconHolder handlePress={()=>navigation.goBack()} icon={"arrow-left"} />
                <Typo l>{label}</Typo>
              </View>
            )}

            <View style={[Theme.align, { gap: 10 }]}>
              {edit ?<IconHolder icon={"edit"} /> : null}
              <IconHolder icon={"bell"} />
              <IconHolder icon={"grid"} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );}
export default CustomHeader;

const styles = StyleSheet.create({
  container: {

  },
  innerView: {
    paddingVertical: Platform.OS === "ios" ? 15 : 25,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo:{
    height:55,
    width:125,
    resizeMode:'contain'
  }
});