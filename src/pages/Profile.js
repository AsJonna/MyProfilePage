import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avatar';
import Tab1 from '../components/Tabs/tab1';
import Tab2 from '../components/Tabs/tab2';

const Profile = ({ onLogOut }) => {
  const [activeTab, setActiveTab] = useState('Rating');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerOffset] = useState(new Animated.Value(300));

  const feedbackData = [
    {
      id: '1',
      name: 'Joy R',
      date: '15 Oct 2024',
      feedback:
        'Jonna handled my printing errands flawlessly. She was punctual and followed instructions perfectly.',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Maria C',
      date: '20 Sept 2024',
      feedback: 'For a pick-up and delivery task, she was great!',
      rating: 4,
    },
    {
      id: '3',
      name: 'Carlos D',
      date: '03 Aug 2024',
      feedback: 'Excellent service. Very professional and quick turnaround time!',
      rating: 5,
    },
  ];

  const portfolioData = [
    { id: '1', image: require('../assets/photo6.jpg') },
    { id: '2', image: require('../assets/photo5.jpg') },
    { id: '3', image: require('../assets/photo4.jpg') },
    { id: '4', image: require('../assets/photo3.jpg') },
    { id: '5', image: require('../assets/photo2.jpg') },
    { id: '6', image: require('../assets/photo1.jpg') },
  ];
  
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

      <View style={styles.profileRow}>
        <Avatar width={100} height={100} />
        <View style={styles.profileInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Jonnavien Asuelo</Text>
            <MaterialIcons
              name="verified"
              size={20}
              color="#4676c7"
              style={styles.verifiedIcon}
            />
          </View>
          <Text style={styles.description}>Quest Taker</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValueBlue}>52</Text>
          <Text style={styles.statLabel}>QUEST DONE</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValueBlue}>B</Text>
          <Text style={styles.statLabel}>RANK</Text>
        </View>
      </View>

      <Tab1 activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Rating' && (
        <View style={styles.ratingSection}>
          <Text style={styles.ratingValue}>4.5</Text>
          <View style={styles.starContainer}>
            {[...Array(4)].map((_, index) => (
              <Ionicons key={index} name="star" size={20} color="#FFD700" />
            ))}
            <Ionicons name="star-half" size={20} color="#FFD700" />
          </View>
        </View>
      )}

      {activeTab === 'Rating' && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>Client Feedback</Text>
          <FlatList
            data={feedbackData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.feedbackItem}>
                <View style={styles.feedbackRow}>
                  <Image
                    source={require('../assets/pic2.png')}
                    style={styles.feedbackAvatar}
                  />
                  <View style={styles.feedbackHeader}>
                    <Text style={styles.feedbackName}>{item.name}</Text>
                    <View style={styles.feedbackDetails}>
                      <Text style={styles.feedbackDate}>{item.date}</Text>
                      <View style={styles.starContainer}>
                        {[...Array(Math.floor(item.rating))].map((_, index) => (
                          <Ionicons key={index} name="star" size={16} color="#FFD700" />
                        ))}
                        {item.rating % 1 !== 0 && (
                          <Ionicons name="star-half" size={16} color="#FFD700" />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.feedbackText}>{item.feedback}</Text>
              </View>
            )}
          />
        </View>
      )}

      {activeTab === 'Portfolio' && (
        <View style={styles.portfolioContainer}>
          <FlatList
            data={portfolioData}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.portfolioItem}>
                <Image source={item.image} style={styles.portfolioImage} />
              </View>
            )}
          />
        </View>
      )}

      <Tab2 activeTab={activeTab} setActiveTab={setActiveTab} />

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
    paddingBottom: 80,
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
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  profileInfo: {
    marginLeft: 15,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statValueBlue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4676c7',
  },
  statLabel: {
    fontSize: 12,
    color: '#000',
  },
  feedbackContainer: {
    marginVertical: 10,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feedbackItem: {
    marginBottom: 15,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  feedbackAvatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  feedbackHeader: {
    marginLeft: 10,
    width: '85%',
  },
  feedbackName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  feedbackDate: {
    fontSize: 12,
    color: 'gray',
  },
  feedbackText: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ratingSection: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  portfolioContainer: {
    marginVertical: 20,
  },
  portfolioItem: {
    marginBottom: 10,
    marginRight: 15,
    width: '30%',
  },
  portfolioImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    resizeMode: 'cover',
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

export default Profile;