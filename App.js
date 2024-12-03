import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Dashboard,
    Home,
    OngProfile,
    Ongs,
    Denuncia,
    Message,
    MessageUser,
    Donate,
    Chat,
    UserProfile,
    About
} from './src/screens'; // Verifique se 'Denuncia' está exportado corretamente aqui

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="OngProfile" component={OngProfile} />
                    <   Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScreen}
                    />
                    <Stack.Screen name="Ongs" component={Ongs} />
                    <Stack.Screen name="Message" component={Message} />
                    <Stack.Screen name="MessageUser" component={MessageUser} />
                    <Stack.Screen name="Donate" component={Donate} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="Denuncia" component={Denuncia} />
                    <Stack.Screen name="UserProfile" component={UserProfile} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
