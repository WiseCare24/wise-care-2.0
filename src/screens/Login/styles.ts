import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyle';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Principal,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: 'center',
        color: colors.Branco,
        textDecorationLine:"underline",
        marginBottom:50
    
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
  
    icon: {
        fontSize: 40,
        color: colors.Cinza,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
    container2: {
        width: 330,
        height:340,
        backgroundColor: colors.Verdeclarodois,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 46
    },
    nominho:{
        marginRight:170,
        alignItems:"flex-start",
        fontSize: 32,
        fontWeight: "bold",
        color: colors.Principal

    },
    salvacao:{
        marginRight:70,
        marginLeft:75,
        marginTop:0,
        fontSize: 15, 
        color: colors.Principal,
        textDecorationLine:"underline",
       
    },
})