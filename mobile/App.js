import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import store from './src/store';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import RideDetailsScreen from './src/screens/RideDetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF6B35',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'Criar Conta' }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: 'Projeto1 - Transporte de Moto' }}
            />
            <Stack.Screen
              name="RideDetails"
              component={RideDetailsScreen}
              options={{ title: 'Detalhes da Viagem' }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: 'Meu Perfil' }}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{ title: 'Chat' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
