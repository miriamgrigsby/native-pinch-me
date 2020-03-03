import React, {Component} from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native';
import Robots from "./Robots.js"


export default class RobotActions extends Component {

    render() {
        return (
            <ImageBackground
                    style={styles.background}
                    source={require("./geometric.jpg")}
                >
            <View style={styles.main}>
            <Robots />
        </View>
        </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1, 
        marginTop: "-1%",
        justifyContent: "space-between"
    },
    innerText: {
       marginLeft: "10%",
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    background: {
        width: '140%',
        height: '110%',
        marginTop: "-1%",
        opacity: 0.8
    }
})
