import React = require("react");
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export function Inicial() {
    const image1 = require('../../assets/Splashwc.png')
    return (
        <View style={styles.container}>


            <View>
                <Text style={styles.text}>
                    Bem Vindo!
                </Text>
            </View>

            <View></View>

            <View>
                <Image style=
                    {styles.img1} source={image1}></Image>
            </View>

            <View style={styles.bot}>


            </View>

        </View>


    )
}