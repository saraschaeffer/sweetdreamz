import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { AreaChart, Grid, PieChart, BarChart, StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

class BadDream extends React.PureComponent {

  render() {

    const barData = [2, 1, 3, 1, 6, 7, 5, 8, 5, 3, 3, 2];
    const stackedAreaData = [
      {
          month: 'January',
          'Anxiety': 3,
          'Fear': 2,
          'Monster': 1,
          'Fire': 2,
      },
      {
          month: 'February',
          'Anxiety': 4,
          'Fear': 4,
          'Monster': 1,
          'Fire': 3,
      },
      {
        month: 'March',
        'Anxiety': 3,
        'Fear': 2,
        'Monster': 3,
        'Fire': 3,
      },
      {
        month: 'April',
        'Anxiety': 6,
        'Fear': 5,
        'Monster': 5,
        'Fire': 4,
      },
      {
        month: 'May',
        'Anxiety': 7,
        'Fear': 9,
        'Monster': 4,
        'Fire': 5,
      },
      {
        month: 'June',
        'Anxiety': 6,
        'Fear': 5,
        'Monster': 7,
        'Fire': 7,
      },
      {
        month: 'July',
        'Anxiety': 8,
        'Fear': 5,
        'Monster': 7,
        'Fire': 8,
      },
      {
        month: 'August',
        'Anxiety': 8,
        'Fear': 4,
        'Monster': 8,
        'Fire': 5,
      },
      {
        month: 'September',
        'Anxiety': 6,
        'Fear': 7,
        'Monster': 6,
        'Fire': 7,
      },
      {
        month: 'October',
        'Anxiety': 4,
        'Fear': 3,
        'Monster': 2,
        'Fire': 3,
      },
      {
        month: 'November',
        'Anxiety': 1,
        'Fear': 3,
        'Monster': 1,
        'Fire': 1,
      },
      {
        month: 'December',
        'Anxiety': 1,
        'Fear': 2,
        'Monster': 1,
        'Fire': 1,
      }
  ];

        const colors = ['#89CFF0', '#0096FF', '#0F52BA', '#0818A8']
        const keys = ['Anxiety', 'Fear', 'Monster', 'Fire']


    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
            </LinearGradient>
        </Defs>
    )

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    return (
      <SafeAreaView>
          <Text>Bad Dreams Trends Over Last Twelve Months</Text>
          <BarChart
              style={ { height: 200 } }
              data={ barData }
              contentInset={ { top: 20, bottom: 20 } }
              svg={ {
                  strokeWidth: 2,
                  fill: 'url(#gradient)',
              } }
              >
              <Grid/>
              <Gradient/>
          </BarChart>
          <Text>{
            "\n",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n",
            "\n"
          }</Text>
          <StackedAreaChart
                style={{ height: 200, paddingVertical: 16 }}
                data={stackedAreaData}
                keys={keys}
                colors={colors}
                curve={shape.curveNatural}
                showGrid={false}
            />
          <View>
            <View style={styles.anxiety} /><Text>Anxiety</Text>
            <View style={styles.fear} /><Text>Fear</Text>
            <View style={styles.monster} /><Text>Monster</Text>
            <View style={styles.fire} /><Text>Fire</Text>
          </View>
      </SafeAreaView>
      )
    }
  }

  const styles = StyleSheet.create({
    anxiety: {
      width: 20,
      height: 20,
      backgroundColor: "#89CFF0",
      alignItems: 'center'
    },
    fear: {
      width: 20,
      height: 20,
      backgroundColor: "#0096FF",
      alignItems: 'center'
    },
    monster: {
      width: 20,
      height: 20,
      backgroundColor: "#0F52BA",
      alignItems: 'center'
    },
    fire: {
      width: 20,
      height: 20,
      backgroundColor: "#0818A8",
      alignItems: 'center'
    },
  });

  export default BadDream

