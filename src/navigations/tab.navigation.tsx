import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp, } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,Image, ScrollView, ImageBackground } from 'react-native';
import { Perfil } from '../screens/Perfil';
import { ScreenChat } from '../screens/Chat';
import { Home } from '../screens/home';
import { colors } from '../styles/globalstyle';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';

type TabParamList = {
    Chat: undefined
    Perfil: undefined
    Home: undefined
    Mensagem: undefined
   
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
type TabScreenNavigationProp2 = BottomTabNavigationProp<TabParamList, 'Home'>
export type TabTypes2 = {
    navigation: TabScreenNavigationProp
}


export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        
      
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.Verdeclaro,
                tabBarActiveTintColor: colors.Principal,
                headerShown: false,
               
              
               tabBarStyle:{
                    
                    borderWidth: 0.5,
                    borderBottomWidth: 1,
                    backgroundColor: colors.Verdeclarodois,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderColor: 'white',
                    height:60,
                    elevation: 0,
                   
                
               },
               
            }}
        >
            <Tab.Screen name='Chat' component={ScreenChat}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="chat" size={24} color={ colors.Branco } /> 
                    ),
}}
/>
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.Branco } /> 
                    ),
}}
/>
    
<Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.Branco } /> 
                    ),
}}
/>



        </Tab.Navigator>
        
    );
}

