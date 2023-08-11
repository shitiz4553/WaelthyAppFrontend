import React, { useState } from "react";
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
import {budgets, goals, spendingsData} from "../Data/Data"
import GoalCard from "../components/HomeScreen/GoalCard";
import CustomView from "../components/Utils/CustomView";
import AnalyticCard from "../components/Analytics/AnalyticCard";

function AnalyticsScreen({navigation}){

  const colors = ["#B6DEC5", "#F2E7C3", "#BED3E6", "#E9D0BE", "#E9BED3"];

    return (
      <CustomView>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <DurationToggle />
            <Space space={15} />

            {/* pass your total spending stats here : */}
            <TotalSpentCard amountSpent={"1,150"} />

            <Space space={25} />

            <View style={styles.aligner}>
              <Typo light grey l>
                Spendings By Category
              </Typo>
            </View>

            {spendingsData.map((item, index) => {
              const cardColor = colors[index];
              return (
                <AnalyticCard
                  key={index}
                  icon={item.icon}
                  label={item.category}
                  amount={item.amount}
                  item={item}
                  totalSpentAmount={1125} // pass your total amount here..
                  color={cardColor} // Pass the color as a prop
                />
              );
            })}
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