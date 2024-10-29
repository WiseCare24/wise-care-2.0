import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from '../../styles/globalstyle';
import { useAuth } from "../../hook/auth";
import { ButtonInterface } from "../../components/ButtonInterface";


export interface IPerfil {
    name?: string
    email?: string
    telephone?: string
    password?: string
}

export function Perfil() {
    const { user, signOut } = useAuth()
    function handleChange(arg0: { name: string; }): void {
        throw new Error("Function not implemented.");
    }

    function handleChange2(arg0: { email: string; }): void {
        throw new Error("Function not implemented.");
    }

    function handleChange3(arg0: { telephone: string; }): void {
        throw new Error("Function not implemented.");
    }

    function handleChange4(arg0: { password: string; }): void {
        throw new Error("Function not implemented.");
    }

    


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View style={styles.formRow} >
                <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    placeholder="Nome: "
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange({ name: i })}
                />
            </View>

            <View style={styles.formRow} >
                <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    placeholder="Email:"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange2({ email: i })}
                />
            </View>

            <View style={styles.formRow} >
                <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    placeholder="Telefone: "
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange3({ telephone: i })}
                />
            </View>

            <View style={styles.formRow} >
                <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    placeholder="Senha: "
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange4({ password: i })}
                />
            </View>

            <View style={styles.genero}>
                <Text style={styles.gender}>Gênero</Text>
                <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.Botao1}>
                <ButtonInterface title="Excluir" type="primary"
                    onPressI={async () => await signOut()}
                />
                <View style={styles.Botao2}>
                    <ButtonInterface title="Salvar" type="primary"
                        onPressI={async () => await signOut()}
                    />
                </View>

            </View>
        </View>
    )
}