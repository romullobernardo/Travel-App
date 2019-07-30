import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { View } from '../index'
import { colors } from '../../styles/theme'

const menu =
[
    {
        name:'Poulare',
        active: false,
    },
    {
        name:'Japan',
        active: true,
    },
    {
        name:'Moscow',
        active: false,
    },
    {
        name:'London',
        active: false,
    },
]


export default ({active}) => 

    <View 
        row
        color='secondary' 
        flex={0.12}
        card
        centerCross
        margin
        style={{ paddingHorizontal: 55, maxHeight: 343 }}
    >
        <View row space='around'>

            {menu.map((item, i) => 
                
                <TouchableOpacity key={i}>

                    <Text 
                        style=
                        { 
                            item.active ? 
                            styles.active : 
                            styles.unactive
                        } 
                    > 
                        {item.name} 
                    </Text>

                    <View 
                        style=
                        { 
                            item.active ? 
                            styles.tick : 
                            null
                        } 
                    />

                </TouchableOpacity>
                
            )}

        </View>

    </View>


const styles = StyleSheet.create(
{
    active:
    {
        color: 'white'
    },

    tick:
    {
        position: 'absolute',
        top: 25,
        left: '20%',

        width: 29,
        height: 4,
        borderRadius: 20,
        backgroundColor: colors.primary,
        zIndex: 1,
    },

    unactive:
    {
        color: colors.nav
    }
})
