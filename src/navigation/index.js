import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CityInformation from '../screens/CityInformation'
import GoLive from '../screens/GoLive'

import { colors } from '../styles/theme'


export default createStackNavigator(
{
    Home,
    CityInformation,
    GoLive,
},
{
    initialRouteName: 'Home',
    cardStyle: { backgroundColor: colors.background },
})