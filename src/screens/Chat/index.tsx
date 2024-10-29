import { StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,Image  } from 'react-native';
import {styles} from "./styles";
import {Feather} from '@expo/vector-icons';
import {useState} from 'react';
import { useCallback } from 'react';
import {useAuth} from "../../hook/auth";
import React from 'react';
import { ButtonInterface } from '../../components/ButtonInterface';
import KeyboardAvoidingViewContainer from '../../components/KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';
import { colors } from '../../styles/globalstyle';
export function ScreenChat (){
    const [messageText, setMessageText] = useState("");
    const {user, signOut} = useAuth()
    const image = require('../../assets/wiselogo.png')
    const sendMessage = useCallback(() => {
       console.log(messageText);
       setMessageText("");
    }, [messageText]);
     return (
        <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={90}>
         
            <ButtonInterface type='primary' title="Sair" 
                onPressI={async()=>await signOut()}>
                </ButtonInterface>
         <View style={styles.container}>
         <View>
         <Image source={image} style={styles.logo}>
         </Image>
         </View>
        
            
          <View>
                
                
            </View>
            <View style={styles.inputcontainer}>
               <Text style={styles.p}></Text>
               
            <TextInput style={styles.textbox} 
            placeholder='Faça uma pergunta incrível' placeholderTextColor={colors.Bege}
            onChangeText={(Text) => setMessageText(Text)}
            value={messageText}/>
                <TouchableOpacity style={styles.BotaoEnviar} onPress={sendMessage}>
                 <Feather name="send" size={18} color="black" />
                </TouchableOpacity>
          </View>
            
         
        </View>
        
       </KeyboardAvoidingView>
     );



}