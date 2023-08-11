import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import useStore from "../../store";
import Theme from "../../src/Theme";
import Typo from "../Utils/Typo";

function GoalCard({item}){

    const isDarkMode = useStore((state) => state.isDarkMode)

    const gv = item.goalValue;
    const gt = item.goalTarget;
    const percentage = (gv / gt) * 100;

    return(
    <View style={[styles.container,{backgroundColor:isDarkMode ? Theme.containerGreyDarkMode : Theme.backgroundColor}]}>
      <Typo>{item.goalLabel}</Typo>
      <View style={styles.aligner}>
        <Typo grey light s>CHF {item.goalValue}</Typo>
        <Typo light s>Target: {item.goalTarget}</Typo>
      </View>
      <View style={styles.progressBar}>
      <View
          style={{
            width: `${percentage}%`,
            backgroundColor:Theme.secondaryColor,
            borderRadius: 15,
            height: 5,
          }}
        ></View>
      </View>
    </View>
    )}
export default GoalCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
  },
  aligner: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  progressBar:{
    width:'100%',
    backgroundColor:'#F3F3F3',
    borderRadius:15,
    height:5,
    marginTop:5
  }
});