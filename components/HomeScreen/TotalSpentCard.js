import React from "react";
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Theme from "../../src/Theme";
import Typo from "../Utils/Typo";
import assets from "../../assets/assets";

function TotalSpentCard({ amountSpent, totalAmount, handleAddPress, label }) {
  return (
    <View style={styles.container}>
      <View style={styles.alignerMajor}>
        <Typo light white>
          {label ? label : "Total Spent"}
        </Typo>
        {handleAddPress ? (
          <TouchableOpacity onPress={handleAddPress}>
            <Image source={assets.plus} style={styles.plus} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.aligner}>
        <Typo xxl white>
          CHF {amountSpent}
        </Typo>
        {totalAmount ? (
          <Typo white light s>
            ~ Out of CHF {totalAmount}
          </Typo>
        ) : null}
      </View>
    </View>
  );
}
export default TotalSpentCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Theme.primaryColor,
    paddingHorizontal: 15,
  },
  aligner: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  alignerMajor: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plus:{
    height:30,
    width:30,
    resizeMode:"contain",
  }
});