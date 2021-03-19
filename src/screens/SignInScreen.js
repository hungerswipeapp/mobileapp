import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  whiteh1: {
    color: "white",
    fontSize: 25,
  },
  text: {
    color: "white",
    marginHorizontal: '10%',
    marginVertical: '5%',
    textAlign: "center",
  },
  image: {
    height: '11%',
  },
  ButtonContainer :{
    borderRadius: 20,
    padding: 10,
    width: '80%',
    alignItems: "center",
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 10,
  },
  ButtonText:{
    color: "white",
  },
  FilledButtonContainer :{
    borderRadius: 20,
    padding: 10,
    width: '80%',
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
  },
  FilledButtonText:{
    color: "black",
  },
});

function SignInButton({ title, onPress }) {
  return (
    <View>
      <Button type="outline" title={title} onPress={onPress} />
    </View>
  );
}

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  return (
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Image
        style={styles.image}
        source={require('../../assets/Icons/name.png')}
        resizeMode="contain"
       />
        <Text style={styles.text}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in Private Policy and Cookies Policy.</Text>
        
        <TouchableOpacity onPress={() => navigation.push("PhoneSignIn")} style={styles.FilledButtonContainer}>
          <Text style={styles.FilledButtonText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => signIn()} style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Trouble Signing In?</Text>
      </ScreenContainer>

  );
}



// export function MultiAccounts({ navigation }) {
//   const { signUp } = React.useContext(AuthContext);
//   return (
//       <ScreenContainer>
//         <LinearGradient
//           // Background Linear Gradient
//           colors={["#FA89A7", "#ED5DBB"]}
//           start={[0, 0]}
//           end={[1, 1]}
//           style={styles.background}
//         />
//         <Image
//         style={styles.image}
//         source={require('../../assets/Icons/name.png')}
//         resizeMode="contain"
//        />
//         <Text style={styles.text}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in Private Policy and Cookies Policy.</Text>
        
//         <TouchableOpacity onPress={() => signUp()} style={styles.ButtonContainer}>
//           <Text style={styles.ButtonText}>SIGN IN WITH APPLE</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => signUp()} style={styles.ButtonContainer}>
//           <Text style={styles.ButtonText}>SIGN IN WITH FACEBOOK</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.push("PhoneSignIn")} style={styles.ButtonContainer}>
//           <Text style={styles.ButtonText}>SIGN IN WITH PHONE NUMBER</Text>
//         </TouchableOpacity>

//         <Text style={styles.text}>Trouble Signing In?</Text>
//       </ScreenContainer>
//   );
// }

export const SignOut = () => {
  return (
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Text style={styles.text}>SignOut</Text>
        <SignInButton title="Sign Out" onPress={() => signUp()} />
      </ScreenContainer>

  );
};

export const Loading = () => {
  return (
      <ScreenContainer>
        <LinearGradient
          // Background Linear Gradient
          colors={["#FA89A7", "#ED5DBB"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.background}
        />
        <Image
        style={styles.image}
        source={require('../../assets/Icons/name.png')}
        resizeMode="contain"
       />
      </ScreenContainer>
  );
};

export const Profile = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Home = () => {
  return (
    <ScreenContainer>
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
};
