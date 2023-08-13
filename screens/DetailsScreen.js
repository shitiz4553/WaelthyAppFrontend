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
import CustomView from "../components/Utils/CustomView";

function DetailsScreen({route}){
    
    const {item} = route.params;
    const refRBSheetBudget = useRef();
    const refRBSheetGoal = useRef();
    const [refreshing, setRefreshing] = useState(false);
    const isDarkMode = useStore((state) => state.isDarkMode);
    const [dueDate, setDueDate] = useState("");


    const [activeMonth, setActiveMonth] = useState("Jan");
    const [activeWeek, setActiveWeek] = useState("Week 1");
    const [selectedDuration,setSelectedDuration] = useState("");
  
    const handleDurationChange = (duration, activeLabel) => {
      if (duration === "month") {
        setActiveMonth(activeLabel);
        setSelectedDuration(duration);
      } else if (duration === "week") {
        setActiveWeek(activeLabel);
        setSelectedDuration(duration);
      }
    };


    const calculateTotalSpent = () => {
      let totalSpent = 0;
  
      if (item === "budget") {
        budgets.forEach((budget) => {
          const monthData = budget.months[activeMonth];
          if (monthData) {
            const weekData = monthData.weeks[activeWeek];
            if (weekData) {
              totalSpent += weekData.budgetSpent;
            }
          }
        });
      } else {
        goals.forEach((goal) => {
          const monthData = goal.months[activeMonth];
          if (monthData) {
            const weekData = monthData.weeks[activeWeek];
            if (weekData) {
              totalSpent += weekData.goalValue;
            }
          }
        });
      }
  
      return totalSpent;
    };
    

    

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

    const formatDueDateInput = (input) => {
      // Remove all non-numeric characters
      const cleanedInput = input.replace(/\D/g, "");
    
      // Format input with slashes
      let formattedInput = "";
      for (let i = 0; i < cleanedInput.length; i++) {
        if ((i === 2 || i === 4) && i !== 6) {
          formattedInput += "/";
        }
        formattedInput += cleanedInput[i];
      }
    
      return formattedInput.slice(0, 10); // Limit input to 10 characters (DD/MM/YYYY)
    };
        

    return (
      <CustomView style={styles.container}>
        <CustomHeader
          edit={true}
          label={item === "budget" ? "Budget" : "Goals"}
        />
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
            <DurationToggle
              activeMonth={activeMonth}
              activeWeek={activeWeek}
              onDurationChange={handleDurationChange}
            />
            <Space space={15} />
            <TotalSpentCard
              handleAddPress={handleSheet}
              amountSpent={calculateTotalSpent().toFixed(2)}
              label={item === "budget" ? "Total Spent" : "Total Saved"}
            />
            <Space space={15} />
            <View style={styles.aligner}>
              <Typo light grey l>
                {item === "budget" ? "Budget" : "Goals"}
              </Typo>
            </View>
            {item === "budget"
              ? budgets.map((budget, index) => {
                  const monthData = budget.months[activeMonth];
                  if (!monthData) return null;

                  const weekData = monthData.weeks[activeWeek];

                  return (
                    <BudgetCard
                      item={{ ...weekData, budgetTitle: budget.budgetTitle }}
                      key={index}
                    />
                  );
                })
              : goals.map((goal, index) => {
                  const monthData = goal.months[activeMonth];
                  if (!monthData) return null;

                  const weekData = monthData.weeks[activeWeek];

                  return (
                    <GoalCard
                      item={{ ...weekData, goalLabel: goal.goalLabel }}
                      key={index}
                    />
                  );
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
              <InputBox
                keyboardType="numeric"
                placeholder="Due Date: DD/MM/YY"
                value={dueDate}
                onChangeText={(text) => setDueDate(formatDueDateInput(text))}
              />
            </View>
            <Space space={10} />
            <FullButton color={Theme.secondaryColor} label={"Add"} />
            <FullButtonStroke
              handlePress={() => refRBSheetGoal.current.close()}
              label={"Cancel"}
            />
          </View>
        </RBSheet>
      </CustomView>
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