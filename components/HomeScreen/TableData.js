import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Typo from "../Utils/Typo";

import { Feather } from "@expo/vector-icons";

function TableData({expense}){

    const difference = expense.projectedCost - expense.actualCost;
    const isOverBudget = difference < 0;

    return (
      <View style={styles.container}>
        <View style={styles.tab1}>
          <Typo light numberOfLines={1} s>
            {expense.title}
          </Typo>
        </View>
        <View style={styles.tab2}>
          <Typo light numberOfLines={1} s>
            CHF {expense.projectedCost}
          </Typo>
        </View>
        <View style={styles.tab3}>
          <Typo light numberOfLines={1} s>
            CHF {expense.actualCost}
          </Typo>
        </View>
        <View style={styles.tab4}>
          {isOverBudget ? (
            <Feather name="alert-circle" size={8} color="#FF0000" />
          ) : (
            <View style={styles.circle} />
          )}
          <Typo light numberOfLines={1} s>
            CHF {Math.abs(difference)}
          </Typo>
        </View>
      </View>
    );}
export default TableData;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  tab1: {
    width: "25%",
  },
  tab2: {
    width: "25%",
    paddingLeft: 5,
  },
  tab3: {
    width: "25%",
    paddingLeft: 10,
  },
  tab4: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    gap:5,
    paddingLeft:10
  },
  circle:{
    height:6,
    width:6,
    borderRadius:100,
    backgroundColor:'#05B705'
  }
});