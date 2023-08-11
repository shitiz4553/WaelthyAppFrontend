import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

function AccountsScreen({navigation}){
    return(
    <View style={styles.container}>
        <Text>AccountsScreen</Text>
    </View>
    )}
export default AccountsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});