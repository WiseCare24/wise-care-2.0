import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Branco,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },

    name: {
        fontSize: 30,
        fontWeight: "bold"
    },

    sociais: {
        backgroundColor: colors.third,
        marginBottom: 20,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10
    },

    sociaisText: {
        marginLeft: 5
    },

    ButtonInterface: {
        padding: 20,
        fontSize: 20,
    },

    formRow: {
        width: 290,
        height:60,
        margin: 0,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.Branco,
        borderRadius: 30,
        backgroundColor:colors.Claro
    },

   gender: {
        color: colors.Bege
   }
})