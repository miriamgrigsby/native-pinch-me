import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider'


const Grip = ({grip, changeGripValue}) => {

    const handleValueChange = (value) => {
        changeGripValue(value)
    }

    return (
        <View style={styles.sliderView}>
            <Text style={styles.text}>GRIP</Text>
            <Slider 
            style={styles.speedSlider} 
            thumbTintColor={"orange"} 
            minimumTrackTintColor={"#2a82ba"}
            maximumTrackTintColor={"black"}
            value={grip}
            minimumValue={55}
            maximumValue={150}
            step={1}
            onSlidingComplete={handleValueChange}
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
        marginTop: "42%",
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
        marginRight: "6%",
        fontWeight: "bold"
    }
    
    })
    

export default Grip
