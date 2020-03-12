import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DragNDrop = () => {

    const sendActions = () => {
        axios.post('http://10.0.0.110:3030/dragNdrop', {Grip: 55, WristPitch: 20, WristRoll: 60, Elbow: 120, Shoulder: 60, Waist: 160})
    }

    return (
        <View >
            <TouchableOpacity
                style={styles.drag}
                title="dragNdrop"
                onPress={sendActions}
            >
                <Text style={styles.innerText}>Drag N' Drop</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    drag: {
        flex: 1,
        maxHeight: "10%",
        minWidth: "30%",
        marginLeft: "-6%",
        borderRightWidth: 2,
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderTopWidth: 2,
        backgroundColor: "black",
        justifyContent: "center",
        marginRight: "10%"
    },
    innerText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
})

export default DragNDrop