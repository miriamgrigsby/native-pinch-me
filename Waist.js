import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider'


const Waist = ({waist, changeWaistValue}) => {

    const handleValueChange = (value) => {
        changeWaistValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>WAIST</Text>
            <Slider 
            style={styles.speedSlider} 
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"} 
            maximumTrackTintColor={"black"}
            value={waist}
            minimumValue={60}
            maximumValue={160}
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
    marginTop: "144.5%",
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
    fontWeight: "bold",
    marginRight: "6%"
}
    
})

export default Waist
