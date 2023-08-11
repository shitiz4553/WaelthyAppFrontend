import React from "react";
import { 
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import DurationToggle from "../components/HomeScreen/DurationToggle";
import Space from "../components/Utils/Space";
import TotalSpentCard from "../components/HomeScreen/TotalSpentCard";
import BudgetHealth from "../components/HomeScreen/BudgetHealth";
import Typo from "../components/Utils/Typo";
import BudgetCard from "../components/HomeScreen/BudgetCard";
import assets from "../assets/assets";
import {budgets, goals} from "../Data/Data"
import GoalCard from "../components/HomeScreen/GoalCard";
import CustomView from "../components/Utils/CustomView";

function AnalyticsScreen({navigation}){

    return (
      <CustomView>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <DurationToggle />
            <Space space={15} />

            {/* pass your total spending stats here : */}
            <TotalSpentCard totalAmount="5,000" amountSpent={"1,150"} />

            <Space space={25} />

       
            
          </ScrollView>
        </View>
      </CustomView>
    );}
export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingTop: 20,
  },
  aligner: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expand:{
    height:15,
    width:15,
    resizeMode:'contain'
  }
});