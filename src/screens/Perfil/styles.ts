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


    ButtonInterface: {
        padding: 20,
        fontSize: 20,
    },

    formRow: {
        width: 290,
        height: 45,
        margin: 0,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.Branco,
        borderRadius: 10,
        backgroundColor: colors.Claro,
        shadowColor: "#284841",
        shadowOpacity: 0.7,
        shadowOffset: {
           height: 5,
           width: 5,
         },

    },

    genero: {
        backgroundColor: colors.Bege,
        width: 290,
        height: 100,
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: "bold",
        borderRadius: 10
    },

    gender: {
        justifyContent: "center",
        fontWeight: "bold",
    },
    Botao1: {
    
        flexDirection: "row",
    },

    Botao2:{
        flexDirection: "row",
    },

})