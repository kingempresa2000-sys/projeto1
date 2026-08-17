import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const RideDetailsScreen = ({ route }) => {
  const { rideId } = route?.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Viagem</Text>
      <Text style={styles.content}>
        Viagem #{rideId || 'Nova'}
      </Text>
      <Text style={styles.description}>
        Mapa e detalhes da viagem serão exibidos aqui
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default RideDetailsScreen;
