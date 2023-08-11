import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import InputBox from "../components/Utils/InputBox";
import assets from "../assets/assets";
import Theme from "../src/Theme";
import Space from "../components/Utils/Space";
import FullButton from "../components/Buttons/FullButton";
import FullButtonStroke from "../components/Buttons/FullButtonStroke";
import Typo from "../components/Utils/Typo";
import { LinearGradient } from "expo-linear-gradient";
import {windowWidth} from '../src/ScreenSize'

function LoginScreen({ navigation }) {

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["white", Theme.primaryColorLight]}
          style={styles.gradient}
        >
          <Image source={assets.logo} style={styles.logo} />
        </LinearGradient>
      </View>

      <View style={styles.body}>

      <KeyboardAvoidingView 
      behavior={Platform.OS ==='ios' ? 'padding' : null} 
      style={{flex:1}}>


        <View style={styles.shadow} />
        <View style={styles.curveView}>
          <View style={styles.headerWrapper}>
            <Typo xxl>Welcome Back!</Typo>
            <Space space={10} />
            <Typo grey>Please enter your account details to log in</Typo>
          </View>

          <View style={styles.infoWrapper}>

           <View style={{height:50,marginTop:10}}>
            <InputBox placeholder={'Email'} />
            </View>

            <View style={{height:50,marginTop:20}}>
            <InputBox secureTextEntry={true} placeholder={'Password'} />
            
            </View>
           <TouchableOpacity>
           <Typo s style={{textAlign:'right',color:Theme.secondaryColor}}>Forgot Password</Typo>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <FullButton handlePress={()=>navigation.navigate("MainRoute")} color={Theme.secondaryColor} label={"Login"} />
            <View style={styles.or}>
            <View style={styles.line}/>
            <Typo>OR</Typo>
            <View style={styles.line}/>
            </View>
            <FullButtonStroke image={assets.google} label={'Sign in with Google'} color={'#e0e0e0'}/>
            <View style={Theme.align}>
              <Typo light>Don't have an account? </Typo>
              <TouchableOpacity onPress={()=>navigation.navigate("CreateAccountScreen")}>
                <Typo style={{ color: Theme.secondaryColor }}>Sign Up</Typo>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </KeyboardAvoidingView>



        
      </View>
    </View>
  );
}
export default LoginScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColorLight,
    width: "100%",
  },
  header: {
    height: "22%",
    width: "100%",
  },
  logo: {
    height: 55,
    width: 155,
    resizeMode: "contain",
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: 25,
  },
  body: {
    flex: 1,
  },
  curveView: {
    flex: 1,
    borderTopLeftRadius: 35,
    backgroundColor: Theme.backgroundColor,
    borderTopRightRadius: 35,
    width: "100%",
  },
  shadow: {
    width: "95%",
    backgroundColor: "#AAE8C2",
    height: 55,
    position: "absolute",
    top: -12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    left: "2%",
  },
  headerWrapper: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  infoWrapper: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  or: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal:10
  },
});
