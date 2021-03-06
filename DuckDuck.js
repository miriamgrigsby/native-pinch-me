import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

const DuckDuck = () => {

    const sendActions = () => {
        axios.post('http://10.0.0.110:3030/duck')
    }

    return (
       <View>
            <TouchableOpacity
                style={styles.duck}
                title="duck"
                onPress={sendActions}
            >
                <Text style={styles.innerText}>Duck Duck</Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    duck: {
        flex: 1,
        maxHeight: "10%",
        minWidth: "35%",
        borderRightWidth: 2,
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderTopWidth: 2,
        backgroundColor: "black",
        justifyContent: "center",
        marginLeft: "2%"
    },
    innerText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
})

export default DuckDuck