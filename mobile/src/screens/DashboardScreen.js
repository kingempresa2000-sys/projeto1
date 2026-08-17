import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, FAB } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location';

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Bem-vindo, {user?.name || 'Usuário'}!
      </Text>
      <Text style={styles.subtitle}>Transporte de Moto</Text>

      <View style={styles.content}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Profile')}
          style={styles.button}
        >
          Meu Perfil
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('RideDetails', { rideId: 'new' })}
          style={styles.button}
        >
          Solicitar Viagem
        </Button>
      </View>

      <FAB
        icon="map"
        onPress={() => navigation.navigate('RideDetails')}
        style={styles.fab}
        label="Mapa"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default DashboardScreen;
