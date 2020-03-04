import React from 'react'
import DragNDrop from './DragNDrop'
import DuckDuck from './DuckDuck'
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const Robots = ({ addedBots, showNewRobot, deleteRobot }) => {

    const usersBots = addedBots.map(name => {
        if (name != "") {
            return <TouchableOpacity
                style={styles.newBot}
                title={name}
                onPress={() => {handlePress(name)}}
                onLongPress={() => {handleLongPress(name)}}
                key={name.id}
            >
                <Text style={styles.innerText}>{name}</Text>
            </TouchableOpacity>
        }
    })

    const handlePress = (name) => {
        showNewRobot(name)
    }

    const handleLongPress = (name) => {
        Alert.alert(`${name} Has Been Deleted`)
        deleteRobot(name)
    }


    return (
        <>
            <View style={styles.main}>
                <DragNDrop />
                <DuckDuck />
            </View>
            <View style={styles.new}>
                {usersBots}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        padding: "5%",
    },
    new: {
        backgroundColor: "white",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        position: "relative",
        marginTop: "-90%",
        maxWidth: "66%",
        marginLeft: "3%",
        marginRight: "4%",
        borderWidth: 3,
        justifyContent: "center"

    },
    newBot: {
        backgroundColor: "black",
        width: "43%",
        padding: "2%",
        margin: "1%",
        justifyContent: "space-between"
    },
    innerText: {
        color: "white",
        textAlign: "center",
        fontSize: 15
    }

})

export default Robots