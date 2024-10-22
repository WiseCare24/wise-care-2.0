import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
    },
    textbox:{
      flex: 1
    },
    inputcontainer:{
        flexDirection: 'row',
        backgroundColor: colors.Verdeclarodois,
        padding: 50,
    },
    p:{
        color:colors.Branco,
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
        backgroundColor:colors.Principal
    },
    BotaoEnviar:{
        backgroundColor: colors.Verdeclarodois,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',

    },
});
