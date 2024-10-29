import React = require("react");
import { Alert,ScrollView, Image, View, Text} from 'react-native'
import { MaterialIcons, Entypo,Octicons } from "@expo/vector-icons";
import { ButtonInterface } from '../../components/ButtonInterface';
import { styles } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../../styles/globalstyle';
import { AxiosError } from 'axios';
import {useAuth} from "../../hook/auth";

export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Home() {
    const {user, signOut} = useAuth()
        return (
            <View style={styles.container}>
                <View style={styles.littlecontainer}>
                <Text style={styles.frequentes}> Perguntas Frequentes</Text>
                <Text style={styles.textinho}>1.Qual a superdosagem da dipirona?</Text>
                </View>
                <ButtonInterface type='primary' title="Sair" 
                onPressI={async()=>await signOut()}>
                </ButtonInterface>
            </View>
        );
    }