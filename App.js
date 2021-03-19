import React from 'react';
import Tabs from './src/components/Tabs';

import { StyleSheet } from "react-native";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./context";

import { SignIn, Profile, Home, Loading} from "./src/screens/SignInScreen";
import { PhoneSignIn, VerificationCode, FullName } from "./src/screens/PhoneSignIn";

const theme = {
  colors: {
    primary: 'white',
  },
  Button: {
    titleStyle: {
      width: "80%",
    },
    containerStyle: {
      marginVertical: 10,
      borderColor: "white",
      borderWidth: 1,
      border: "round",
    },
  },
};

{
  /* Home Screen*/
}
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

{
  /* Profile Page Screen*/
}
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);


// TABS COMPONENT

// const Tabs = createBottomTabNavigator();
// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Home" component={HomeStackScreen} />
//     <Tabs.Screen name="Profile" component={ProfileStackScreen} />
//   </Tabs.Navigator>
// );


// Auth Screen

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    {/* <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    /> */}
   
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="PhoneSignIn"
      component={PhoneSignIn}
      options={{ title: "Phone Sign In" }}
    />
    <AuthStack.Screen
      name="VerificationCode"
      component={VerificationCode}
      options={{ title: "Verification Code" }}
    />
    <AuthStack.Screen
      name="FullName"
      component={FullName}
      options={{ title: "Full Name"}}
    />
  </AuthStack.Navigator>
);

{
  /* MAIN STACK*/
}
{
  /* The root stack is where you switch from login to profile TABS*/
}
const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={Tabs}
        options={{ animationsEnabled: false }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{ animationsEnabled: false }}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <ThemeProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

