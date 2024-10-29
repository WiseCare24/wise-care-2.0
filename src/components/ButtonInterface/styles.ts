import { StyleSheet } from 'react-native';
import { colors } from "../../styles/globalstyle";



export const styles = StyleSheet.create({

    buttonPrimary: {
        backgroundColor: colors.Bege,
        borderRadius: 5,
        margin: 10,
        alignSelf: "center",
        height: 50,
        width: 244,
        shadowColor: "#284841",
        shadowOpacity: 0.7,
        shadowOffset: {
           height: 5,
           width: 5,
         },
    },

    buttonSecondary: {
        backgroundColor: colors.Bege,
        borderRadius: 5,
        alignSelf: "center",
        margin: 10,
        height: 50,
        width: 244,
        shadowColor: "#284841",
        shadowOpacity: 0.7,
        shadowOffset: {
           height: 5,
           width: 5,
         },

    },

    
    buttonThird: {
        backgroundColor: colors.Bege,
        borderRadius: 5,
        alignSelf: "center",
        margin: 10,
        height: 50,
        width: 244,
    },

    text: {
        marginHorizontal: 10,
        fontFamily: 'PaytoneOne_400Regular',
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: colors.Principal,
    },

  
    

})