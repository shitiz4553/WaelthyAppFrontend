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

function HomeScreen({navigation}){


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

            <BudgetHealth needsValue={55} wantsValue={-55} savesValue={-55} />

            <Space space={25} />

            <View style={styles.aligner}>
              <Typo light grey l>
                Budgets
              </Typo>
              <TouchableOpacity>
                <Image source={assets.expand} style={styles.expand} />
              </TouchableOpacity>
            </View>

            {budgets.map((item,index) => {
              return <BudgetCard item={item} key={index} />;
            })}


            <Space space={25} />

            <View style={styles.aligner}>
              <Typo light grey l>
                Goals
              </Typo>
              <TouchableOpacity>
                <Image source={assets.expand} style={styles.expand} />
              </TouchableOpacity>
            </View>

            {goals.map((item,index) => {
              return <GoalCard item={item} key={index} />;
            })}

            <Space space={25} />

            <View style={styles.aligner}>
              <Typo light grey l>
                Expenses
              </Typo>
              <TouchableOpacity>
                <Image source={assets.expand} style={styles.expand} />
              </TouchableOpacity>
            </View>

            
          </ScrollView>
        </View>
      </CustomView>
    );}
export default HomeScreen;

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