import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import Theme from "../../src/Theme";
import Typo from "../Utils/Typo";
import useStore from "../../store";

function DurationToggle({ navigation }) {
    const [selectedDuration, setSelectedDuration] = useState("week");
    const [activeIndex, setActiveIndex] = useState(0);
    const isDarkMode = useStore((state) => state.isDarkMode)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekTimings = ["Week 1", "Week 2", "Week 3", "Week 4"];

    const handleDurationChange = (duration) => {
        setSelectedDuration(duration);
        setActiveIndex(0);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        if (selectedDuration === "month") {
            setActiveIndex((prevIndex) => Math.min(prevIndex + 1, monthNames.length - 1));
        } else if (selectedDuration === "week") {
            setActiveIndex((prevIndex) => (prevIndex + 1) % weekTimings.length);
        }
    };

    const activeLabel = selectedDuration === "month" ? monthNames[activeIndex] : weekTimings[activeIndex];

    return (
        <View style={styles.container}>
            <View style={[styles.tabContainer,{
                backgroundColor:isDarkMode ? "#202020" :"#ebebeb"
            }]}>
                <TouchableOpacity
                    onPress={() => handleDurationChange("week")}
                    style={[
                        styles.tab,
                        selectedDuration === "week" ? styles.activeTab : null,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedDuration === "week" ? styles.activeTabText : null,
                        ]}
                    >
                        Week
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDurationChange("month")}
                    style={[
                        styles.tab,
                        selectedDuration === "month" ? styles.activeTab : null,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedDuration === "month" ? styles.activeTabText : null,
                        ]}
                    >
                        Month
                    </Text>
                </TouchableOpacity>
            </View>
           <View style={[Theme.align, { gap: 8 }]}>
            <TouchableOpacity onPress={handlePrev}>
                <Feather name="chevron-left" size={24} color="grey" />
            </TouchableOpacity>
            <Typo l style={{color:'#D3AF36'}}>{activeLabel}</Typo>
            <TouchableOpacity onPress={handleNext}>
                <Feather name="chevron-right" size={24} color="grey" />
            </TouchableOpacity>
           </View>
        </View>
    );
}

export default DurationToggle;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tabContainer: {
        flexDirection: "row",
        borderRadius: 5,
        overflow: "hidden",
        width:'55%'
    },
    tab: {
        alignItems: "center",
        paddingVertical: 10,
        margin: 3,
        flex: 1,
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
