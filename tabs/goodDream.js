import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import ReactWordcloud from 'react-wordcloud';
import { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { AreaChart, Grid, PieChart, BarChart, StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

class GoodDream extends React.PureComponent {

  render() {

    const barData = [8, 9, 9, 7, 6, 3, 2, 1, 2, 6, 7, 8];
    const stackedAreaData = [
      {
        month: 'January',
        'Happy': 7,
        'Love': 6,
        'Safe': 8,
        'Sun': 7,
      },
      {
        month: 'February',
        'Happy': 8,
        'Love': 8,
        'Safe': 6,
        'Sun': 5,
      },
      {
        month: 'March',
        'Happy': 6,
        'Love': 7,
        'Safe': 6,
        'Sun': 4,
      },
      {
        month: 'April',
        'Happy': 5,
        'Love': 5,
        'Safe': 5,
        'Sun': 4,
      },
      {
        month: 'May',
        'Happy': 4,
        'Love': 3,
        'Safe': 4,
        'Sun': 1,
      },
      {
        month: 'June',
        'Happy': 2,
        'Love': 2,
        'Safe': 1,
        'Sun': 1,
      },
      {
        month: 'July',
        'Happy': 2,
        'Love': 1,
        'Safe': 1,
        'Sun': 1,
      },
      {
        month: 'August',
        'Happy': 1,
        'Love': 2,
        'Safe': 2,
        'Sun': 1,
      },
      {
        month: 'September',
        'Happy': 5,
        'Love': 4,
        'Safe': 4,
        'Sun': 3,
      },
      {
        month: 'October',
        'Happy': 4,
        'Love': 6,
        'Safe': 7,
        'Sun': 6,
      },
      {
        month: 'November',
        'Happy': 8,
        'Love': 7,
        'Safe': 8,
        'Sun': 8,
      },
      {
        month: 'December',
        'Happy': 8,
        'Love': 9,
        'Safe': 7,
        'Sun': 7,
      }
  ];

        const colors = ['#89CFF0', '#0096FF', '#0F52BA', '#0818A8']
        const keys = ['Happy', 'Love', 'Safe', 'Sun']


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
          <Text>Good Dreams Trends Over Last Twelve Months</Text>
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
            <View style={styles.happy} /><Text>Happy</Text>
            <View style={styles.love} /><Text>Love</Text>
            <View style={styles.safe} /><Text>Safe</Text>
            <View style={styles.sun} /><Text>Sun</Text>
          </View>
      </SafeAreaView>
      )
    }
  }

  const styles = StyleSheet.create({
    happy: {
      width: 20,
      height: 20,
      backgroundColor: "#89CFF0",
      alignItems: 'center'
    },
    love: {
      width: 20,
      height: 20,
      backgroundColor: "#0096FF",
      alignItems: 'center'
    },
    safe: {
      width: 20,
      height: 20,
      backgroundColor: "#0F52BA",
      alignItems: 'center'
    },
    sun: {
      width: 20,
      height: 20,
      backgroundColor: "#0818A8",
      alignItems: 'center'
    },
  });

  export default GoodDream

