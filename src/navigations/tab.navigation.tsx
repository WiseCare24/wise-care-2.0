import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Perfil } from '../screens/Perfil';
import { ScreenChat } from '../screens/Chat';
import { colors } from '../styles/globalstyle';
import { AntDesign, Ionicons } from '@expo/vector-icons'

type TabParamList = {
    Chat: undefined
    Perfil: undefined
    Mensagem: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.Cinza,
                tabBarActiveTintColor: colors.Cinza,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.Cinza,
                tabBarInactiveTintColor: colors.Cinza,
            }}
        >
            <Tab.Screen name='Chat' component={ScreenChat}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.Cinza } /> 
                    ),
}}
/>
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.Cinza } /> 
                    ),
}}
/>
            
        </Tab.Navigator>
    )
}

