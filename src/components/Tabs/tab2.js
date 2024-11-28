import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab2 = ({ activeTab, setActiveTab, setCurrentScreen }) => {
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case 'Tab1':
        setCurrentScreen('Home');
        break;
      case 'Tab2':
        setCurrentScreen('Task');
        break;
      case 'Tab3':
        setCurrentScreen('Profile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.fixedBottomTabs}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Tab1')}
      >
        <Ionicons
          name="home-outline"
          size={25}
          color={activeTab === 'Tab1' ? '#4676c7' : '#8e8e8e'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Tab2')}
      >
        <Ionicons
          name="document-text-outline"
          size={25}
          color={activeTab === 'Tab2' ? '#4676c7' : '#8e8e8e'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Tab3')}
      >
        <Ionicons
          name="person-outline"
          size={25}
          color={activeTab === 'Tab3' ? '#4676c7' : '#8e8e8e'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedBottomTabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    zIndex: 999,
  },
  tabItem: {
    alignItems: 'center',
  },
});

export default Tab2;