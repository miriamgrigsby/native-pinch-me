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
            <View style={styles.mainBody}>
                <Text style={styles.body}>1. Click on Robot Controls to test out each part of the robot arm, or press reset to set sliders back to default {`\n`} {`\n`}
                    2. Use the sliders to test range of motion or create your own set of robot actions by selecting new {`\n`} {`\n`}
                    3. Upon clicking new, move the sliders to the desired positions and click add to create separate sets of motion {`\n`} {`\n`}
                    4. Put all the new sets of motion together by clicking save {`\n`} {`\n`}
                    5. Navigate to Robot Actions from the home page and select your new robot or one of the presets to view the total robot in action {`\n`} {`\n`} 
                    6. Press and hold on any new robots in the box to delete them {`\n`} {`\n`} 
                    7. At any time, click the back arrow at the top of the page to be returned to the home screen</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        flex: 1,
        marginLeft: "3.5%",
        width: "64.5%",
        maxHeight: "10%",
        justifyContent: "space-between",
        backgroundColor: "black",
        justifyContent: "center"
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
    },
    body: {
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginLeft: "5%",
        marginRight: "3%",
        fontSize: 16,
    },
    mainBody: {
        zIndex: 15, 
        flex: 1,
        marginLeft: "3.5%",
        width: "64.5%",
        maxHeight: "78%",
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 2,
        marginTop: "2%"
    }
})


export default Instructions
