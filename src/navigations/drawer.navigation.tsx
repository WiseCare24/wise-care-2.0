import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/globalstyle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
import { Home } from '../screens/home';
type DrawerParamList = {
    Tab: undefined
    Home: undefined
    QrCode: undefined
    Imagem: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
type DrawerScreenNavigationProp2 = DrawerNavigationProp<DrawerParamList, 'Home'>
export type DrawerTypes2 = {
    navigation: DrawerScreenNavigationProp2
}


export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#E0E8E1" },
            headerTintColor: colors.Verdeclaro,
            drawerStyle: {
                backgroundColor: "#E0E8E1",
            },
            drawerActiveTintColor: colors.Verdeclarodois,
            drawerInactiveTintColor: colors.Verdeclaro

        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'WCIA',
                    headerTitle: 'WCIA',
                    headerTitleStyle: {
                        color: "white"
                      },
                    headerTitleAlign:"center",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.Cinza} />
                    ),
                }} />
        <Drawer.Screen name='Home' component={TabNavigation}
                options={{
                    drawerLabel: 'Home',
                    headerTitle: 'Home',
                    headerTitleStyle: {
                        color: "white"
                      },
                    headerTitleAlign:"center",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.Cinza} />
                    ),
                }} />

            
        </Drawer.Navigator>



    )
}