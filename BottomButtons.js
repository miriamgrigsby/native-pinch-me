import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const BottomButtons = ({resetAll}) => {

    const handleReset = () => {
        resetAll()
    }
    return (
        <View style={styles.operationButtons}>
            <TouchableOpacity
                style={styles.save}
                title="save"
                onPress={() => Alert.alert('I hate you')}
            >
                <Text style={styles.inneText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.run}
                title="Run"
                onPress={() => Alert.alert('I hate you')}
            >
                <Text style={styles.inneText}>Run</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.reset}
                title="Reset"
                onPress={handleReset}
            >
                <Text style={styles.inneText}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    operationButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "relative",
        bottom: 0,
    },
    save: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '25%',
        height: "7%",
        justifyContent: "center",
        marginLeft: "2%",

    },
    run: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '25%',
        height: "7%",
        justifyContent: "center",
    },
    reset: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '25%',
        height: "7%",
        justifyContent: "center",
        marginRight: "4%",
    },
    inneText: {
        fontSize: 25
    }
})

export default BottomButtons
