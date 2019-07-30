import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { View, Text } from '../components'


export default class App extends Component 
{
    render() 
    {
        return (
            <View
                centerMain
                centerCross
            >
                <Text secondary> GO LIVE </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
