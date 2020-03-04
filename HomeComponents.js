import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, } from 'react-native';
import Connection from './Connection.js'
import BottomButtons from './BottomButtons.js'
import Grip from './Grip.js'
import WristPitch from './WristPitch.js'
import WristRoll from './WristRoll.js'
import Elbow from './Elbow.js'
import Shoulder from './Shoulder.js'
import Waist from './Waist.js'
import axios from 'axios'

const nameArray = ["Pinch Me", "Dancer", "Thrower", "Tickle", "Tick-Tock", "Sassy Wave", "Yolo", "Techno", "Rager", "Arctic", "Windy", "Carl's Bad Caverns", "Hot Springs, Hot Rods, Hot Bods", "Squaw", "Tacky", "Lickity Splickty", "Splat", "Cancer Bagel", "The Clap", "Ever-glad I don't Live in Florida", "Channel Your Inner Na-mas-te Islands", "Cascading in Life", "Great Basin", "Ice Ice Baby", "Impasta Syndrome", "Waist of Time", "Ceasars Scissors", "Gord-geous Pumpkin", "High Steaks", "Take me to your Liter", "ALiens Man *motions hands*", "WELCOME to Mini-soda", "Nice Jester", "Sorry I can't Sia", "Soup-er-ficial", "Always Ben Solo", "Boaring PIG Puns", "Irr-elephant" ]

export default class App extends Component {

    state = {
        grip: 60,
        wristPitch: 20,
        wristRoll: 5,
        elbow: 120,
        shoulder: 60,
        waist: 160,
        connected: false,
        new: false,
        botName: "",
    }

    changeGripValue = (value) => {
        this.setState({ grip: value }, this.sendSliderValue())
    }

    sendSliderValue = () => {
        axios.post('http://10.225.130.82:3030/slider', {Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})
    }

    changeWristValue = (value) => {
        this.setState({ wristPitch: value }, this.sendSliderValue())
    }

    changeRollValue = (value) => {
        this.setState({ wristRoll: value }, this.sendSliderValue())
    }

    changeElbowValue = (value) => {
        this.setState({ elbow: value }, this.sendSliderValue())
    }

    changeShoulderValue = (value) => {
        this.setState({ shoulder: value }, this.sendSliderValue())
    }

    changeWaistValue = (value) => {
        this.setState({ waist: value }, this.sendSliderValue())
    }

    handleConnection = () => {
        axios.post('http://10.225.130.82:3030/bluetoothOn', {Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})

        this.setState({ connected: true })
    }

    handleDisconnection = () => {
        axios.post('http://10.225.130.82:3030/bluetoothOff')
        this.setState({ connected: false })
    }

    onNew = () => {
        const savedName = nameArray.sort(() => Math.random() - Math.random()).slice(0, 1)
        axios.post('http://10.225.130.82:3030/newBot', {NewBot: savedName[0], Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})
        this.setState({
            new: true,
            botName: savedName[0],
        })
    }

    onAdd = () => {
        axios.post('http://10.225.130.82:3030/newBot', {NewBot: this.state.botName, Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})
    }

    onSave = () => {
        axios.post('http://10.225.130.82:3030/onSave')
        this.setState({
            new: false,
        })
    }

    resetAll = () => {
        this.setState({
            grip: 60,
            wristPitch: 20,
            wristRoll: 5,
            elbow: 120,
            shoulder: 60,
            waist: 160,
            connected: false,
            new: false,
            botName: ""
        })
        axios.get('http://10.225.130.82:3030/onReset')
    }

    render() {
        return (
            <View style={styles.container}>
                
                     <ImageBackground
                    style={styles.background}
                    source={require("./robot.png")}
                >
                    <Connection handleConnection={this.handleConnection} connected={this.state.connected} handleDisconnection={this.handleDisconnection} />
                    <Image source={require("./arduino.png")} style={styles.arduino}></Image>
                    <Grip
                        grip={this.state.grip}
                        changeGripValue={this.changeGripValue}
                    />
                    <WristPitch
                        wristPitch={this.state.wristPitch}
                        changeWristValue={this.changeWristValue}
                    />
                    <WristRoll
                        wristRoll={this.state.wristRoll}
                        changeRollValue={this.changeRollValue}
                    />
                    <Elbow
                        elbow={this.state.elbow}
                        changeElbowValue={this.changeElbowValue}
                    />

                    <BottomButtons resetAll={this.resetAll} onNew={this.onNew} newState={this.state.new} onAdd={this.onAdd} onSave={this.onSave} botName={this.state.botName}/>
                    <Shoulder
                        shoulder={this.state.shoulder}
                        changeShoulderValue={this.changeShoulderValue}
                    />
                    <Waist
                        waist={this.state.waist}
                        changeWaistValue={this.changeWaistValue}
                    />
                </ImageBackground>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: "100%",
        height: 675,
    },
    background: {
        marginLeft: "1%",
        width: '100%',
        height: '100%',
        marginTop: "-1%",
    },
    innerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 10
    },
    arduino: {
        height: "15%",
        width: "26%",
        flex: 1,
        marginTop: "15%",
        position: "absolute",
        marginLeft: "45%",
        opacity: 0.5
    }
});




