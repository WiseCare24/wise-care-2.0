import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Perfil } from '../screens/Perfil';
import { ScreenChat } from '../screens/Chat';
import { home } from '../screens/home';
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
                tabBarActiveBackgroundColor: colors.Verdeclarodois,
                tabBarActiveTintColor: colors.Cinza,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.Verdeclarodois,
                tabBarInactiveTintColor: colors.Cinza,
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
    
<Tab.Screen name='Home' component={home}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.Branco } /> 
                    ),
}}
/>


            
        </Tab.Navigator>
    )
}

