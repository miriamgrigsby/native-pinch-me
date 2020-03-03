import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider'


const Elbow = ({elbow, changeElbowValue}) => {

    const handleValueChange = (value) => {
        changeElbowValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>ELBOW</Text>
            <Slider 
            style={styles.speedSlider}
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"}
            maximumTrackTintColor={"black"}
            value={elbow}
            minimumValue={120}
            maximumValue={160}
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
    marginTop: "72.5%",
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
    marginRight: "3%",
    fontWeight: "bold",
}
    
})

export default Elbow
