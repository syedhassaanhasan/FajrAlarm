import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import { Slider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AlarmSlider = () => {
    const [value, setValue] = useState(0);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    getFajrTime = () => {
        return fetch('https://api.aladhan.com/v1/calendarByCity?city=Karachi&country=Pakistan&method=2&month=04&year=2017')
        .then((response) => response.json())
        .then((json) => {
          console.log("json.data.timings: ", json.data[1].date.readable);
          console.log("json.data.timings: ", json.data[0].timings.Fajr);
          console.log("json.data.timings: ", json.data[0].timings.Sunrise);
          setStartTime(json.data[0].timings.Fajr);
          setEndTime(json.data[0].timings.Sunrise);
        })
    };

    useEffect(() => {
        console.log("Use Effect Called")
        getFajrTime()
    }, [startTime, endTime])


    return(
        <View style={styles.container}>
            <View style={[styles.contentView]}>
                <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={10}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
                    thumbProps={{
                    children: (
                        <Icon
                        name="moon-o"
                        // type="font-awesome"
                        size={40}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color={'white'}
                        />
                    ),
                    }}
                />
            </View>
            <Text style={styles.test}>Start Time: {startTime}</Text>
            <Text style={styles.test}>End Time: {endTime}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentView: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },
    test: {
        color: 'white'
    }
})

export default AlarmSlider;