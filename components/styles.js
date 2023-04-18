/*
* File: App.style.js
* Author: Balogh Csenge
* Copyright: 2021, Balogh Csenge
* Group: Szoft_II_N
* Date: 2023-04-07
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        paddingTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    body: {
        // flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#48b890',
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
        border: 'solid 1px black'
    },
    result: {
        fontSize: 24 
    },
    divider: {
        backgroundColor: 'black',
        height: 1,
        width: '100%'
    },
    input: {
        border: 'solid 1px black',
        height: 44,
        paddingLeft: 15,
        borderRadius: 12
    }
});

