import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from "react-native";
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
    resendButton: {
        borderColor: "#7DCEFB",
        backgroundColor: '#7DCEFB',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        width: '30%',
        alignItems: "center",
        marginTop: '10%',
        marginBottom: '-30%',
    },
    resendButtonText: {
        color: "white",
    },
    NextButtonDisabled: {
        borderColor: "#A4A2A2",
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        alignItems: "center",
        marginTop: '90%',
    },
    NextButtonDisabledText: {
        color: "#A4A2A2",
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
    input: {
        height: 40,
        margin: 12,
        backgroundColor: "#F3B3D6",
        width: '40%',
        borderRadius: 5,
      },
      inputName: {
        height: 40,
        margin: 12,
        backgroundColor: "#F3B3D6",
        width: '70%',
        borderRadius: 5,
      },
});

export const PhoneSignIn = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);
    const [text, onChangeText] = React.useState("")
  const [number, onChangeNumber] = React.useState(null);

    return (
        <ScreenContainer>
            <Text style={styles.h1}>Phone Number</Text>

            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />

            <Text style={styles.greyp}>We will send a text with a verification code.
            Message and data rates may apply. <Text style={styles.blackp}>Learn what
            happens when your number changes.</Text>
            </Text>

            <TouchableOpacity onPress={() => navigation.push("VerificationCode")} style={styles.NextButtonDisabled}>
                <Text style={styles.NextButtonDisabledText}>Next</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
};


export const VerificationCode = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);
    const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
    const resend = () => {

}
    return (
        <ScreenContainer>
            <Text style={styles.h1}>Verification Code</Text>

            <Text style={styles.greyp}>SMS Sent to +1  (898)867-5309</Text>

            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />
   
            <Text style={styles.greyp}>Please enter the 6 digit sms code you received.</Text>
            <Text style={styles.greyp}>Didn’t receive the code? </Text>

            <TouchableOpacity onPress={() => resend()} style={styles.resendButton}>
                <Text style={styles.resendButtonText}>Resend</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.push("FullName")} style={styles.NextButtonDisabled}>
                <Text style={styles.NextButtonDisabledText}>Next</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
};

export const FullName = () => {
    const { signUp } = React.useContext(AuthContext);
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const resend = () => {

}
    return (
        <ScreenContainer>
            <Text style={styles.h1}>Name</Text>

            <TextInput
            style={styles.inputName}
            onChangeText={onChangeText}
            value={text}
            placeholder="Username"
            />

            <TextInput
            style={styles.inputName}
            onChangeText={onChangeText}
            value={text}
            placeholder="First Name"
            />

            <TextInput
            style={styles.inputName}
            onChangeText={onChangeText}
            value={text}
            placeholder="Last Name"
            />
   
            <Text style={styles.greyp}>This is the name that others will see on your profile.</Text>

            <TouchableOpacity onPress={() => signUp()} style={styles.NextButtonDisabled}>
                <Text style={styles.NextButtonDisabledText}>Next</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
};