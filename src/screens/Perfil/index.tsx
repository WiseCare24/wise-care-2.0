import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from '../../styles/globalstyle';
import { useAuth } from "../../hook/auth";
import { ButtonInterface } from "../../components/ButtonInterface";

export interface IPerfil {
    name?: string;
    email?: string;
    telephone?: string,
    password?: string;
}

export function Perfil() {
    const { user, signOut } = useAuth()
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
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Email:"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange({ email: i })}
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
                    placeholder="Nome: "
                    secureTextEntry={true}
                    autoCapitalize = "none"
                    onChangeText={(i) => handleChange({ name: i })}
                />
            </View>
            <ButtonInterface title="Sair" type="primary"
                onPressI={async () => await signOut()}
            />
        </View>
    )
}