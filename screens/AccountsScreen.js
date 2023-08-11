import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import CustomView from "../components/Utils/CustomView";
import Theme from "../src/Theme";
import LottieView from 'lottie-react-native';
import Typo from "../components/Utils/Typo";

function AccountsScreen({navigation}){

    return (
      <CustomView>
        <CustomHeader label={"Bank Accounts"} />
        <View style={styles.container}>
          <LottieView
            style={{ height: 188, width: 188 }}
            source={require("../assets/bank.json")}
            autoPlay
            loop
          />
          <Typo xxl>Link Bank Account</Typo>
          <Typo light grey>Coming soon!</Typo>
        </View>
      </CustomView>
    );}
export default AccountsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  profileHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyHolder: {
    flex: 3,
    paddingHorizontal: 20,
  },
  image: {
    height: 115,
    width: 115,
    borderRadius: 100,
    borderWidth: 1.5,
    borderStyle: "dashed",
    padding: 5,
    borderColor: Theme.primaryColor,
  },
  photo: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  edit: {
    bottom: 20,
  },
  tabTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  content: {
    flex: 1,
    gap: 15,
  },
  boxContainer:{
    width:'100%',
    height:50,
  }
});