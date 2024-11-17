// app/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    counterContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    counterText: {
        fontSize: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center buttons horizontally
    },
    buttonWrapper: {
        marginHorizontal: 10, // Adds horizontal margin between buttons
    },
});

export default styles;