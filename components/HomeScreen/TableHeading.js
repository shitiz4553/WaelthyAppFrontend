import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Typo from "../Utils/Typo";

function TableHeading({category}){
    return(
    <View style={styles.container}>
       <View style={styles.tab1}>
       <Typo numberOfLines={1} light grey s>{category.tabOneHeading}</Typo>
       </View>
       <View style={styles.tab2}>
       <Typo numberOfLines={1} light grey s>{category.tabTwoHeading}</Typo>
       </View>
       <View style={styles.tab3}>
       <Typo numberOfLines={1} light grey s>{category.tabThreeHeading}</Typo>
       </View>
       <View style={styles.tab4}>
       <Typo numberOfLines={1} light grey s>{category.tabFourHeading}</Typo>
       </View>
    </View>
    )}
export default TableHeading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding:10
  },
  tab1:{
    width:'25%'
  },
  tab2:{
    width:'25%'
  },
  tab3:{
    width:'25%'
  },
  tab4:{
    width:'20%'
  }
});