import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Connection from './Connection.js'
import BottomButtons from './BottomButtons.js'
import Speed from './Speed.js'
import Grip from './Grip.js'
import WristPitch from './WristPitch.js'
import WristRoll from './WristRoll.js'
import Elbow from './Elbow.js'
import Shoulder from './Shoulder.js'
import Waist from './Waist.js'
import { ScrollView } from 'react-native-gesture-handler'
import { Header } from 'react-native-elements'
import axios from 'axios'


export default class App extends Component {

  state = {
    grip: 55,
    wristPitch: 20,
    wristRoll: 60,
    elbow: 120,
    shoulder: 60,
    waist: 160,
    speed: 0,
    connected: false
  }

  changeSpeedValue = (value) => {
    this.setState({ speed: value })
  }

  changeGripValue = (value) => {
    this.setState({ grip: value }, this.sendGripValue)
  }

  sendGripValue = () => {
    // axios.post("http://10.225.130.117:3030/grip", { Body: this.state.grip })
    axios.post("http://10.0.0.110:3030/grip", { Body: this.state.grip })
  }

  changeWristValue = (value) => {
    this.setState({ wristPitch: value }, this.sendWristValue)
  }

  sendWristValue = () => {
    // axios.post('http://10.225.130.117:3030/wristPitch', { Body: this.state.wristPitch })
    axios.post('http://10.0.0.110:3030/wristPitch', { Body: this.state.wristPitch })
  }

  changeRollValue = (value) => {
    this.setState({ wristRoll: value }, this.sendRollValue)
  }

  sendRollValue = () => {
    // axios.post('http://10.225.130.117:3030/wristRoll', { Body: this.state.wristRoll })
    axios.post('http://10.0.0.110:3030/wristRoll', { Body: this.state.wristRoll })
  }

  changeElbowValue = (value) => {
    this.setState({ elbow: value }, this.sendElbowValue)
  }

  sendElbowValue = () => {
    // axios.post('http://10.225.130.117:3030/elbow', { Body: this.state.elbow })
    axios.post('http://10.0.0.110:3030/elbow', { Body: this.state.elbow })
  }

  changeShoulderValue = (value) => {
    this.setState({ shoulder: value }, this.sendShoulderValue)
  }

  sendShoulderValue = () => {
    // axios.post('http://10.225.130.117:3030/shoulder', { Body: this.state.shoulder })
    axios.post('http://10.0.0.110:3030/shoulder', { Body: this.state.shoulder })
  }

  changeWaistValue = (value) => {
    this.setState({ waist: value }, this.sendWaistValue)
  }

  sendWaistValue = () => {
    // axios.post('http://10.225.130.117:3030/waist', { Body: this.state.waist })
    axios.post('http://10.0.0.110:3030/waist', { Body: this.state.waist })
  }

  handleConnection = () => {
    // axios.post('http://10.225.130.117:3030/bluetooth', {Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})
    axios.post('http://10.0.0.110:3030/bluetooth', {Grip: this.state.grip, WristPitch: this.state.wristPitch, WristRoll: this.state.wristRoll, Elbow: this.state.elbow, Shoulder: this.state.shoulder, Waist: this.state.waist})

    this.setState({connected: true})
  }

  handleDisconnection = () => {
    // axios.post('http://10.225.130.117:3030/bluetooth', {Grip: 69})
    axios.post('http://10.0.0.110:3030/bluetooth', {Grip: 69})
    this.setState({connected: false})
  }

  resetAll = () => {
    this.setState({
      speed: 0,
      grip: 55,
      wristPitch: 20,
      wristRoll: 60,
      elbow: 120,
      shoulder: 60,
      waist: 160,
      connected: false
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={require("./robot.png")}
          >
            <Text style={styles.welcome}>Pinch Me Controller</Text>
            <Header style={styles.headerStyle} backgroundColor={"transparent"}>
              <Connection handleConnection={this.handleConnection} connected={this.state.connected} handleDisconnection={this.handleDisconnection}/>
            </Header>
            <Speed speed={this.state.speed}
              changeSpeedValue={this.changeSpeedValue} />
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
            <Shoulder
              shoulder={this.state.shoulder}
              changeShoulderValue={this.changeShoulderValue}
            />
            <Waist
              waist={this.state.waist}
              changeWaistValue={this.changeWaistValue}
            />
            <BottomButtons resetAll={this.resetAll} />
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: "100%",
    height: 675
  },
  welcome: {
    fontSize: 25,
    marginTop: "5%",
    margin: 10,
    textAlign: 'center',
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  background: {
    marginLeft: "1%",
    width: '100%',
    height: '100%',
    marginTop: "-1%",
    zIndex: 5
  },
  headerStyle: {

  }
});




