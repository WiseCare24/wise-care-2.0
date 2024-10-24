import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Branco,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    littlecontainer: {
        width: 330,
        height:340,
        backgroundColor: colors.Verdeclarodois,
        borderRadius: 10,
        fontWeight: "bold",
    },
    frequentes:{
        color:colors.Principal,
        fontSize:20,
    },
    textinho:{
        color:colors.Preto,
        fontSize:15,
        marginLeft:10,
    },
})