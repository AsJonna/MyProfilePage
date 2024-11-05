import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordRecovery = ({ onNavigateBack }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    console.log('Password recovery link sent to:', email);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={onNavigateBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Password Recovery</Text>
      <Text style={styles.instruction}>
        Enter your registered email address below. We’ll send you a link to reset your password.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#a9a9a9"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.recoveryButton} onPress={handleRecovery}>
        <Text style={styles.recoveryButtonText}>Send Recovery Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -60,
  },
  instruction: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#dcdcdc',
  },
  recoveryButton: {
    padding: 15,
    backgroundColor: '#4676c7',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  recoveryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PasswordRecovery;