import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function DreamHome({ navigation }) {
  const [dreamReviews, setDreamReviews] = useState([
    { review: 'Great!', key: '1' },
    { review: 'Okay!', key: '2' },
    { review: 'Not great!', key: '3'}
  ]);

  const pressHandler = (pressedReview) => {
    console.log(pressedReview);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#89CFF0', '#0047AB']}
        style={styles.container}
      />
      <Text style={styles.howdidyousleeptext}>How was your dream?</Text>
      <ScrollView>
        { dreamReviews.map(dreamReview => (
          <TouchableOpacity style={styles.button} key={dreamReview.key} review={dreamReview.review} onPress={() => navigation.navigate('Describe Your Dream')}>
          <LinearGradient
            colors={['#4682B4', '#00FFFF', '#ADD8E6']}
            style={styles.button}>
              <Text styles={styles.btnText}>{dreamReview.review}</Text>
          </LinearGradient>
        </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button} onPress={() => navigation.navigate('Dream Data')}>
          <LinearGradient
            colors={['#6495ED', '#6082B6']}
            style={styles.button}>
              <Text styles={styles.btnText}>Show Me My Dream Data</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 40,
    textDecorationColor: '#0818A8'
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
