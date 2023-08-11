import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
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
  const [refreshing, setRefreshing] = useState(false);

  function handleRefresh() {
    // Simulate a data fetch or any other asynchronous task
    // You can replace this with your actual data fetching logic
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a 2-second delay
  }

    return (
      <CustomView>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
          <ScrollView
           refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["grey"]} // Colors for the loading spinner (Android only)
              tintColor={"grey"} // Color for the loading spinner (iOS only)
            />
          }
          contentContainerStyle={{ alignItems: "center" }}>
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
              <TouchableOpacity onPress={()=>navigation.navigate("DetailsScreen",{
                item:"budget"
              })}>
                <Image source={assets.expand} style={styles.expand} />
              </TouchableOpacity>
            </View>

            {budgets.slice(0, 2).map((item,index) => {
              return <BudgetCard item={item} key={index} />;
            })}


            <Space space={25} />

            <View style={styles.aligner}>
              <Typo light grey l>
                Goals
              </Typo>
              <TouchableOpacity onPress={()=>navigation.navigate("DetailsScreen",{
                item:"goals"
              })}>
                <Image source={assets.expand} style={styles.expand} />
              </TouchableOpacity>
            </View>

            {goals.slice(0, 2).map((item,index) => {
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