import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';
import { Feather } from '@expo/vector-icons';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <Avatar width={30} height={30} />
          <Text style={[styles.profileTitle, isDarkMode && styles.darkText]}>My Profile</Text>
        </View>
        <Feather name="bell" size={24} color={isDarkMode ? 'white' : 'black'} />
      </View>

      <View style={styles.avatarContainer}>
        <Avatar width={125} height={125} />
      </View>

      <NameTitle name="Jonnavien Grace Asuelo" description="IT3R10" isDarkMode={isDarkMode} />

      <View style={styles.actionRow}>
        <View style={[styles.iconCircle, { backgroundColor: '#FFEFD5' }]}>
          <Feather name="user" size={24} color="orange" />
        </View>
        <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Manage user</Text>
        <Feather name="chevron-right" size={24} color={isDarkMode ? 'white' : 'gray'} />
      </View>

      <View style={styles.actionRow}>
        <View style={[styles.iconCircle, { backgroundColor: '#E0FFD1' }]}>
          <Feather name="message-circle" size={24} color="green" />
        </View>
        <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Messages</Text>
        <Feather name="chevron-right" size={24} color={isDarkMode ? 'white' : 'gray'} />
      </View>

      <View style={styles.actionRow}>
        <View style={[styles.iconCircle, { backgroundColor: '#DDE9FF' }]}>
          <Feather name="settings" size={24} color="blue" />
        </View>
        <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Settings</Text>
        <Feather name="chevron-right" size={24} color={isDarkMode ? 'white' : 'gray'} />
      </View>

      <View style={styles.actionRow}>
        <View style={[styles.iconCircle, { backgroundColor: '#E0E0E0' }]}>
          <Feather name="moon" size={24} color="gray" />
        </View>
        <Text style={[styles.actionText, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#4676c7' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionText: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    color: '#000',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Profile;