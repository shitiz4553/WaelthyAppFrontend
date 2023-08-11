import React from "react";
import { 
    View,
    StyleSheet,
    ScrollView
} from "react-native";
import CustomView from "../components/Utils/CustomView";
import CustomHeader from "../components/Headers/CustomHeader";
import { academyData } from "../Data/Data";
import Typo from "../components/Utils/Typo";
import AcademyCard from "../components/Academy/AcademyCard";

function AcademyScreen({navigation}){


    return (
      <CustomView>
        <CustomHeader label={"Academy"} />
        <View style={styles.body}>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {academyData.map((item, idx) => (
              <AcademyCard
                key={idx}
                image={item.bannerImage}
                title={item.title}
                subtitle={item.subtitle}
                posterProfilePic={item.posterProfilePic}
                posterName={item.posterName}
                postedTime={item.postedTime}
                minRead={item.minRead}
                articleMessage={item.articleMessage}
              />
            ))}
          </ScrollView>
        </View>
      </CustomView>
    );}
export default AcademyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    flex:1,
    paddingTop:20
  }
});