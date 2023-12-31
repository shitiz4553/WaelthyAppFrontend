import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import useStore from "../../store/index";
import Theme from "../../src/Theme";
import { Ionicons } from '@expo/vector-icons';
import Typo from "../Utils/Typo";
import { useNavigation } from "@react-navigation/native";




function AnalyticCard({
  icon,
  label,
  amount,
  totalSpentAmount,
  color,
  item
}) {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const percentage = (amount / totalSpentAmount) * 100;
  const progressWidth = percentage > 100 ? "100%" : `${percentage}%`;
  const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("CTDetailsScreen",{
      item:item ,//passing that item's details
      color:color,
      icon:icon,
    })}
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Theme.containerGreyDarkMode : "#FFF",
        },
      ]}
    >
      <View
        style={[
          styles.progressWrapper,
          {
            width: progressWidth,
            backgroundColor: color,
          },
        ]}
      ></View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 6 }}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isDarkMode ? "#202020" : "#FFF",
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={19}
            color={isDarkMode ? "white" : "black"}
          />
        </View>
        <Typo s>{label}</Typo>
      </View>

      <View style={styles.amountWrapper}>
        <Typo s>CHF {amount}</Typo>
        <Ionicons
          name={"arrow-forward-outline"}
          size={18}
          color={isDarkMode ? "white" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
}
export default AnalyticCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  progressWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position:'absolute',
    height:'100%',

  },
  amountWrapper:{
    position:'absolute',
    right:10,
    flexDirection:"row",
    alignItems:'center',
    gap:5
  }
});