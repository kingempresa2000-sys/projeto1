import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'passenger',
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      // TODO: Implement register logic
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        label="Nome"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Telefone"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        label="Confirmar Senha"
        value={formData.confirmPassword}
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        loading={loading}
        style={styles.button}
      >
        Registrar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
  },
});

export default RegisterScreen;
