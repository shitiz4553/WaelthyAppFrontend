import React from "react";
import { 
    View,
    StyleSheet,
    ScrollView
} from "react-native";
import CustomView from "../components/Utils/CustomView";
import CustomHeader from "../components/Headers/CustomHeader";
import NotificationCard from "../components/Account/NotificationCard";
import { notifications } from "../Data/Data";
import Typo from "../components/Utils/Typo";

function NotificationScreen({navigation}){

    const groupedNotifications = groupNotificationsByTime(notifications);

    function groupNotificationsByTime(notifications) {
        const grouped = {};
        notifications.forEach((notification) => {
          const { time } = notification;
          if (!grouped[time]) {
            grouped[time] = [];
          }
          grouped[time].push(notification);
        });
        return grouped;
      }

      

    return (
      <CustomView>
        <CustomHeader label={"Notifications"} />
        <View style={styles.body}>
        <ScrollView style={{paddingHorizontal:20}}>
        {Object.keys(groupedNotifications).map((time, index) => (
            <View key={index}>
              <Typo style={{marginTop:15}}>{time}</Typo>
              {groupedNotifications[time].map((item, idx) => (
                <NotificationCard
                  key={idx}
                  image={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </View>
          ))}
        </ScrollView>
        </View>
      </CustomView>
    );}
export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    flex:1,
    paddingTop:20
  }
});