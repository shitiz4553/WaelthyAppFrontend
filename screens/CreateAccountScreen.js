import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import InputBox from "../components/Utils/InputBox";
import assets from "../assets/assets";
import Theme from "../src/Theme";
import Space from "../components/Utils/Space";
import FullButton from "../components/Buttons/FullButton";
import Typo from "../components/Utils/Typo";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {windowWidth} from '../src/ScreenSize'

function CreateAccountScreen({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const flatListRef = useRef(null);

  const slides = [
    {
      title: "Personal Details",
    },
    {
      title: "Address",
    },
    {
      title: "Income",
    },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Typo>{item.title}</Typo>
      <View style={styles.line}/>


      {
        index === 0 ?
        <PersonalInfo />
        :
        index === 1 ?
        
        <AddressInfo/>
        :
        <IncomeInfo/>
      }

    </View>
  );

  const renderDot = ({ item, index }) => (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: activeSlide === index ? Theme.secondaryColor : Theme.primaryColorLight,
        },
      ]}
    />
  );


  const handleNext = () => {
    if (flatListRef.current) {
      const nextSlide = activeSlide + 1;
      if (nextSlide < slides.length) {
        flatListRef.current.scrollToIndex({ index: nextSlide, animated: true });
        setActiveSlide(nextSlide);
      }
    }
  };


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

      <KeyboardAvoidingView behavior={Platform.OS ==='ios' ? 'padding' : null} style={{flex:1,}}>


        <View style={styles.shadow} />
        <View style={styles.curveView}>
          <View style={styles.headerWrapper}>
            <Typo xxl>Create Account</Typo>
            <Space space={10} />
            <Typo grey>Join our community</Typo>
          </View>

          <View style={styles.sliderWrapper}>

          <FlatList 
            ref={flatListRef}
            data={slides}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            onMomentumScrollEnd={(event) => {
              const slideWidth = event.nativeEvent.layoutMeasurement.width;
              const offset = event.nativeEvent.contentOffset.x;
              const currentSlide = Math.floor(offset / slideWidth);
              setActiveSlide(currentSlide);
            }}
          />
            <View style={styles.dotContainer}>
              {slides.map((_, index) => (
                <View key={index} style={styles.dotWrapper}>
                  {renderDot({ item: _, index })}
                </View>
              ))}
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <FullButton handlePress={handleNext} color={Theme.secondaryColor} label={"Next"} />
            <View style={Theme.align}>
              <Typo light>Already have an account? </Typo>
              <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
                <Typo style={{ color: Theme.secondaryColor }}>Sign in</Typo>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </KeyboardAvoidingView>



        
      </View>
    </View>
  );
}
export default CreateAccountScreen;






//component for fetching personal details info
const PersonalInfo = () =>{
  return(
    <View style={{width:'100%',flex:1,justifyContent:'space-evenly'}}>

      <View style={{height:50}}>
      <InputBox placeholder={'Full Name'} />
      </View>
      <View style={{height:50}}>
      <InputBox placeholder={'Email'} />
      </View>
      <View style={[Theme.align,{gap:15}]}>
      <InputBox keyboardType={'numeric'} placeholder={'Age'} />
      <InputBox placeholder={'Gender'} />
      </View>
      <View style={[Theme.align,{gap:15}]}>
      <InputBox placeholder={'Marital Status'} />
      <InputBox keyboardType={'numeric'} placeholder={'Dependents'} />
      </View>
    </View>
  )
}

//component for fetching address details info
const AddressInfo = () =>{
  return(
    <View style={{width:'100%',flex:1,gap:25,marginTop:25}}>

      <View style={[Theme.align,{gap:15}]}>
      <InputBox  placeholder={'Country'} />
      <InputBox placeholder={'District/Canton'} />
      </View>

      <View style={{height:50}}>
      <InputBox placeholder={'Address'} />
      </View>

    </View>
  )
}


//component for fetching personal details info
const IncomeInfo = () =>{

  const [agree,setAgree] = useState(false)
  const handleCheckboxToggle = () => {
    setAgree(!agree); // Toggle the agree state
  };


  return(
    <View style={{width:'100%',flex:1,marginTop:25,gap:25}}>

      <View style={{height:50}}>
      <InputBox placeholder={'Industry'} />
      </View>
      <View style={{height:50}}>
      <InputBox placeholder={'Occupation'} />
      </View>
      <View style={[Theme.align,{gap:15}]}>
      <InputBox keyboardType={'numeric'} placeholder={'Annual Income'} />
      <InputBox placeholder={'Financial Goal'} />
      </View>
      <View style={Theme.align}>
        <TouchableOpacity style={{marginRight:8}} onPress={handleCheckboxToggle}>
        <Ionicons
            name={agree ? "checkbox-outline" : "square-outline"}
            size={24}
            color={agree ? Theme.secondaryColor : "gray"}
          />
        </TouchableOpacity>
        <Typo s light>I agree with the </Typo>
        <TouchableOpacity>
        <Typo style={{color:Theme.secondaryColor}} s>Terms and Conditions </Typo>
        </TouchableOpacity>
      </View>
    </View>
  )
}



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
    paddingTop:20
  },
  sliderWrapper: {
    flex: 2.4,
    marginBottom: 20,
  },
  slide: {
    width:windowWidth,
    padding:20,
    alignItems:'center'
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dotWrapper: {
    marginHorizontal: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal:20,
    paddingBottom:20
  },
  line:{
    width:50,
    height:5,
    borderRadius:100,
    backgroundColor:Theme.primaryColor,
    marginTop:5
  }
});
