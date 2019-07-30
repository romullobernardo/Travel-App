import React, { Component } from 'react'
import * as theme from '../styles/theme'
import { View, Text } from '../components'

import List from '../components/home/List'
import SubHeader from '../components/home/SubHeader'
import Header from '../components/home/Header'


export default class Home extends Component 
{
    static navigationOptions =
    {
        header: null
    }


    render = () => 

        <View column>
        
            <Header />

            <SubHeader />
            
            <List />

        </View>

}