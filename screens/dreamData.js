import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GoodDream from '../tabs/goodDream';
import BadDream from '../tabs/badDream';

export default function DreamData() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Good Dreams" component={GoodDream} />
      <Tab.Screen name="Bad Dreams" component={BadDream} />
    </Tab.Navigator>
  )
}

