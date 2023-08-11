import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
} from "react-native";

import useStore from "../../store/index";
import Theme from "../../src/Theme";
import { Ionicons } from '@expo/vector-icons';
import Typo from "../Utils/Typo";
import { useNavigation } from "@react-navigation/native";




function CategoryCard({
  icon,
  label,
  amount,
  color,
  item,
  sublabel
}) {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const navigation = useNavigation()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Theme.containerGreyDarkMode : "#FFF",
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems:'center',padding: 12 }}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: color,
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={19}
            color={isDarkMode ? "white" : "black"}
          />
        </View>
        <View>
        <Typo>{label}</Typo>
        <Typo s grey>{sublabel}</Typo>
        </View>
      </View>

      <View style={styles.amountWrapper}>
        <Typo s>CHF {amount}</Typo>
      </View>
    </View>
  );
}
export default CategoryCard;

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
    height: 45,
    width: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  amountWrapper:{
    position:'absolute',
    right:10,
    flexDirection:"row",
    alignItems:'center',
    gap:5
  }
});