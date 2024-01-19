import React from 'react'
import CurrentWeather from '../pages/CurrentWeather'
import UpcomingWeather from '../pages/UpcomingWeather'
import City from '../pages/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  console.log(weather)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'darkgreen',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white'
        },
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'black'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={focused ? 30 : 25}
              color={focused ? 'darkgreen' : 'darkgrey'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={focused ? 30 : 25}
              color={focused ? 'darkgreen' : 'darkgrey'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={focused ? 30 : 25}
              color={focused ? 'darkgreen' : 'darkgrey'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
