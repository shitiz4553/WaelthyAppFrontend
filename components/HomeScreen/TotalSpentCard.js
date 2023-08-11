import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Theme from "../../src/Theme";
import Typo from "../Utils/Typo";

function TotalSpentCard({amountSpent,totalAmount}){
    return(
    <View style={styles.container}>
        <Typo light white>Total Spent</Typo>
        <View style={styles.aligner}>
        <Typo xxl white>CHF {amountSpent}</Typo>
        <Typo white light s>~ Out of CHF {totalAmount}</Typo>
        </View>
    </View>
    )}
export default TotalSpentCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Theme.primaryColor,
    paddingHorizontal: 15,
  },
  aligner:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:15
  }
});