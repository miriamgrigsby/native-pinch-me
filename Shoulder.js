import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Slider from 'react-native-slider'


const Shoulder = ({shoulder, changeShoulderValue}) => {

    const handleValueChange = (value) => {
        changeShoulderValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>SHOULDER</Text>
            <Slider 
            style={styles.speedSlider} 
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"} 
            maximumTrackTintColor={"black"}
            value={shoulder}
            minimumValue={15}
            maximumValue={60}
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
    marginTop: "129%",
    marginLeft: "30%",
    width: "60%",
    maxHeight: "25%",
    position: "absolute",
    backgroundColor: "white"
},
speedSlider: {
    width: "65%",
    marginLeft: "-4%"
},
text: {
    textAlign: "center",
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginRight: "15%"
}
    
})

export default Shoulder
