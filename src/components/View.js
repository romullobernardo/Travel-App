import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import * as theme from '../styles/theme'


export default class ViewBlock extends Component 
{
    render() 
    {
        const 
        { 
            flex,

            margin,
            marginH,
            marginV,

            row,
            
            flexStartMain,
            flexStartCross,
            centerMain,
            centerCross,
            flexEndMain,
            flexEndCross,
            space,

            color,

            card,

            style,
            children,
            ...props
        } 
        = this.props


        const viewStyles =
        [
            styles.view,

            margin && styles.margin,
            marginH && styles.marginH,
            marginV && styles.marginV,
            
            flex && { flex },
            flex === false && { flex: 0 },
            
            row && styles.row,
            
            flexStartMain && styles.flexStartMain,
            flexStartCross && styles.flexStartCross,
            centerMain && styles.centerMain,
            centerCross && styles.centerCross,
            flexEndMain && styles.flexEndMain,
            flexEndCross && styles.flexEndCross,
            space && { justifyContent: `space-${space}` },

            color && styles[color],
            color && !styles[color] && { backgroundColor: color },

            card && styles.card,

            style
        ]


        return (
            <View style={ viewStyles } { ...props }>

                { children }

            </View>
        )
    }
}

const styles = StyleSheet.create(
{
    view:
    {
        flex: 1,
    },


    margin:
    {
        margin: theme.sizes.margin,
    },

    marginH:
    {
        marginHorizontal: theme.sizes.margin,
    },

    marginV:
    {
        marginVertical: theme.sizes.margin,
    },

    
    card:
    {
        borderRadius: theme.sizes.border,
    },


    row:
    {
        flexDirection: 'row',
    },


    flexStartMain:
    {
        justifyContent: 'flex-start',
    },

    flexStartCross:
    {
        alignItems: 'flex-start',
    },

    centerMain:
    {
        justifyContent: 'center',
    },

    centerCross:
    {
        alignItems: 'center',
    },

    flexEndMain:
    {
        justifyContent: 'flex-end',
    },

    flexEndCross:
    {
        alignItems: 'flex-end',
    },


    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },

    nav: { backgroundColor: theme.colors.nav },
    subtitle: { backgroundColor: theme.colors.subtitle },

    gray: { backgroundColor: theme.colors.gray },
    gray2: { backgroundColor: theme.colors.gray2 },
    gray3: { backgroundColor: theme.colors.gray3 },
    white: { backgroundColor: theme.colors.white },
})
