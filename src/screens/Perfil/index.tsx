import { View, Text, TextInput} from "react-native";
import { styles } from "./styles";
import { colors } from '../../styles/globalstyle';
import { useAuth } from "../../hook/auth";
import { ButtonInterface } from "../../components/ButtonInterface";
import React from "react";


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

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
           <View style={styles.formRow} > 
                <TextInput
                    placeholderTextColor={colors.Preto}
                    //style={styles.input}
                    placeholder="Nome: "
                    secureTextEntry={true}
                    autoCapitalize = "none"
                    onChangeText={(i) => handleChange({ name: i })}
                />
            </View>
            
            <View style={styles.formRow} >
                 <TextInput
                    placeholderTextColor={colors.Cinza}
                    //style={styles.input}
                    placeholder="Email:"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange({ email: i})}
                        />
            </View>

            <View style={styles.formRow} > 
                <TextInput
                    placeholderTextColor={colors.Preto}
                    //style={styles.input}
                    placeholder="Telefone: "
                    secureTextEntry={true}
                    autoCapitalize = "none"
                    onChangeText={(i) => handleChange({ telephone: i })}
                />
            </View>
 
            <View style={styles.formRow} > 
                <TextInput
                    placeholderTextColor={colors.Preto}
                    //style={styles.input}
                    placeholder="Senha: "
                    secureTextEntry={true}
                    autoCapitalize = "none"
                    onChangeText={(i) => handleChange({ password: i })}
                />
            </View>

            <View style={styles.formRow}> 
            <Text style={styles.gender}>Gênero</Text>
                <TextInput
                    placeholderTextColor={colors.Preto}
                    //style={styles.input}
                    //placeholder="Gênero: "
                    secureTextEntry={true}
                    autoCapitalize = "none"
                 />
            </View>

            <ButtonInterface title="Excluir" type="primary"
                onPressI={async () => await signOut()}
            />
             <ButtonInterface title="Salvar" type="primary"
                onPressI={async () => await signOut()}
            />
        </View>
    )
}