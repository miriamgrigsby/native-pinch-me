import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native';


const Instructions = () => {

    return (
        <ImageBackground
            style={styles.background}
            source={require("./geometric.jpg")}
        >
            <View style={styles.mainTitle}>
                <Text style={styles.title}>How to Use Pinch Me Controller</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        flex: 1,
        marginLeft: "3.5%",
        marginBottom: "3%",
        width: "64.5%",
        justifyContent: "space-between",
        backgroundColor: "black"
    },
    background: {
        width: '140%',
        height: '110%',
        marginTop: "-1%",
        opacity: 0.8
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: "2%"
    }
})


export default Instructions
