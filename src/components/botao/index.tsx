import { StyleSheet, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React = require("react");

export interface IBSlider extends TouchableOpacityProps {
    onPressI: () => void
    cor: boolean
}

export function Botao({ onPressI, cor }: IBSlider) {

    return (
        <>
          
        </>
    )
}