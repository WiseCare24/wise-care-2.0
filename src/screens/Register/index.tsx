import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native'
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/globalstyle';
import { LoginTypes } from '../../navigations/login.navigations';
import { ButtonInterface } from '../../components/ButtonInterface';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';



export interface IRegister {
    name?: string
    email?: string
    password?: string
}


{/* pag 2*/ }


export function Register({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    const { signIn, setLoading } = useAuth()
    async function handleRegister() {
        if (data?.email && data.name && data.password) {
            setLoading(true)
            try {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                navigation.navigate("Login")
            } catch (error) {
                const err = error as AxiosError
                console.log(err)
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }

    return (

        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastre-se</Text>
                <View style={styles.container2}>
                    <View style={styles.formRow}>
                        <Ionicons name="person" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                            placeholder="Nome"
                            onChangeText={(i) => handleChange({ name: i })}
                        />
                    </View>

                    <View style={styles.formRow}>
                        <MaterialIcons name="email" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}
                        />
                    </View>

                    <View style={styles.formRow}>
                        <Entypo name="key" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Entypo name="key" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                            placeholder="Confirmar Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                </View>
                <ButtonInterface title='Salvar' type='secondary' onPressI={handleRegister} />
                <ButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
            </KeyboardAvoidingView >
            <View style={styles.container3}>
                <Text style={styles.termos}> Termos de Política de Privacidade </Text> 
           <Text>Ao utilizar o serviço, o usuário manifesta sua livre, expressa e inequívoca concordância com relação ao conteúdo deste Termo de Uso e estará legalmente vinculado a todas as condições aqui previstas. </Text>  
           </View>
        </View >
       
    );
}