import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '60%',
    },
    modalButtons: {
        minWidth: '20%'
    },
    listItem: {
        padding: 10,
        backgroundColor: '#dcdbdb',
        flexDirection: 'row',
        borderColor: 'black',
        borderStyle: 'solid',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    screen: {
        padding: 50
    },
    listChildItems: {
        width: 'fit-content',
        margin: '5px'
    }
});

export default Styles;