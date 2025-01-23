import { StyleSheet, Text, useColorScheme, View } from "react-native";


function AppPro() {
    const isDarkMode = useColorScheme() === 'light'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        // color: '#FFFFFF',
        color: '#ffa500',
        fontSize: 30,
    },
    blackText: {
        color: '#000000',

        fontSize: 30,
    }
})
export default AppPro