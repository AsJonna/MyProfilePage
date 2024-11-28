import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab1 = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Rating' && styles.activeTab]}
        onPress={() => setActiveTab('Rating')}
      >
        <Text style={[styles.tabText, activeTab === 'Rating' && styles.activeTabText]}>
          Rating
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Portfolio' && styles.activeTab]}
        onPress={() => setActiveTab('Portfolio')}
      >
        <Text style={[styles.tabText, activeTab === 'Portfolio' && styles.activeTabText]}>
          Portfolio
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4676c7',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: '#4676c7',
    fontWeight: 'bold',
  },
});

export default Tab1;