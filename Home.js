import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

console.disableYellowBox = true;


export default class Home extends Component {

    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./geometric.jpg")}
            >
                <View style={styles.main}>

                    <TouchableOpacity
                        style={styles.navigator}
                        title="Robot Actions"
                        onPress={() => this.props.navigation.navigate('Pinch Me Controller')}
                    >

                        <Image source={require("./arrow.png")} style={styles.backButton}  >
                        </Image>
                        <Text style={styles.innerText1}>Robot Controlls</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.navigator2}
                        title="Robot Actions2"
                        onPress={() => this.props.navigation.navigate('Robot Actions')}
                    >
                        <Image source={require("./arrow.png")} style={styles.backButton}>
                        </Image>
                        <Text style={styles.innerText}>Robot Actions</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.navigator3}
                        title="Instructions"
                        onPress={() => this.props.navigation.navigate('Instructions')}
                    >
                        <Image source={require("./arrow.png")} style={styles.backButton}>
                        </Image>
                        <Text style={styles.innerText}>Instructions</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: "5%"
    },
    navigator: {
        flex: 1,
        justifyContent: "center",
        width: "65%",
        maxHeight: "20%",
        margin: "2%",
        marginTop: "5%",
        backgroundColor: "black"
    },
    navigator2: {
        flex: 1,
        justifyContent: "center",
        width: "65%",
        maxHeight: "20%",
        margin: "2%",
        marginTop: "10%",
        backgroundColor: "black"
    },
    navigator3: {
        flex: 1,
        justifyContent: "center",
        width: "65%",
        maxHeight: "20%",
        margin: "2%",
        marginTop: "10%",
        backgroundColor: "black"
    },
    innerText1: {
        marginLeft: "15%",
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: "5%",
        color: "white"
    },
    innerText: {
        marginLeft: "15%",
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: "2%",
        color: "white"
    },
    backButton: {
        position: "absolute",
        maxHeight: "30%",
        maxWidth: "15%",
        marginLeft: "78%",
        marginTop: "2%",
        transform: [{ rotate: "270deg" }]
    },
    background: {
        width: '140%',
        height: '110%',
        marginTop: "-1%",
        position: "absolute",
        opacity: 0.8
    }
})
