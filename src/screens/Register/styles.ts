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
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#000000'
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.Branco,
        borderRadius: 5,
        backgroundColor: colors.Branco,
    },
    icon: {
        fontSize: 28,
        color: colors.Preto,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
})