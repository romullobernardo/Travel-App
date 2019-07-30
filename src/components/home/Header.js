import React from 'react'
import { View, Text } from '../index'
import * as theme from '../../styles/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
{
    square:
    {
        position: 'absolute',
        top: 18,
        left: 45,

        width: 21,
        height: 21,

        backgroundColor: theme.colors.primary,
    }
})


export default () => 

    <View row flex={0.15}>
    
        <View centerMain centerCross>
            <MaterialCommunityIcons 
                size={36} 
                color='black' 
                name='menu' 
            />
        </View>

        <View flex={2.5} centerCross centerMain>

            <View style={styles.square} />

            <Text h1 color='secondary'> Discover. </Text>

        </View>

        <View centerMain centerCross>
            <Feather 
                size={36} 
                color='black' 
                name='search' 
            />
        </View>


    </View>