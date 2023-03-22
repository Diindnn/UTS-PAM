// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet,  Image } from 'react-native';

export default function ProfileScreen() {
  return (
     <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../assets/profile.jpeg')} style={styles.profilePic} />
      <Text style={styles.name}>Dini Safitri</Text>
      <Text style={styles.nim}>120140165</Text>
      
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>ABOUT ME</Text>
      <Text style={styles.aboutMe}>Saya adalah seorang mahasiswa semester 6 prodi Teknik Informatika di Institut Teknologi Sumatera. Aplikasi ini dibuat untuk memenuhi tugas UTS mata kuliah Pengembangan Aplikasi Mobile RB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  header: {
    alignItems: 'center'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  nim: {
    fontSize: 16,
    marginBottom: 5
  },
  prodi: {
    fontSize: 16,
    marginBottom: 5
  },
  kelas: {
    fontSize: 16,
    marginBottom: 10
  },
  content: {
    marginTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutMe: {
    fontSize: 16
  }
});