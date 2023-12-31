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
import { budgets, expensesData, goals, totalSpentData } from "../Data/Data";
import GoalCard from "../components/HomeScreen/GoalCard";
import CustomView from "../components/Utils/CustomView";
import useStore from "../store";
import Theme from "../src/Theme";
import TableData from "../components/HomeScreen/TableData";
import TableHeading from "../components/HomeScreen/TableHeading";

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Housing");
  const isDarkMode = useStore((state) => state.isDarkMode);

  const [activeMonth, setActiveMonth] = useState("Jan");
  const [activeWeek, setActiveWeek] = useState("Week 1");
  const [selectedDuration,setSelectedDuration] = useState("week");

  function calculateAmountSpent() {
    if (selectedDuration === "week") {
      return totalSpentData[activeMonth]?.weeks[activeWeek] || 0;
    } else if (selectedDuration === "month") {
      const activeMonthData = totalSpentData[activeMonth];
      if (activeMonthData) {
        return Object.values(activeMonthData.weeks).reduce((sum, value) => sum + value, 0);
      }
    }
    return 0; // Default value if none of the conditions match
  }
  
  

  const handleDurationChange = (duration, activeLabel) => {
    if (duration === "month") {
      setActiveMonth(activeLabel);
      setActiveWeek("Week 1"); // Set the active week to "Week 1" whenever a new month is selected
      setSelectedDuration(duration);
    } else if (duration === "week") {
      setActiveWeek(activeLabel);
      setSelectedDuration(duration);
    }
  };
  

  
  function handleRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  const tags = [
    "Housing",
    "Personal Care",
    "Savings/Investments",
    "Academy",
    "Accounts",
  ];

  //assuming you are fetching the needs and wants from your api and storing it in a state.
  const [needs] = useState(5000)
  const [wants] = useState(2500)
  const [saves] = useState(2500)

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
          contentContainerStyle={{ alignItems: "center" }}
        >
          <DurationToggle
            activeMonth={activeMonth}
            activeWeek={activeWeek}
            onDurationChange={handleDurationChange}
          />

          <Space space={15} />

          {/* pass your total spending stats here : */}
          <TotalSpentCard
            totalAmount={totalSpentData[
              activeMonth
            ]?.thisMonthBudget.toString()}
            amountSpent={calculateAmountSpent().toString()}
          />

          <Space space={25} />

          <BudgetHealth
            needs={needs}
            wants={wants}
            saves={saves}
            needsValue={55} // pass the increment and decrement values based on your previous data.
            wantsValue={-55} // pass the increment and decrement values based on your previous data.
            savesValue={-55} // pass the increment and decrement values based on your previous data.
          />

          <Space space={25} />

          <View style={styles.aligner}>
            <Typo light grey l>
              Budgets
            </Typo>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailsScreen", {
                  item: "budget",
                })
              }
            >
              <Image source={assets.expand} style={styles.expand} />
            </TouchableOpacity>
          </View>
          {Object.values(budgets)
            .slice(0, 2)
            .map((budget, index) => {
              const monthData = budget.months[activeMonth];
              if (!monthData) return null;

              const weekData = monthData.weeks[activeWeek];

              return (
                <BudgetCard
                  item={{ ...weekData, budgetTitle: budget.budgetTitle }}
                  key={`budget_${index}`}
                />
              );
            })}

          <Space space={25} />

          <View style={styles.aligner}>
            <Typo light grey l>
              Goals
            </Typo>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailsScreen", {
                  item: "goals",
                })
              }
            >
              <Image source={assets.expand} style={styles.expand} />
            </TouchableOpacity>
          </View>

          {Object.values(goals)
            .slice(0, 2)
            .map((goal, index) => {
              const monthData = goal.months[activeMonth];
              if (!monthData) return null;

              const weekData = monthData.weeks[activeWeek];

              return (
                <GoalCard
                  item={{ ...weekData, goalLabel: goal.goalLabel }}
                  key={`goal_${index}`}
                />
              );
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

          <ScrollView
            horizontal
            style={styles.tagholder}
            showsHorizontalScrollIndicator={false}
          >
            {tags.map((tag, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedTag(tag)}
                style={[
                  styles.tag,
                  {
                    backgroundColor:
                      selectedTag === tag
                        ? "#D3AF36"
                        : isDarkMode
                        ? Theme.containerGreyDarkMode
                        : Theme.containerGrey,
                  },
                ]}
              >
                <Typo white={selectedTag === tag ? true : false}>{tag}</Typo>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={{ width: "100%", paddingHorizontal: 20 }}>
  {expensesData.map((category, categoryIndex) => {
    if (selectedTag === category.tabOneHeading) {
      return (
        <View
          style={[
            styles.heading,
            {
              backgroundColor: isDarkMode ? "black" : "white",
            },
          ]}
          key={categoryIndex}
        >
          <TableHeading category={category} />
          {category.months[activeMonth]?.weeks[activeWeek]?.map(
            (weekExpenses, weekIndex) => (
              <View
                key={weekIndex}
                style={[
                  styles.expenseContainer,
                  {
                    backgroundColor:
                      weekIndex % 2 === 0
                        ? isDarkMode
                          ? Theme.containerGreyDarkMode
                          : "#F9F9F9"
                        : isDarkMode
                        ? "black"
                        : "white",
                  },
                ]}
              >
                <TableData expense={weekExpenses} />
              </View>
            )
          )}
        </View>
      );
    } else {
      return null;
    }
  })}
</View>

        </ScrollView>
      </View>
    </CustomView>
  );
}
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
  expand: {
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  tagholder: {
    width: "100%",
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  heading: {
    borderRadius: 10,
  },
  expenseContainer: {
    paddingVertical: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
});
