import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={{ elevation: 0 }} >
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.text}>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.text}>me</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.text}>for</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.text}>Scroll</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.text}>more..</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: '#fff',

    },
    text: {
        color: '#99999',
        fontSize: 16,
        fontWeight: '800',
    },
});
