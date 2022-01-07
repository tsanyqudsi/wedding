import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Beranda from '../../page/Beranda';
import Inspirasi from '../../page/Inspirasi';
import Profil from '../../page/Profil';


const Tab = createBottomTabNavigator();
const TabBottom = () => {
  return (
  <Tab.Navigator tabBarOptions={{showLabel: false}}>
    <Tab.Screen 
      name="Beranda" 
      component={Beranda}
      options={{
        headerShown: false.valueOf (),
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome5 name="home" size={24} color={focused ? "#EF7878" : '#FFBFBF'} />
            <Text style={{color: focused ? '#EF7878' : '#FFBFBF', fontSize: 12 }}>Beranda</Text>
          </View>
        )
      }}
    />
    <Tab.Screen name="Inspirasi" component={Inspirasi} 
      options={{
        headerShown: false.valueOf (),
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
            <AntDesign name="heart" size={24} color={focused ? "#EF7878" : '#FFBFBF'} />
            <Text style={{color: focused ? '#EF7878' : '#FFBFBF', fontSize: 12 }}>Inspirasi</Text>
          </View>
        )
      }}
    />
    <Tab.Screen name="Profil" component={Profil} 
      options={{
        headerShown: false.valueOf (),
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
            <FontAwesome5 name="user-alt" size={24} color={focused ? "#EF7878" : '#FFBFBF'} />
            <Text style={{color: focused ? '#EF7878' : '#FFBFBF', fontSize: 12}}>Profil</Text>
          </View>
        )
      }}
    />
  </Tab.Navigator>
  )
}

export default TabBottom
