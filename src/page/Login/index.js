import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Zocial, Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {
  return (
    <View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop: 200}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>LOGIN</Text>
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 40, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
          <Zocial name="email" size={24} color="grey" />
        </View>
        <TextInput placeholder='Alamat email' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 12}}>
          <Fontisto name="locked" size={24} color="grey" />
        </View>
        <TextInput placeholder='Kata Sandi' style={{height: 48, marginLeft: 15}} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainApp')} style={{backgroundColor:'#EF7878', marginTop: 20, marginHorizontal: 15, height: 46, borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight:'bold', color:'white'}}>Masuk</Text>
      </TouchableOpacity>

      <View style={{marginTop: 180, alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('KataSandi1')}>
          <Text style={{fontSize: 20, fontWeight:'bold', color:'#EF7878'}}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 20, color:'black'}}>Belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'#EF7878', marginLeft: 5}}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
