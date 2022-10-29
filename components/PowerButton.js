import React, {useState} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'

const PowerButton = () => {
    const [power, setPower] = useState(true)

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setPower(!power)}>
                <Image
                    source={ power === true ? require('../assets/power-on-256.png') : require('../assets/power-off-256.png')
                }/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default PowerButton;