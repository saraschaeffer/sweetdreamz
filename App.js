import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#89CFF0', '#0096FF', 'transparent']}
        style={styles.container}
      />
      <Text style={styles.howdidyousleeptext}>How was your dream?</Text>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#00FFFF', '#ADD8E6']}
          style={styles.button}>
            <Text styles={styles.btnText}>Great!</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#4169E1', '#1F51FF']}
          style={styles.button}>
            <Text styles={styles.btnText}>Okay!</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#0437F2', '#0818A8']}
          style={styles.button}>
            <Text styles={styles.btnText}>Not great!</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  howdidyousleeptext: {
    flex: 1,
    fontFamily: 'Papyrus',
    fontSize: 40
  },
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
