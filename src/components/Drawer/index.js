import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';

const Drawer = ({ drawerVisible, toggleDrawer, onLogOut }) => {
  const [drawerOffset] = useState(new Animated.Value(-250));

  useEffect(() => {
    if (drawerVisible) {
      Animated.timing(drawerOffset, {
        toValue: 0,
        duration: 300, 
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(drawerOffset, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [drawerVisible, drawerOffset]);

  return (
    <>
      {drawerVisible && (
        <Modal
          transparent={true}
          animationType="none"
          visible={drawerVisible}
          onRequestClose={toggleDrawer}
        >
          <TouchableWithoutFeedback onPress={toggleDrawer}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[styles.drawer, { transform: [{ translateX: drawerOffset }] }]}
          >
            <TouchableOpacity style={styles.drawerItem} onPress={() => console.log('Messages')}>
              <Text style={styles.drawerItemText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => console.log('Settings')}>
              <Text style={styles.drawerItemText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={onLogOut}>
              <Text style={styles.drawerItemText}>Logout</Text>
            </TouchableOpacity>
          </Animated.View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    padding: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Drawer;