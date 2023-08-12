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
import {budgets, expensesData, goals} from "../Data/Data"
import GoalCard from "../components/HomeScreen/GoalCard";
import CustomView from "../components/Utils/CustomView";
import useStore from "../store";
import Theme from "../src/Theme";
import TableData from "../components/HomeScreen/TableData";
import TableHeading from "../components/HomeScreen/TableHeading";

function HomeScreen({navigation}){
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const isDarkMode = useStore((state) => state.isDarkMode)
  function handleRefresh() {
    // Simulate a data fetch or any other asynchronous task
    // You can replace this with your actual data fetching logic
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a 2-second delay
  }

  const tags = ["Housing", "Personal Care", "Savings/Investments", "Academy", "Accounts"];

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

            {budgets.slice(0, 2).map((item, index) => {
              return <BudgetCard item={item} key={index} />;
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

            {goals.slice(0, 2).map((item, index) => {
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
                  <Typo
                    white={selectedTag === tag ? true : false}
                  >
                    {tag}
                  </Typo>
                </TouchableOpacity>
              ))}
            </ScrollView>

           <View style={{width:'100%',paddingHorizontal:20}}>
           {expensesData.map((category, categoryIndex) => {
              if (selectedTag === category.tabOneHeading) {
                return (
                  <View style={[styles.heading,{
                    backgroundColor:isDarkMode ? "black" : "white"
                  }]} key={categoryIndex}>
                    {/* Render category headings and tabs here */}

                    <TableHeading category={category}/>
                    {category.expenses.map((expense, expenseIndex) => (
                      <View
                      key={expenseIndex}
                      style={[
                        styles.expenseContainer,
                        {
                          backgroundColor:
                            expenseIndex % 2 === 0
                              ? isDarkMode
                                ? Theme.containerGreyDarkMode
                                : '#F9F9F9'
                              : isDarkMode
                              ? "black"
                              : "white",
                        },
                      ]}
                    >
                        <TableData expense={expense} />
                      </View>
                    ))}
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
    paddingHorizontal:10
  },
});