import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/globalstyle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    QrCode: undefined
    Imagem: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
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
                    drawerLabel: 'INICIAL',
                    headerTitle: 'INICIAL',
                    headerTintColor: 'white',
                    headerTitleAlign:"center",
                    headerTitleStyle: {fontFamily:"Itim-Regular"},
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.Cinza} />
                    ),
                }} />
            
        </Drawer.Navigator>



    )
}