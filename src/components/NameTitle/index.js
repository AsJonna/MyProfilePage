import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameTitle = ({ name, description, isDarkMode }) => {
  return (
    <View style={styles.nameContainer}>
      <Text style={[styles.fullName, isDarkMode && styles.darkText]}>{name}</Text>
      <Text style={[styles.description, isDarkMode && styles.darkSecondaryText]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    alignItems: 'center',
    marginTop: -25, 
    marginBottom: 10,
  },
  fullName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', 
  },
  description: {
    fontSize: 18,
    color: 'gray', 
  },
  darkText: {
    color: '#fff', 
  },
  darkSecondaryText: {
    color: '#bbb', 
  },
});

export default NameTitle;
