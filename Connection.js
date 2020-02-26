import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'


const Connection = ({ handleConnection, connected, handleDisconnection }) => {

    const handleConnect = () => {
        handleConnection()
    }

    const handleDisconnect = () => {
        handleDisconnection()
    }

    return (
        <View style={styles.upperButtons}>
            <TouchableOpacity
                title="connected"
                style={styles.connected}
                onPress={handleConnect}
            >
                <Text style={styles.innerText}>Connected</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.currentStatus}
                title="currentStatus"
                onPress={() => Alert.alert('I hate you')}
            >

                {
                    connected == false
                        ? <Text style={{color: "red", fontSize: 18 }}>Disconnected</Text>
                        : <Text style={{color: "blue", fontSize: 18 }}>Connected</Text>
                }
                
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.disconnected}
                title="disconnected"
                onPress={handleDisconnect}
            >
                <Text style={styles.innerText}>Disconnected</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    upperButtons: {
        flex: 1,
        flexDirection: "row",
        marginTop: "-30%",
        width: 300,
        marginLeft: "-8%"
    },
    connected: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '42%',
        height: "35%",
        marginRight: "3%"
    },
    currentStatus: {
        alignItems: 'center',
        width: '42%',
        height: "35%",
        marginRight: "3%",
    },
    disconnected: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '42%',
        height: "35%",
        marginRight: "2%"
    },
    innerText: {
        fontSize: 18
    }
})

export default Connection