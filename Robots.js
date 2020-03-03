import React from 'react'
import DragNDrop from './DragNDrop'
import DuckDuck from './DuckDuck'
import { View, StyleSheet} from 'react-native';

const Robots = () => {
    return (
        <>
            <View style={styles.main}>
                <DragNDrop />
                <DuckDuck />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "15%",
        minWidth: "100%",
        marginLeft: "-15%",
        minHeight: "100%",
    },
    mainMiddle: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "42%",
        minWidth: "100%",
        marginLeft: "-15%",
        maxHeight: "45%"
    },
    mainBottom: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "70%",
        minWidth: "100%",
        marginLeft: "-15%",
        maxHeight: "28%",
    },

})

export default Robots