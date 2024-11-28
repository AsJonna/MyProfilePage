import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ width = 250, height = 250 }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/avatar.png')}
        style={{ width, height, borderRadius: width / 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Avatar;