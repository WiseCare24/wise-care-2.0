import { StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,Image, ScrollView  } from 'react-native';
import {styles} from "./styles";
import {Feather, Octicons} from '@expo/vector-icons';
import {useState} from 'react';
import * as Font from 'expo-font';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {useAuth} from "../../hook/auth";
import React from 'react';
import { ButtonInterface } from '../../components/ButtonInterface';
import KeyboardAvoidingViewContainer from '../../components/KeyboardAvoidingViewContainer/KeyboardAvoidingViewContainer';
import { colors } from '../../styles/globalstyle';
export function ScreenChat (){
    const [messageText, setMessageText] = useState("");
    const {user, signOut} = useAuth()
    const image = require('../../assets/wiselogo.png')
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
      await Font.loadAsync({
          'Itim-Regular': require('../../assets/fonts/Itim-Regular.ttf'), 
      });
      setFontsLoaded(true);
  };
  useEffect(() => {
   loadFonts();
}, []);

    const sendMessage = useCallback(() => {
       console.log(messageText);
       setMessageText("");
    }, [messageText]);

    if (!fontsLoaded) {
      return null; 
  }
     return (
        <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={90}>
           <ScrollView contentContainerStyle={{ flexGrow: 1 } }>
           
        
           
         <View style={styles.container}>
         <View>
         <Image source={image} style={styles.logo}>
         </Image>
         </View>
        
            
          <View>
                
                
            </View>
            <View style={styles.inputcontainer}>
             
               
            <TextInput style={styles.textbox} 
            placeholder='Faça uma pergunta incrível' placeholderTextColor={colors.Bege} 
            onChangeText={(Text) => setMessageText(Text)}
            value={messageText}/>
                <TouchableOpacity style={styles.BotaoEnviar} onPress={sendMessage}>
                <Octicons name="paper-airplane" size={20} color="black" />
                </TouchableOpacity>
          </View>
            
         
        </View>
        </ScrollView>
       </KeyboardAvoidingView>
     );



}