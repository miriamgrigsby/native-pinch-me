import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import Robots from "./Robots.js"
import axios from 'axios'


export default class RobotActions extends Component {
    state = {
        addedBots: []
    }

    componentDidMount() {
        axios.get('http://10.225.134.146:3030/findName')
        .then(response => this.setState({addedBots: response.data}))
    }

    showNewRobot = (name) => {
        axios.post('http://10.225.134.146:3030/showNewRobot', {Name: name})
    }
    
    deleteRobot = (name) => {
        const newNameArray = this.state.addedBots.filter(nameMatch => {
            return nameMatch != name
        })
        this.setState({addedBots: newNameArray})
        axios.post('http://10.225.134.146:3030/deleteRobot', {Name: name})
    }


    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./geometric.jpg")}
            >
                <View style={styles.main} >
                    <Robots addedBots={this.state.addedBots} showNewRobot={this.showNewRobot} deleteRobot={this.deleteRobot}/>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: "-1%",
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
