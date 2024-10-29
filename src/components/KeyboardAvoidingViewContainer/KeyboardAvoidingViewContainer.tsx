import React from "react";
import { KeyboardAvoidingView, Platform, ViewProps } from "react-native";

interface KeyboardAvoidingViewContainerProps extends ViewProps {
    children: React.ReactNode;
}

const KeyboardAvoidingViewContainer: React.FC<KeyboardAvoidingViewContainerProps> = (props) => {
    if (Platform.OS === 'android') {
        return <>{props.children}</>; //fragmento para retorno
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={100}
        >
            {props.children}
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingViewContainer;
