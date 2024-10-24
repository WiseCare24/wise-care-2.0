import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor: colors.Verdeclarodois,
    },
    textbox:{
      flex: 1
     
    },
    inputcontainer:{
        flexDirection: 'row',
        backgroundColor: colors.Verdeclarodois,
        paddingTop: 50,
        alignSelf:'center',
    },
    p:{
        color:colors.Verdeclarodois,
    },
    formRow: {
        width: 290,
        height:60,
        margin: 0,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.Verdeclaro,
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
    logo:{
        margin:10,
        alignSelf:"center",
        paddingTop: 10,
        resizeMode: 'contain',
        aspectRatio: 0.3
       },
});
