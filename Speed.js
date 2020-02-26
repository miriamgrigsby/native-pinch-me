import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider'


const Speed = ({speed, changeSpeedValue}) => {

    const handleValueChange = (value) => {
        changeSpeedValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>SPEED</Text>
            <Slider 
            style={styles.speedSlider} 
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"} 
            maximumTrackTintColor={"black"}
            value={speed}
            maximumValue={100}
            step={1}
            onSlidingComplete={handleValueChange}
            >
            </Slider>
        </View>
    )
}

const styles = StyleSheet.create({
sliderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "27%",
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
    fontWeight: "bold"
}
    
})

export default Speed
