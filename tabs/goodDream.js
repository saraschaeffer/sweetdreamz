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

    const pieData = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    const areaData = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    const barData = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    const stackedAreaData = [
      {
          month: new Date(2021, 0, 1),
          'Blair Waldorf': 3840,
          'Seth Cohen': 1920,
          'Hayley James Scott': 960,
          'Spencer Hastings': 400,
      },
      {
          month: new Date(2021, 1, 1),
          'Blair Waldorf': 1600,
          'Seth Cohen': 1440,
          'Hayley James Scott': 960,
          'Spencer Hastings': 400,
      }
  ];

        const colors = ['#89CFF0', '#0096FF', '#0F52BA', '#0818A8']
        const keys = ['Blair Waldorf', 'Seth Cohen', 'Hayley James Scott', 'Spencer Hastings']
        // const svgs = [
        //     { onPress: () => console.log('apples') },
        //     { onPress: () => console.log('bananas') },
        //     { onPress: () => console.log('cherries') },
        //     { onPress: () => console.log('dates') },
        // ]

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgb(134, 65, 244)'}
            fill={'none'}
        />
    );

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
            </LinearGradient>
        </Defs>
    )

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const viewedPieData = pieData
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }))

    return (
      <SafeAreaView>
          <AreaChart
            style={{ height: 200 }}
            data={areaData}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
          >
            <Grid/>
            <Line/>
          </AreaChart>
          {/* <PieChart
            style={ { height: 200 } }
            data={ viewedPieData }
          /> */}
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
          <Text>Who You Dream About</Text>
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

  export default GoodDream

