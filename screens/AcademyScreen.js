import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

function AcademyScreen({navigation}){
    return(
    <View style={styles.container}>
        <Text>AcademyScreen</Text>
    </View>
    )}
export default AcademyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});