import React, { useRef, useState } from "react";
import { 
    View,
    ScrollView,
    StyleSheet,
    RefreshControl,
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import DurationToggle from "../components/HomeScreen/DurationToggle";
import Space from "../components/Utils/Space";
import { budgets, goals } from "../Data/Data";
import BudgetCard from "../components/HomeScreen/BudgetCard";
import Typo from "../components/Utils/Typo";
import TotalSpentCard from "../components/HomeScreen/TotalSpentCard";
import RBSheet from "react-native-raw-bottom-sheet";
import {windowHeight} from "../src/ScreenSize"
import useStore from "../store";
import Theme from "../src/Theme";
import InputBox from "../components/Utils/InputBox"
import FullButton from "../components/Buttons/FullButton"
import FullButtonStroke from "../components/Buttons/FullButtonStroke"
import GoalCard from "../components/HomeScreen/GoalCard";

function DetailsScreen({route}){
    
    const {item} = route.params;
    const refRBSheetBudget = useRef();
    const refRBSheetGoal = useRef();
    const [refreshing, setRefreshing] = useState(false);
    const isDarkMode = useStore((state) => state.isDarkMode);
    function handleRefresh() {
      // Simulate a data fetch or any other asynchronous task
      // You can replace this with your actual data fetching logic
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000); // Simulating a 2-second delay
    }
  

    const handleSheet = () => {
        if(item ==='budget'){
            refRBSheetBudget.current.open()
        }
        else{
            refRBSheetGoal.current.open()
        }
    }


    return (
      <View style={styles.container}>
        <CustomHeader label={item === "budget" ? "Budget" : "Goals"} />
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
            contentContainerStyle={{ alignItems: "center" }}
          >
            <DurationToggle />
            <Space space={15} />
            <TotalSpentCard
              handleAddPress={handleSheet}
              amountSpent={"1,150"}
              label={item ==="budget" ? "Total Spent" : "Total Saved"}
            />
            <Space space={15} />
            <View style={styles.aligner}>
              <Typo light grey l>
                {item === "budget" ? "Budget" : "Goals"}
              </Typo>
            </View>

            {item === "budget"
              ? budgets.map((item, index) => {
                  return <BudgetCard item={item} key={index} />;
                })
              : goals.map((item, index) => {
                  return <GoalCard item={item} key={index} />;
                })}


          </ScrollView>
        </View>

        <RBSheet
          ref={refRBSheetBudget}
          closeOnDragDown={true}
          height={windowHeight / 2}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: isDarkMode
                ? Theme.containerGreyDarkMode
                : "#FFF",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
          }}
        >
          <View style={styles.sheet}>
            <Typo xl>Add a new Budget</Typo>
            <Space space={25} />
            <View style={styles.boxWrapper}>
              <InputBox placeholder={"Enter Budget Name"} />
            </View>
            <View style={styles.boxWrapper}>
              <InputBox placeholder={"Type your description..."} />
            </View>
            <View style={styles.boxWrapper}>
              <InputBox keyboardType={"numeric"} placeholder={"Target Value"} />
            </View>
            <Space space={15} />
            <FullButton color={Theme.secondaryColor} label={"Add"} />
            <FullButtonStroke
              handlePress={() => refRBSheetBudget.current.close()}
              label={"Cancel"}
            />
          </View>
        </RBSheet>



        <RBSheet
          ref={refRBSheetGoal}
          closeOnDragDown={true}
          height={windowHeight / 1.8}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: isDarkMode
                ? Theme.containerGreyDarkMode
                : "#FFF",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
          }}
        >
          <View style={styles.sheet}>
            <Typo xl>Add a New Saving Goal</Typo>
            <Space space={10} />
            <View style={styles.boxWrapper}>
              <InputBox placeholder={"Enter Goal Name"} />
            </View>
            <View style={styles.boxWrapper}>
              <InputBox placeholder={"Type your description..."} />
            </View>
            <View style={styles.boxWrapper}>
              <InputBox keyboardType={"numeric"} placeholder={"Target Value"} />
            </View>
            <View style={styles.boxWrapper}>
              <InputBox keyboardType={"numeric"} placeholder={"Due Date"} />
            </View>
            <Space space={10} />
            <FullButton color={Theme.secondaryColor} label={"Add"} />
            <FullButtonStroke
              handlePress={() => refRBSheetGoal.current.close()}
              label={"Cancel"}
            />
          </View>
        </RBSheet>
      </View>
    );}
export default DetailsScreen;

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
  expand: {
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  sheet: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent:'space-evenly',
    paddingBottom:35
  },
  boxWrapper:{
    width:'100%',
    height:45
  }
});