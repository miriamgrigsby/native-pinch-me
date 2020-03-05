import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


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
                        ? <Text style={{color: "#9d0300", fontSize: 18 }}>Disconnected</Text>
                        : <Text style={{color: "#00979d", fontSize: 18 }}>Connected</Text>
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
        justifyContent: "flex-start",
        marginTop: "3%",
        width: 300,
        marginLeft: "0.75%",
        position: "absolute",
        alignItems: "center"
    },
    connected: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '42%',
        height: "80%",
        marginRight: "3%",
        zIndex: 10
    },
    currentStatus: {
        alignItems: 'center',
        width: '42%',
        height: "80%",
        marginRight: "3%",
        zIndex: 10
    },
    disconnected: {
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '42%',
        height: "80%",
        marginRight: "2%",
        zIndex: 10
    },
    innerText: {
        fontSize: 18
    }
})

export default Connection