import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyle';


export const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.Principal,
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
        
    },
    formRow: {
        width: 299,
        height:50,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.Branco,
        borderRadius: 30,
        backgroundColor:colors.Claro
    },
    icon: {
        fontSize: 28,
        color: colors.Cinza,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
    container2: {
        marginTop:50,
        width: 330,
        height:300,
        backgroundColor: colors.Verdeclarodois,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 46
        
    },
    container3: {
        width: 330,
        height:100,
        backgroundColor: colors.Bege,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 6
        
    },
    termos:{
        color:colors.Principal,
    }
})