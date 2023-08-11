import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Typo from "../Utils/Typo";
import Theme from "../../src/Theme";
import Space from "../Utils/Space";

function BudgetHealth({needsValue, wantsValue, savesValue}){

    const getColorStyle = (value) => {
        return value !== null && value >= 0 ? { color: "green" } : { color: "red" };
      };
    
      const formatValue = (value) => {
        if (value === null) {
          return "null";
        }
        if (value === undefined) {
          return "";
        }
        return value >= 0 ? `+${value}` : value.toString();
      };
    

    return(
    <View style={styles.container}>
        <Typo l light grey>Budget Health</Typo>
        <View style={styles.barWrapper}>
        <View style={styles.needs}>
        <View style={styles.flex}>
        <Typo black s>CHF 5000</Typo>
        <Typo black s light>Needs</Typo>
        <Space space={8}/>
        <Typo light style={getColorStyle(needsValue)}>{formatValue(needsValue)}</Typo>
        </View>
        </View>
        <View style={styles.wants}>
        <View style={styles.flex}>
        <Typo black s>CHF 5000</Typo>
        <Typo black s light>Wants</Typo> 
        <Space space={8}/>
        <Typo light style={getColorStyle(wantsValue)}>{formatValue(wantsValue)}</Typo>
        </View>
        </View>
        <View style={styles.saves}>
        <View style={styles.flex}>
        <Typo black s>CHF 5000</Typo>
        <Typo black s light>Saves</Typo>
        <Space space={8}/>
        <Typo light style={getColorStyle(savesValue)}>{formatValue(savesValue)}</Typo>
        </View>
        </View>
        </View>
    </View>
    )}
export default BudgetHealth;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  barWrapper: {
    marginTop: 10,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  needs: {
    flex:1.5,
    backgroundColor: "#BED3E6",
  },
  wants: {
    flex:1,
    backgroundColor: "#F2E7C3",
  },
  saves: {
    flex:1,
    backgroundColor: "#B6DEC5",
  },
  flex:{
    flex:1,
    padding:15
  }
});