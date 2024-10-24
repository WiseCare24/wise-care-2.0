import { StyleSheet } from 'react-native';
import { colors } from "../../styles/globalstyle";
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.Claro,
        borderRadius: 5,
        margin: 10,
        alignSelf: "center",
        shadowColor: colors.Preto,
        height: 50,
        width: 244,
    },

    buttonSecondary: {
        backgroundColor: colors.Claro,
        borderRadius: 5,
        alignSelf: "center",
        margin: 10,
        height: 50,
        width: 244,

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
    }


})