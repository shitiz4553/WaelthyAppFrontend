import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import Typo from "../components/Utils/Typo";
import { Feather } from '@expo/vector-icons';
import Theme from "../src/Theme";
import useStore from "../store";
import CustomView from "../components/Utils/CustomView";

const menu =[
    {
        label:"Spending",
        icon:"check-circle"
    },
    {
        label:"Plans",
        icon:"server"
    },
    {
        label:"Analytics",
        icon:"trending-up"
    },
    {
        label:"Academy",
        icon:"grid"
    },
    {
        label:"Settings",
        icon:"settings"
    },
    {
        label:"Account",
        icon:"user"
    },
    {
        label:"Bank Account",
        icon:"dollar-sign"
    },
    {
        label:"Credit Cards",
        icon:"credit-card"
    },
    {
        label:"Loans",
        icon:"dollar-sign"
    },
    {
        label:"Insurances",
        icon:"pocket"
    },
]

function SidebarScreen({navigation}){

    const [mode, setMode] = useState(isDarkMode ? "dark" : "light");
    const isDarkMode = useStore((state) => state.isDarkMode)
    const toggleDarkMode = useStore((state) => state.toggleDarkMode)
    
    const handleMode = (m) => {
        setMode(m);
        toggleDarkMode()
    };


    return(
    <CustomView>
       <View style={styles.header}>
        <Image source={{uri:"https://randomuser.me/api/portraits/men/61.jpg"}} style={styles.circle} />
        <Typo l>Fedrick Batman</Typo>
       </View>
       <View style={styles.body}>
        {menu.map((item,index) => {
        return (
            <TouchableOpacity style={Theme.align} key={index}>
            <Feather style={{marginRight:20}} name={item.icon} size={24} color="grey" />
            <Typo grey l>{item.label}</Typo>
            </TouchableOpacity>
            );
            })}
       </View>
           <View style={styles.footer}>
        <Typo grey s>Interface</Typo>
        <View style={[styles.tabContainer, { backgroundColor: isDarkMode ? "#202020" : "#ebebeb" }]}>
          <TouchableOpacity
            onPress={toggleDarkMode}
            style={[
              styles.tab,
              { backgroundColor: isDarkMode ? Theme.secondaryColor : "#ebebeb" },
            ]}
          >
            <Feather
              name="moon"
              size={24}
              color={isDarkMode ? "white" : "grey"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleDarkMode}
            style={[
              styles.tab,
              { backgroundColor: isDarkMode ? "#202020" : Theme.secondaryColor },
            ]}
          >
            <Feather
              name="sun"
              size={24}
              color={isDarkMode ? "grey" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </CustomView>
    )}
export default SidebarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
    marginHorizontal: 55,
  },
  body: {
    flex: 3,
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
  },
  footer: {
    flex: 0.5,
    alignItems: "center",
  },
  circle: {
    height: 75,
    width: 75,
    borderRadius: 100,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    borderRadius: 5,
    overflow: "hidden",
    width:'55%',
    marginTop:5
},
tab: {
    alignItems: "center",
    paddingVertical: 10,
    margin: 3,
    flex: 1,
    borderRadius:5
},
activeTab: {
    backgroundColor: Theme.secondaryColor,
    borderRadius:5
},
tabText: {
    fontSize: 16,
    fontFamily:Theme.OutfitMedium,
    color:'#C7C2C2'
},
activeTabText: {
    color: "#fff",
},
});