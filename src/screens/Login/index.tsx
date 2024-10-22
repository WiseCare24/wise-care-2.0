import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native'
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import {useFonts, LilitaOne_400Regular} from '@expo-google-fonts/lilita-one';
import { styles } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ButtonInterface } from '../../components/ButtonInterface';
import { LoginTypes } from '../../navigations/login.navigations';
import { colors } from '../../styles/globalstyle';
import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';

export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Login({ navigation }: LoginTypes) {
    const [data, setData] = useState<IAuthenticate>();
    const {signIn,setLoading}=useAuth()
    async function handleSignIn() {
        if (data?.email && data.password) {
            try {
                await signIn(data)
            }catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                console.log(msg)
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item });
    }

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>

                    <Text style={styles.title} >Login</Text>
                    <View style={styles.container2}>
                        <Text style={styles.nominho}> Name </Text>
                     <View style={styles.formRow}>

                        <FontAwesome name="user-circle" style={styles.icon} color={colors.Cinza} />

                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                          
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}
                        />
                     </View>
                     <Text style={styles.nominho}> Senha </Text>
                     <View style={styles.formRow} >
                        <Entypo name="key" style={styles.icon} />

                        <TextInput
                            placeholderTextColor={colors.Cinza}
                            style={styles.input}
                
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                    <Text style={styles.salvacao}> Esqueci Minha Senha</Text>
                    </View>
                    <ButtonInterface title='Login' type='primary' onPressI={handleSignIn} />
                    <ButtonInterface title='Cadastre-se'
                        type='secondary' onPressI={handleRegister} />
                </KeyboardAvoidingView>
            </View>
        );
    }

