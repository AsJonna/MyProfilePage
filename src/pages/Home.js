import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, Modal, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const tasks = [
  {
    id: 1,
    name: 'Elsa Frozen',
    description:
      'I need help with tutoring in subjects like Computer Programming and Information Management. If you have a background in academic tutoring, I’d love to hear from you!',
    amount: 'Php 100',
  },
  {
    id: 2,
    name: 'Maria Clara',
    description:
      'I have some printing and copying tasks that need to be completed. If you have access to printing facilities and can help, please let me know.',
    amount: 'Php 50',
  },
  {
    id: 3,
    name: 'Elowen Sage',
    description:
      'I’m planning an event and could use some extra hands for setup, coordination, and cleanup. If you’re organized and enjoy working at events, I’d appreciate your help!',
    amount: 'Php 150',
  },
  {
    id: 4,
    name: 'Florentina Cruz',
    description:
      'I need assistance with picking up and delivering items, like groceries or packages. A reliable vehicle is a must!',
    amount: 'Php 125',
  },
];

const Home = ({onLogOut}) => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.brandText}>QuestBoard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDrawer}>
          <Feather name="more-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Hello Quest Taker Jonna</Text>
      <Text style={styles.heading}>Find Tasks</Text>

      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="gray" />
        <TextInput style={styles.searchInput} placeholder="Search for tasks..." />
      </View>

      <View style={styles.categories}>
        {['All', 'Event Assistant', 'Printing', 'Pick-up & Delivery'].map(
          (category, index) => (
            <View
              key={index}
              style={[
                styles.categoryButton,
                category === 'All' && styles.allCategoryButton,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === 'All' && styles.allCategoryText,
                ]}
              >
                {category}
              </Text>
            </View>
          )
        )}
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Image
                source={require('../assets/pic2.png')}
                style={styles.profilePhoto}
              />
              <Text style={styles.taskName}>{item.name}</Text>
            </View>
            <Text style={styles.taskDescription} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.taskAmount}>{item.amount}</Text>
          </View>
        )}
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#09409c',
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    marginTop: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  allCategoryButton: {
    backgroundColor: 'black',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  allCategoryText: {
    color: 'white',
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePhoto: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  taskAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4676c7',
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

export default Home;