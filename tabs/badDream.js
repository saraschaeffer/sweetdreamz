import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import ReactWordcloud from 'react-wordcloud';
import { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { AreaChart, Grid, PieChart, BarChart, StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

class BadDream extends React.PureComponent {

  render() {

    const barData = [2, 1, 3, 1, 6, 7, 5, 8, 5, 3, 3, 2];
    const stackedAreaData = [
      {
          month: 'January',
          'Blair Waldorf': 3840,
          'Seth Cohen': 1920,
          'Hayley James Scott': 960,
          'Spencer Hastings': 400,
      },
      {
          month: 'February',
          'Blair Waldorf': 1600,
          'Seth Cohen': 1440,
          'Hayley James Scott': 960,
          'Spencer Hastings': 400,
      },
      {
        month: 'March',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'April',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'May',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'June',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'July',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'August',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'September',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'October',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'November',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      },
      {
        month: 'December',
        'Blair Waldorf': 1600,
        'Seth Cohen': 1440,
        'Hayley James Scott': 960,
        'Spencer Hastings': 400,
      }
  ];

        const colors = ['#89CFF0', '#0096FF', '#0F52BA', '#0818A8']
        const keys = ['Blair Waldorf', 'Seth Cohen', 'Hayley James Scott', 'Spencer Hastings']


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
      </SafeAreaView>
      )
    }
  }

  export default BadDream

