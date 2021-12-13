import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function tellMeAboutYourDream({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#89CFF0', '#0047AB']}
        style={styles.container}
      />
      <Text style={styles.howdidyousleeptext}>What was your dream like?</Text>
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.shorterTextInput}
            placeholder="What words come to mind?"
            maxLength={20}
          />
          <TextInput
            style={styles.shorterTextInput}
            placeholder="Anyone you recognize?"
            maxLength={20}
          />
          <TextInput
            style={styles.shorterTextInput}
            placeholder="Is this a recurring dream?"
            maxLength={20}
          />
          <TextInput
            style={styles.longerTextInput}
            placeholder="What happened in the dream?"
            maxLength={250}
          />
          <TextInput
            style={styles.longerTextInput}
            placeholder="Where was the dream?"
            maxLength={250}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('Dream Data')}
          >
            <LinearGradient
            colors={['#4682B4', '#00FFFF', '#ADD8E6']}
            style={styles.submitButton}>
              <Text styles={styles.submitBtnText}>Submit</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>
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
    fontSize: 33,
    textDecorationColor: '#0818A8'
  },
  inputContainer: {
    paddingTop: 15
  },
  shorterTextInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  longerTextInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 150,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  submitButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
  },
  submitBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});