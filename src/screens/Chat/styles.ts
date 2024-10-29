import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor: "white",
    },
    textbox:{
      flex: 1,
       fontFamily: 'serif',
       alignItems:'flex-start',
    },
    inputcontainer:{
        flexDirection: 'row',
        backgroundColor: colors.Verdeclarodois,
        paddingTop: 5,
        alignSelf:'center',
        borderRadius:15,
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
        backgroundColor: colors.Bege,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    logo:{
        margin:5,
        alignSelf:"center",
        paddingTop: 10,
        resizeMode: 'contain',
        aspectRatio: 0.2
       },
});
