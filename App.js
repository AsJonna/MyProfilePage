import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import PasswordRecovery from './src/pages/PasswordRecovery';
import Profile from './src/pages/Profile';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'Login' && (
        <Login 
          onLoginSuccess={() => navigateTo('Profile')} 
          onNavigateToRecovery={() => navigateTo('PasswordRecovery')} 
          onNavigateToRegister={() => navigateTo('Register')}
        />
      )}
      {currentScreen === 'Register' && <Register onNavigateBack={() => navigateTo('Login')} />}
      {currentScreen === 'PasswordRecovery' && <PasswordRecovery onNavigateBack={() => navigateTo('Login')} />}
      {currentScreen === 'Profile' && <Profile onLogOut={() => navigateTo('Login')} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;