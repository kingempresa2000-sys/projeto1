import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ChatScreen = ({ route }) => {
  const { rideId } = route?.params || {};
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, { id: Date.now(), text: messageText, sender: 'user' }]);
      setMessageText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat - Viagem #{rideId}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.text}</Text>
        )}
        style={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          label="Mensagem"
          value={messageText}
          onChangeText={setMessageText}
          mode="outlined"
          style={styles.input}
          placeholder="Digite sua mensagem..."
        />
        <Button
          mode="contained"
          onPress={handleSendMessage}
          style={styles.button}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  message: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
});

export default ChatScreen;
