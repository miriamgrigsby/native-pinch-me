import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider'


const WristRoll = ({wristRoll, changeRollValue}) => {

    const handleValueChange = (value) => {
        changeRollValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>ROLL</Text>
            <Slider 
            style={styles.speedSlider}
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"}
            maximumTrackTintColor={"black"}
            value={wristRoll}
            minimumValue={5}
            maximumValue={80}
            step={1}
            onValueChange={handleValueChange}
            >
            ></Slider>
        </View>
    )
}

const styles = StyleSheet.create({
sliderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "59%",
    marginLeft: "35%",
    width: "60%",
    maxHeight: "25%",
    position: "absolute",
    backgroundColor: "white"
},
speedSlider: {
    width: "65%",
},
text: {
    textAlign: "center",
    fontSize: 18,
    textDecorationLine: "underline",
    marginRight: "8%",
    fontWeight: "bold",
}
    
})

export default WristRoll
