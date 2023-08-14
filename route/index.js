import React,{useEffect} from 'react';
import {StyleSheet,Platform,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Theme from '../src/Theme';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import AcademyScreen from '../screens/AcademyScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import useStore from '../store';
import SidebarScreen from '../screens/SidebarScreen';
import NotificationScreen from '../screens/NotificationScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CTDetailsScreen from '../screens/CTDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const activeIconColor = Theme.primaryColor;
const inactiveIconColor = '#9FA5AA';


export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerMode:false}}>
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainRoute" component={MainRoute} />
        <Stack.Screen name="SidebarScreen" component={SidebarScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CTDetailsScreen" component={CTDetailsScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
        <Stack.Screen name="AcademyScreen" component={AcademyScreen} />
        <Stack.Screen name="AccountsScreen" component={AccountsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


function MainRoute() {

  const isDarkMode = useStore((state) => state.isDarkMode)

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            let iconColor;

            switch (route.name) {
              case "Home":
                iconSource = "home";
                break;
              case "Analytics":
                iconSource = "activity";
                break;
              case "Academy":
                iconSource = "grid";
                break;
              case "Accounts":
                iconSource = "book";
                break;
              case "Profile":
                iconSource = "user";
                break;
            }

            if (focused) {
              iconColor = activeIconColor;
            } else {
              iconColor = inactiveIconColor;
            }

            return <Feather name={iconSource} size={24} color={iconColor} />;
          },
          tabBarStyle: [styles.tabbarstyle,{backgroundColor:isDarkMode ? "black" : "white"}],
          tabBarActiveTintColor: Theme.primaryColor,
          tabBarInactiveTintColor: "#9FA5AA",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen name="Academy" component={AcademyScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
}

const styles= StyleSheet.create({
    tabbarstyle:{
    height: Platform.OS === 'ios' ? 95 : 75, // set the height based on the platform
    borderTopWidth: 0, // add a border to the top of the tab bar
    paddingVertical: Platform.OS === 'ios' ? 20 : 0 // add extra padding for iOS to account for the notch
    },
})