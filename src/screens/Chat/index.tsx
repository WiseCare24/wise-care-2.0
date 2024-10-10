import { StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {styles} from "./styles";
import {Feather} from '@expo/vector-icons';
import {useState} from 'react';

export function ScreenChat (){
    const [messageText, setMessageText] = useState("");

    const sendMessage = useCallback(() => {
       console.log(messageText);
       setMessageText("");
    }, [messageText]);
     return (
        <KeyboardAvoidingView>
         <View style={styles.container}>
            <View style={styles.inputcontainer}>
            <TextInput style={styles.textbox} 
            placeholder='Comece a conversar' 
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