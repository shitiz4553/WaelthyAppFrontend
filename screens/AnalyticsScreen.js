import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

function AnalyticsScreen({navigation}){
    return(
    <View style={styles.container}>
        <Text>AnalyticsScreen</Text>
    </View>
    )}
export default AnalyticsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});