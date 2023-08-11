import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import useStore from "../../store";
import Theme from "../../src/Theme";
import Typo from "../Utils/Typo";

function BudgetCard({item}){

    const isDarkMode = useStore((state) => state.isDarkMode)

    const budgetSpent = item.budgetSpent;
    const budgetAvailable = item.budgetAvailable;
    const percentage = (budgetSpent / budgetAvailable) * 100;

    return(
    <View style={[styles.container,{backgroundColor:isDarkMode ? Theme.containerGreyDarkMode : Theme.backgroundColor}]}>
      <Typo>{item.budgetTitle}</Typo>
      <View style={styles.aligner}>
        <Typo grey light s>Spent: CHF {item.budgetSpent}</Typo>
        <Typo light s>Available: {item.budgetAvailable}</Typo>
      </View>
      <View style={styles.progressBar}>
      <View
          style={{
            width: `${percentage}%`,
            backgroundColor: "#D3AF36",
            borderRadius: 15,
            height: 5,
          }}
        ></View>
      </View>
    </View>
    )}
export default BudgetCard;

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