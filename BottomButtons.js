import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


const BottomButtons = ({resetAll, onNew, newState, onAdd, onSave, botName}) => {

    const handleReset = () => {
        resetAll()
    }

    const handleNew = () => {
        onNew()
    }

    const handleAdd = () => {
        onAdd()
    }

    const handleSave = () => {
        onSave()
        {botName != "" 
            ? Alert.alert(`The Robot action: "${botName}" has been saved`)
            : Alert.alert("Click New to start building a new robot")
        }
        
    }
    return (
        <View style={styles.operationButtons}>
            <TouchableOpacity
                style={styles.new}
                title="new"
                onPress={
                        newState == false 
                        ? handleNew
                        : handleAdd
                }
            >
                {
                    newState == false 
                ? <Text style={{fontSize: 25, color: "white"}}>New</Text>
                : <Text style={{fontSize: 25, color: "white"}}>Add</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.save}
                title="save"
                onPress={handleSave}
            >
                <Text style={styles.inneText}>Save</Text>
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
        marginTop: "90%",
        marginLeft: "30%",
        justifyContent: "space-evenly",
        position: "relative",
        marginBottom: "-10%",
    },
    save: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '28%',
        height: "65%",
        justifyContent: "center",
        borderWidth: 2

    },
    new: {
        alignItems: 'center',
        backgroundColor: '#00979d',
        width: '28%',
        height: "65%",
        justifyContent: "center",
        borderWidth: 2
    },
    reset: {
        alignItems: 'center',
        backgroundColor: '#9d0300',
        width: '28%',
        height: "65%",
        justifyContent: "center",
        borderWidth: 2,
        
    },
    inneText: {
        fontSize: 25,
    }
})

export default BottomButtons
