import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import * as theme from '../styles/theme'


export default class TextBlock extends Component 
{
    render() 
    {
        const 
        { 
            // colors
            color,
            primary,
            secondary,
            nav,
            subtitle,
            gray,
            gray2,
            gray3,
            white,

            h1,
            h2,
            h3,

            // other
            style,
            children,
            ...props
        } 
        = this.props


        const textStyles =
        [
            // colors
            color && styles[color],
            color && !styles[color] && { color },

            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,

            primary && styles.primary,
            secondary && styles.secondary,
            nav && styles.nav,
            subtitle && styles.subtitle,
            gray && styles.gray,
            gray2 && styles.gray2,
            gray3 && styles.gray3,
            white && styles.white,

            style
        ]


        return (
            <Text style={ textStyles } { ...props }> 

                { children }

            </Text>
        )
    }
}

const styles = StyleSheet.create(
{
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,

    // colors
    primary: { color: theme.colors.primary },
    secondary: { color: theme.colors.secondary },
    nav: theme.fonts.nav,
    subtitle: theme.fonts.subtitle,
    gray: { color: theme.colors.gray },
    gray2: { color: theme.colors.gray2 },
    gray3: { color: theme.colors.gray3 },
    white: { color: theme.colors.white },
})
