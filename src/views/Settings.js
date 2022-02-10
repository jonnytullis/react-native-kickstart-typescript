import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../hooks'

export default function Settings() {
    const theme = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the SETTINGS screen!</Text>
        </View>
    )
}

function getStyles(theme) {
    const { colors } = theme
    return  StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: colors.text.primary,
            fontSize: 24,
            fontWeight: 'bold',
        },
    })
}
