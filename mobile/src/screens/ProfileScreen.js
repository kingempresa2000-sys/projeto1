import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { profile } = useSelector(state => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.content}>
        {profile?.name || 'Nome do usuário'}
      </Text>
      <Text style={styles.description}>
        Email: {profile?.email || 'email@example.com'}
      </Text>
      <Text style={styles.description}>
        Telefone: {profile?.phone || '(XX) XXXXX-XXXX'}
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
    marginBottom: 5,
  },
});

export default ProfileScreen;
