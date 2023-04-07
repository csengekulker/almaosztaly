import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      flex: 1,
      backgroundColor: '#f8f9fa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      display: 'inline',
      padding: 10,
      borderRadius: 10,
      marginBottom: 5,
      marginTop: 5,
      border: 'solid 1px black'
    },
    submit: { backgroundColor: '#48b890'},
    reset: { backgroundColor: '#708a80'},
    input: {
      border: 'solid 1px black',
      height: 44,
      paddingLeft: 15,
      borderRadius: 12
    }
  });
  