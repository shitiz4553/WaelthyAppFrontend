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
import { spendingsData} from "../Data/Data"
import CustomView from "../components/Utils/CustomView";
import AnalyticCard from "../components/Analytics/AnalyticCard";
import { ProgressChart } from "react-native-chart-kit";
import useStore from "../store";
import Theme from "../src/Theme";


function AnalyticsScreen({navigation}){

  const colors = ["#B6DEC5", "#F2E7C3", "#BED3E6", "#E9D0BE", "#E9BED3"];

  const chartc = [ "#e5e5e5", Theme.primaryColor];

  const isDarkMode = useStore((state) => state.isDarkMode)
  const progressData = {
    labels: ["Jan", "Feb", "Mar", ], // Sample labels, replace with your labels
    data: [0.4, 0.6, 0.5, ], // Sample progress values (between 0 and 1), replace with your data
  };

    return (
      <CustomView>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <DurationToggle />
            <Space space={15} />

            {/* pass your total spending stats here : */}
            <TotalSpentCard amountSpent={"1,150"} />

            <View style={styles.chartContainer}>
              <ProgressChart
                data={progressData}
                width={Dimensions.get("window").width - 40} // Adjust width as needed
                height={220}
                strokeWidth={16} // Width of the progress ring
                radius={32} // Radius of the progress ring
                chartConfig={{
                  backgroundColor:isDarkMode ? "transparent" :"#FFF",
                  backgroundGradientFrom: isDarkMode ?"transparent" : "#FFf",
                  backgroundGradientTo: isDarkMode ? "transparent" : '#FFF',
                  decimalPlaces: 2, // Adjust decimal places as needed
                  color: (opacity = 1) => `rgba(38,108, 170, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
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