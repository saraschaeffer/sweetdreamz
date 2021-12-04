import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [dreamReviews, setDreamReviews] = useState([
    { review: 'Great!', key: '1' },
    { review: 'Okay!', key: '2' },
    { review: 'Not great!', key: '3'}
  ])
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#89CFF0', '#0096FF', 'transparent']}
        style={styles.container}
      />
      <Text style={styles.howdidyousleeptext}>How was your dream?</Text>
      <ScrollView>
        { dreamReviews.map(dreamReview => (
          <TouchableOpacity style={styles.button} key={dreamReview.key}>
          <LinearGradient
            colors={['#00FFFF', '#ADD8E6']}
            style={styles.button}>
              <Text styles={styles.btnText}>{dreamReview.review}</Text>
          </LinearGradient>
        </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.button}>
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
      </TouchableOpacity> */}
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
