import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';
import Task from './src/pages/Task';
import Profile from './src/pages/Profile';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import PasswordRecovery from './src/pages/PasswordRecovery';
import Tab2 from './src/components/Tabs/tab2';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [activeTab, setActiveTab] = useState('Tab1');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home onLogOut={() => setCurrentScreen('Login')} />;
      case 'Task':
        return <Task onLogOut={() => setCurrentScreen('Login')} />;
      case 'Profile':
        return <Profile onLogOut={() => setCurrentScreen('Login')} />;
      case 'Login':
        return (
          <Login
            onLoginSuccess={() => setCurrentScreen('Home')}
            onNavigateToRecovery={() => setCurrentScreen('PasswordRecovery')}
            onNavigateToRegister={() => setCurrentScreen('Register')}
          />
        );
      case 'Register':
        return <Register onNavigateBack={() => setCurrentScreen('Login')} />;
      case 'PasswordRecovery':
        return (
          <PasswordRecovery onNavigateBack={() => setCurrentScreen('Login')} />
        );
      default:
        return <Login />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderScreen()}
      {currentScreen !== 'Login' &&
        currentScreen !== 'Register' &&
        currentScreen !== 'PasswordRecovery' && (
          <Tab2
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setCurrentScreen={setCurrentScreen}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;