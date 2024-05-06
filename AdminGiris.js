// AdminGiris.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminGiris = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Paneline Hoşgeldiniz!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdminGiris;
