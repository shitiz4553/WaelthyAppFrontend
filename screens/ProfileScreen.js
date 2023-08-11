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
import assets from "../assets/assets";
import * as ImagePicker from 'expo-image-picker';
import Typo from "../components/Utils/Typo";
import InputBox from "../components/Utils/InputBox";

function ProfileScreen({navigation}){
    const [attachment,setAttachment] = useState("https://randomuser.me/api/portraits/women/20.jpg")
    const [activeTab, setActiveTab] = useState("personal");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setAttachment(result.assets[0].uri);
        }
      };


    return (
      <CustomView>
        <CustomHeader label={"Account"} />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View style={styles.container}>
            <View style={styles.profileHolder}>
              <View style={styles.image}>
                <Image
                  source={{
                    uri: attachment,
                  }}
                  style={styles.photo}
                />
              </View>
              <TouchableOpacity onPress={pickImage} style={styles.edit}>
                <Image source={assets.edit} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <View style={styles.bodyHolder}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tabTitle}>
                  <TouchableOpacity
                    style={styles.align}
                    onPress={() => setActiveTab("personal")}
                  >
                    <Typo grey={activeTab !== "personal"}>
                      Personal Details
                    </Typo>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.align}
                    onPress={() => setActiveTab("address")}
                  >
                    <Typo grey={activeTab !== "address"}>Address</Typo>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.align}
                    onPress={() => setActiveTab("work")}
                  >
                    <Typo grey={activeTab !== "work"}>Work</Typo>
                  </TouchableOpacity>
                </View>

                <View style={[styles.content, { paddingTop: 20 }]}>
                  {/* Content of the active tab goes here */}
                  {/* You can conditionally render the content based on the activeTab state */}
                  {activeTab === "personal" && (
                    <View style={styles.content}>
                      <View style={styles.boxContainer}>
                        <InputBox placeholder={"Full Name"} />
                      </View>
                      <View style={styles.boxContainer}>
                        <InputBox placeholder={"Email"} />
                      </View>
                      <View style={styles.boxContainer}>
                        <InputBox
                          keyboardType={"numeric"}
                          placeholder={"Security"}
                        />
                      </View>
                      <View style={[Theme.align, { gap: 15 }]}>
                        <InputBox
                          keyboardType={"numeric"}
                          placeholder={"Age"}
                        />
                        <InputBox placeholder={"Gender"} />
                      </View>
                      <View style={[Theme.align, { gap: 15 }]}>
                        <InputBox placeholder={"Marital Status"} />
                        <InputBox
                          keyboardType={"numeric"}
                          placeholder={"Dependents"}
                        />
                      </View>
                    </View>
                  )}
                  {activeTab === "address" && (
                    <View style={styles.content}>
                      <View style={[Theme.align, { gap: 15 }]}>
                        <InputBox placeholder={"Country"} />
                        <InputBox placeholder={"District/Canton"} />
                      </View>

                      <View style={{ height: 50 }}>
                        <InputBox placeholder={"Address"} />
                      </View>
                    </View>
                  )}
                  {activeTab === "work" && (
                    <View style={styles.content}>
                      <View style={{ height: 50 }}>
                        <InputBox placeholder={"Industry"} />
                      </View>

                      <View style={{ height: 50 }}>
                        <InputBox placeholder={"Occupation"} />
                      </View>
                      <View style={[Theme.align, { gap: 15 }]}>
                        <InputBox placeholder={"Annual Income"} />
                        <InputBox
                          keyboardType="numeric"
                          placeholder={"Financial Goal"}
                        />
                      </View>
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </CustomView>
    );}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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