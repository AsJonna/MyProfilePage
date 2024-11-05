import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Register = ({ onNavigateBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={onNavigateBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#a9a9a9" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#a9a9a9" />
      <TextInput style={styles.input} placeholder="Create Username" placeholderTextColor="#a9a9a9" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#a9a9a9" />
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
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
  input: {
    height: 50,
    backgroundColor: '#dcdcdc',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  registerButton: {
    padding: 15,
    backgroundColor: '#4676c7',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Register;