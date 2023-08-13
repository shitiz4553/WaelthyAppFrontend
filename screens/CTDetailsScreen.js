import React, { useRef, useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    LogBox
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import DurationToggle from "../components/HomeScreen/DurationToggle";
import Space from "../components/Utils/Space";
import TotalSpentCard from "../components/HomeScreen/TotalSpentCard";
import RBSheet from "react-native-raw-bottom-sheet";
import { windowHeight } from "../src/ScreenSize";
import useStore from "../store";
import InputBox from "../components/Utils/InputBox";
import Typo from "../components/Utils/Typo";
import FullButton from "../components/Buttons/FullButton";
import FullButtonStroke from "../components/Buttons/FullButtonStroke";
import Theme from "../src/Theme";
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from "../components/Analytics/CategoryCard";
import * as Sharing from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';
import CustomView from "../components/Utils/CustomView";
import { Camera, CameraType } from 'expo-camera';

LogBox.ignoreAllLogs();


function CTDetailsScreen({route}){
    const {item,color,icon} = route.params;
    const [attachment,setAttachment] = useState(null)
    const sheet = useRef();
    const [cameraVisible, setCameraVisible] = useState(false);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

  const cameraRef = useRef()

    const takePhoto = async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        setAttachment(photo.uri);
        setCameraVisible(false);
        console.log("Clicked photograph URI:", photo.uri);
      }
    };
    
    const isDarkMode = useStore((state) => state.isDarkMode);
    const handleAddPress = () =>{
        sheet.current.open()
    }

    const [activeMonth, setActiveMonth] = useState("Jan");
    const [activeWeek, setActiveWeek] = useState("Week 1");
    const [selectedDuration,setSelectedDuration] = useState("");
  
    const handleDurationChange = (duration, activeLabel) => {
        if (duration === "month") {
            setActiveMonth(activeLabel);
            console.log(activeLabel)
            setSelectedDuration(duration)
        } else if (duration === "week") {
            setActiveWeek(activeLabel);
            console.log(activeLabel)
            setSelectedDuration(duration)
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
          quality: 1,
          allowsEditing:true
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setAttachment(result.assets[0].uri);
        }
      };
    
      const deleteImage = (index) => {
        setAttachment(null);
      };


      const shareAttachment = async (attachmentUri) => {
        console.log('lol')
        if (attachmentUri) {
            try {
                const result = await Sharing.shareAsync(attachmentUri);
                if (result.action === Sharing.ShareAction.shared) {
                    console.log("Attachment shared successfully");
                } else if (result.action === Sharing.ShareAction.dismissed) {
                    console.log("Sharing dismissed");
                }
            } catch (error) {
                console.log("Error sharing attachment:", error);
            }
        }
    };


    
    return (
      <CustomView>
        <CustomHeader label={item.category} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <DurationToggle
              activeMonth={activeMonth}
              activeWeek={activeWeek}
              onDurationChange={handleDurationChange}
            />
            <Space space={15} />

            {/* pass your total spending stats here : */}
            <TotalSpentCard
              handleAddPress={handleAddPress}
              label={item.category}
              amountSpent={item.amount}
            />

            <Space space={5} />

            {item.spendings &&
              item.spendings.map((spending, index) => {
                // Check if the current spending date is different from the previous one
                const currentDate = spending.spendingDate;
                const prevDate =
                  index > 0 ? item.spendings[index - 1].spendingDate : null;
                const showHeading = prevDate !== currentDate;

                return (
                  <React.Fragment key={index}>
                    {showHeading && (
                      <View style={styles.headingContainer}>
                        <Typo s>{currentDate}</Typo>
                      </View>
                    )}
                    <CategoryCard
                      label={spending.spendingTitle}
                      sublabel={spending.spendingSubtitle}
                      color={color}
                      amount={spending.spendingAmount}
                      icon={icon}
                    />
                  </React.Fragment>
                );
              })}
          </ScrollView>
        </View>

        <RBSheet
          ref={sheet}
          closeOnDragDown={true}
          height={windowHeight / 1.1}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: isDarkMode
                ? Theme.containerGreyDarkMode
                : "#FFF",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
          }}
        >
          <View style={styles.sheet}>
            <View style={{ paddingTop: 15 }}>
              <Typo xl>Add a new Expense</Typo>
            </View>
            <View style={{ flex: 1, gap: 15 }}>
              <Space space={15} />
              <View style={styles.boxWrapper}>
                <InputBox placeholder={"Type your description..."} />
              </View>
              <View style={styles.boxWrapper}>
                <InputBox
                  keyboardType={"numeric"}
                  placeholder={"Target Value"}
                />
              </View>
              <View style={styles.boxWrapper}>
                <InputBox keyboardType={"numeric"} placeholder={"Add Tip"} />
              </View>
              {!attachment ? (
                <View style={styles.direction}>
                  <TouchableOpacity
                  onPress={()=>setCameraVisible(true)}
                    style={[
                      styles.wrapper,
                      {
                        backgroundColor: isDarkMode ? "black" : "#e5e5e5",
                      },
                    ]}
                  >
                    <Ionicons
                      name="ios-add-sharp"
                      size={24}
                      color={isDarkMode ? "white" : "black"}
                    />
                    <Typo light>Add Receipt</Typo>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={pickImage}
                    style={[
                      styles.wrapper,
                      {
                        backgroundColor: isDarkMode ? "black" : "#e5e5e5",
                      },
                    ]}
                  >
                    <Ionicons
                      name="cloud-upload-outline"
                      size={24}
                      color={isDarkMode ? "white" : "black"}
                    />
                    <Typo light>Upload Receipt</Typo>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.uploader}>
                  <View style={Theme.align}>
                    <Image
                      style={styles.userPic}
                      source={{
                        uri: attachment,
                      }}
                    />
                    <Typo>Attachment Uploaded</Typo>
                  </View>
                  <View style={[Theme.align, { gap: 15 }]}>
                    <TouchableOpacity
                      onPress={() => shareAttachment(attachment)}
                    >
                      <Typo
                        style={{
                          color: Theme.secondaryColor,
                          textDecorationLine: "underline",
                        }}
                      >
                        Share
                      </Typo>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteImage}>
                      <Typo
                        style={{
                          color: "red",
                          textDecorationLine: "underline",
                        }}
                      >
                        Delete
                      </Typo>
                    </TouchableOpacity>
                  </View>
                </View>
              )}


        {cameraVisible && (
          <View style={{ flex: 1 }}>
            <Camera
              ref={cameraRef}
              style={{ flex: 1 }}
              type={type}
              ratio="16:9"
            />
            <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
              <Typo style={styles.captureButtonText}>Take Photo</Typo>
            </TouchableOpacity>
          </View>
        )}


            </View>
            <View style={{ flex: 0.25, justifyContent: "space-evenly" }}>
              <FullButton color={Theme.secondaryColor} label={"Add"} />
              <FullButtonStroke
                handlePress={() => sheet.current.close()}
                label={"Cancel"}
                color={isDarkMode ? "white" : "black"}
              />
            </View>
          </View>
        </RBSheet>
      </CustomView>
    );}
export default CTDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  sheet: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    paddingBottom: 35,
  },
  boxWrapper: {
    width: "100%",
    height: 45,
  },
  direction: {
    flexDirection: "row",
    gap: 15,
  },
  wrapper: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 11,
  },
  uploader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: "#e5e5e5",
  },
  userPic: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  headingContainer: {
    width: "90%",
    marginTop:10
},
captureButton: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 8,
},
captureButtonText: {
  color: 'white',
  fontSize: 16,
},
});