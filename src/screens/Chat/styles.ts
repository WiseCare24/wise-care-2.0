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
      fontFamily:'Itim-Regular',
       alignItems:'flex-start',
    },
    inputcontainer:{
        flexDirection: 'row',
        backgroundColor: '#84A9A0',
        paddingTop: 5,
        alignSelf:'center',
        width: 280,
        borderRadius:20,
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
