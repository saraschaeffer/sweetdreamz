import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function tellMeAboutYourDream() {

  return (
    <SafeAreaView>
      <TextInput
        placeholder='dream data'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6
  }
})