import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DreamHome from './screens/howWasYourDreamHome';
import DreamData from './screens/dreamData';
import TellMeAboutYourDream from './screens/tellMeAboutYourDream';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sweet Dreamz" component={DreamHome} style={styles.container} />
        <Stack.Screen name="Dream Data" component={DreamData} style={styles.container} />
        <Stack.Screen name="Tell Me" component={TellMeAboutYourDream} style={styles.container} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#1434A4'
  }
});
