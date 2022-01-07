import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import { Zocial, FontAwesome5, Fontisto, FontAwesome } from '@expo/vector-icons';

const Daftar = ({ navigation }) => {
  return (
    <View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>DAFTAR</Text>
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 40, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
        <FontAwesome5 name="user-alt" size={24} color="grey" />
        </View>
        <TextInput placeholder='Nama lengkap' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
          <Zocial name="email" size={24} color="grey" />
        </View>
        <TextInput placeholder='Alamat email' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 12}}>
          <Fontisto name="locked" size={24} color="grey" />
        </View>
        <TextInput placeholder='Kata sandi' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 12}}>
          <Fontisto name="locked" size={24} color="grey" />
        </View>
        <TextInput placeholder='Konfirmasi kata sandi' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
          <FontAwesome5 name="phone-square-alt" size={24} color="grey" />
        </View>
        <TextInput placeholder='No.Handphone' style={{height: 48, marginLeft: 15}} />
      </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 8, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
          <FontAwesome name="address-book" size={24} color="grey" />
        </View>
        <TextInput placeholder='Alamat lengkap' style={{height: 48, marginLeft: 15}} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainApp')} style={{backgroundColor:'#EF7878', marginTop: 20, marginHorizontal: 15, height: 46, borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight:'bold', color:'white'}}>Masuk</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row', justifyContent:'center', marginTop: 20}}>
          <Text style={{fontSize: 20, color:'black'}}>Sudah punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'#EF7878', marginLeft: 5}}>Masuk</Text>
          </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  )
}

export default Daftar

const styles = StyleSheet.create({})
