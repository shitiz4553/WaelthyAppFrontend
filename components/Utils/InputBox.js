import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import Theme from "../../src/Theme";
import { Ionicons,Feather } from '@expo/vector-icons';
import useStore from "../../store/index"

function InputBox({
  secureTextEntry,
  multiline,
  placeholder,
  leftIcon,
  keyboardType,
  maxLength,
  label,
  onChangeText,
  value,
  mobNum,
  textMode,
  handlePress,
  passwordMode,
}) {

const [eye,setEye] = useState(true)
const isDarkMode = useStore((state) => state.isDarkMode)
  return (
      <View
        style={[
          styles.container,
          ,
          {
            height: multiline ? 80 : 50,
            alignItems: multiline ? "flex-start" : "center",
            borderColor:isDarkMode ? "#7c7c7c" : "#EEECEC"
          },
        ]}
      >
        <View style={{flexDirection:'row',alignItems:'center'}}>
        {leftIcon ? (
          <Ionicons
            style={{ marginRight: 10 }}
            name={leftIcon}
            size={24}
            color={Theme.secondaryColor}
          />
        ) : null}
        <TextInput
          onPressIn={textMode ? handlePress : null}
          editable={textMode ? false : true}
          secureTextEntry={secureTextEntry ? secureTextEntry : passwordMode ? eye : false }
          value={value}
          multiline={multiline ? multiline : false}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          placeholderTextColor={textMode ? "black" : Theme.lightTextcolor}
          style={[styles.input,{color:isDarkMode ? "white":"black"}]}
          placeholder={placeholder}
          autoCapitalize="none"
        />
        </View>
        {passwordMode ? (
          <TouchableOpacity style={{position:'absolute',right:10}} onPress={()=>setEye(!eye)}>
            <Feather name={eye ? 'eye-off' : 'eye'}size={20} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
  );
}
export default InputBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#EEECEC',
    justifyContent: "space-between",
    borderRadius:10,
    paddingHorizontal:10,
    flex:1,
  },
  input: {

    fontSize: 14,
    fontFamily: Theme.OutfitMedium,

    flex: 1,
  },
  img: {
    height: 17,
    width: 17,
    resizeMode: "contain",
    marginRight: 15,
  },
  label: {
    fontFamily: Theme.MulishRegular,
    marginBottom: 10,
    fontSize: 16,
    color: Theme.lightTextcolor,
  },
});
