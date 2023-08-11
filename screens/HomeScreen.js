import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import CustomHeader from "../components/Headers/CustomHeader";
import DurationToggle from "../components/HomeScreen/DurationToggle";
import Space from "../components/Utils/Space";
import TotalSpentCard from "../components/HomeScreen/TotalSpentCard";

function HomeScreen({navigation}){
    return(
    <View style={styles.container}>
        <CustomHeader edit={false} logoMode={true} />
        <View style={styles.body}>
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <DurationToggle/>
            <Space space={15}/>

            {/* pass your total spending stats here : */}
            <TotalSpentCard totalAmount="5,000" amountSpent={'1,150'}/>


            <Space space={15}/>
        </ScrollView>
        </View>
    </View>
    )}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    flex:1,
    paddingVertical:20
  }
});