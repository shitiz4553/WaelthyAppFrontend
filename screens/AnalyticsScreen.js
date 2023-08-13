import React, { useState } from "react";
import { 
    View,
    StyleSheet,
    ScrollView,
    Dimensions
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import DurationToggle from "../components/HomeScreen/DurationToggle";
import Space from "../components/Utils/Space";
import TotalSpentCard from "../components/HomeScreen/TotalSpentCard";
import Typo from "../components/Utils/Typo";
import { monthData, spendingsData} from "../Data/Data"
import CustomView from "../components/Utils/CustomView";
import AnalyticCard from "../components/Analytics/AnalyticCard";
import useStore from "../store";
import Theme from "../src/Theme";

import { BarChart } from "react-native-gifted-charts";



function AnalyticsScreen({navigation}){

  const colors = ["#B6DEC5", "#F2E7C3", "#BED3E6", "#E9D0BE", "#E9BED3"];

  const [chartData, setChartData] = useState(monthData);
  const [activeMonth, setActiveMonth] = useState("Jan");
  const [activeWeek, setActiveWeek] = useState("Week 1");
  const [selectedDuration,setSelectedDuration] = useState("week");

  const handleDurationChange = (duration, activeLabel) => {
      if (duration === "month") {
          setActiveMonth(activeLabel);
          console.log(activeLabel)
          setSelectedDuration(duration)
      } else if (duration === "week") {
          setActiveWeek(activeLabel);
          console.log(activeLabel)
          setSelectedDuration(duration)
      }
  };

  function calculateTotalSpentAmount() {
    if (selectedDuration === "week") {
      const activeMonthData = chartData.find(month => month.month === activeMonth);
      if (activeMonthData) {
        const activeWeekData = activeMonthData.weeks.find(week => week.weekLabel === activeWeek);
        if (activeWeekData) {
          return activeWeekData.data.reduce((sum, value) => sum + value, 0);
        }
      }
    } else if (selectedDuration === "month") {
      const activeMonthData = chartData.find(month => month.month === activeMonth);
      if (activeMonthData) {
        return activeMonthData.weeks.reduce((monthSum, week) =>
          monthSum + week.data.reduce((weekSum, value) => weekSum + value, 0), 0);
      }
    }
    return 0; // Default value if none of the conditions match
  }
  

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


  const isDarkMode = useStore((state) => state.isDarkMode)

    return (
      <CustomView>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <DurationToggle
              activeMonth={activeMonth}
              activeWeek={activeWeek}
              onDurationChange={handleDurationChange}
            />

            <Space space={15} />

            {/* pass your total spending stats here : */}

            <TotalSpentCard
              amountSpent={calculateTotalSpentAmount().toString()}
            />

            <View style={styles.chartContainer}>
              <BarChart
                dashGap={5}
                rulesColor={isDarkMode ? "black" : "white"}
                barWidth={25}
                noOfSections={5}
                barBorderRadius={25}
                frontColor="#B6DEC5"
                xAxisLabelTextStyle={{ color: isDarkMode ? "white" : "black" }}
                yAxisTextStyle={{ color: isDarkMode ? "white" : "black" }}
                barStyle={{ color: "red" }}
                data={chartData.flatMap((month) => {
                  if (selectedDuration === "week") {
                    if (month.month === activeMonth) {
                      const activeWeekData = month.weeks.find(
                        (week) => week.weekLabel === activeWeek
                      );
                      return weekDays.map((day, index) => ({
                        value: activeWeekData?.data[index] || 0,
                        label: day,
                      }));
                    } else {
                      return [];
                    }
                  } else {
                    const monthTotal = month.weeks.reduce(
                      (sum, week) =>
                        sum +
                        (week.data.reduce(
                          (weekSum, value) => weekSum + value,
                          0
                        ) || 0),
                      0
                    );
                    return {
                      value: monthTotal,
                      label: month.month,
                    };
                  }
                })}
                yAxisThickness={0}
                isAnimated
                xAxisThickness={0}
                initialSpacing={25}
              />
            </View>
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
  expand: {
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  chartContainer:{
    width:'100%',
    paddingHorizontal:20,
    marginTop:20,
    borderRadius:15
  }
});