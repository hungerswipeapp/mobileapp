import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context";

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "white",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
    },
    NextButtonDisabled: {
        borderColor: "#AEACAC",
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        alignItems: "center",
        marginTop: '100%',
    },
    NextButtonDisabledText: {
        color: "#AEACAC",
    },
    h1: {
        fontSize: 25,
        color: "black",
    },
    blackp: {
        marginHorizontal: '10%',
        color: "black",
        textAlign: "center",
        textDecorationLine: 'underline',
    },
    greyp: {
        marginHorizontal: '10%',
        marginTop: '5%',
        color: "#BDB9B9",
        textAlign: "center",
    },
});

export const PhoneSignIn = () => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <ScreenContainer>
            <Text style={styles.h1}>Phone Number</Text>

            <Text style={styles.greyp}>We will send a text with a verification code.
            Message and data rates may apply. <Text style={styles.blackp}>Learn what
            happens when your number changes.</Text>
            </Text>

            <TouchableOpacity onPress={() => signUp()} style={styles.NextButtonDisabled}>
                <Text style={styles.NextButtonDisabledText}>Next</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
};