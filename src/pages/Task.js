import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Modal, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Task = ({onLogOut}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerOffset] = useState(new Animated.Value(300));

  const toggleDrawer = () => {
    if (drawerVisible) {
      Animated.timing(drawerOffset, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setDrawerVisible(false));
    } else {
      setDrawerVisible(true);
      Animated.timing(drawerOffset, {
        toValue: 0, 
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.brandText}>QuestBoard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDrawer}>
          <Feather name="more-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Maria’s Task</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.profileRow}>
          <Image
            style={styles.avatar}
            source={require('../assets/pic2.png')}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Maria Clara</Text>
            <Text style={styles.profileRole}>10m · Printing</Text>
          </View>
        </View>

        <Text style={styles.description}>
          I have some printing and copying tasks that need to be completed. If you have access to printing facilities and can help, please let me know.
        </Text>

        <Text style={styles.sectionTitle}>Skills Required:</Text>
        <Text style={styles.sectionContent}>Printing, Attention to Detail, Time Management</Text>

        <Text style={styles.sectionTitle}>Deadline:</Text>
        <Text style={styles.sectionContent}>October 04, 2024 · 1:00pm</Text>

        <Text style={styles.sectionTitle}>Payment Method:</Text>
        <Text style={styles.sectionContent}>Cash</Text>

        <Text style={styles.note}>
          Please ensure you have the necessary equipment and resources before accepting.
        </Text>

        <Text style={styles.footer}>
          If you're interested in this task, you can reach out to the client for more information.
        </Text>
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#09409c',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -45,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 14,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 12,
  },
  sectionContent: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginTop: 12,
    fontStyle: 'italic',
  },
  footer: {
    fontSize: 12,
    color: '#333',
    marginTop: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerItemText: {
    fontSize: 18,
    color: '#000',
  },
});

export default Task;