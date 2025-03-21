import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}> What's new in Javascript 21 - ES12</Text>
                </View>
                <Image
                    source={{
                        uri: 'data:image/png;base64,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',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyContent}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.google.com/')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

    card: {
        width: 380,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#535C68',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardImage: {
        height: 190,
        borderRadius: 10,
        margin: 10
    },
    bodyContainer: {
        padding: 10
    },
    bodyContent: {
        color: '#fff'
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,

    },

});
