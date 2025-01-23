import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <ScrollView horizontal={true} >
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardRed]}>
                        <Text style={styles.text}>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardBlue]}>
                        <Text style={styles.text}>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardGreen]}>
                        <Text style={styles.text}>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardGrey]}>
                        <Text style={styles.text}>Old Grey</Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 8

    },
    cardRed: {
        backgroundColor: '#BA4A3B',

    },
    cardBlue: {
        backgroundColor: '#6A89CC'
    },
    cardGreen: {
        backgroundColor: '#218F76'
    },
    cardGrey: {
        backgroundColor: '#A4B0BD'
    },
    text: {
        color: "#ffff",
        fontSize: 16,
        fontWeight: '800',

    }

})