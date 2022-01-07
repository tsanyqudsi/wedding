import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


const Beranda = ({ navigation }) => {
  const [image, setImage] = useState ([
    require('../../../assets/foto/iklan1.jpeg'),
    require('../../../assets/foto/iklan2.jpeg'),
    require('../../../assets/foto/iklan3.jpeg'),
    require('../../../assets/foto/iklan4.jpeg'),
    require('../../../assets/foto/iklan5.jpeg')
  ])
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop: 40}}>
        <View style={{flex: 1, flexDirection:'row', backgroundColor:'#EF7878', borderRadius: 10, marginLeft: 25, marginRight: 100}}>
          <View style={{marginTop: 4, marginLeft: 10}}>
            <Ionicons name="search" size={24} color="white" />
          </View>
          <TextInput placeholder='Cari' placeholderTextColor={'white'} style={{height: 35, marginLeft: 10}} />
        </View>
        <View style={{marginRight: 10, marginTop: 3}}>
          <FontAwesome5 name="shopping-cart" size={24} color="#EF7878" />
        </View>
        <View style={{marginRight: 10, marginTop: 3}}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#EF7878" />
        </View>
      </View>

    <SliderBox
      images={image}
      sliderBoxHeight={200}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      paginationBoxVerticalPadding={20}
      dotColor="#EF7878"
      inactiveDotColor="#FFBFBF"
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 20}}            
      paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10}}
    />

    <View style={{backgroundColor:'#FFBFBF', marginTop: 30, marginBottom: 20 , paddingVertical: 5}}>
      <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 22, paddingLeft: 25}}>Kategori</Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical: 10}}>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('MUA')} style={{alignItems:'center'}}>
          <Image source={require('../../../assets/foto/mua.png')} style={{height: 56, width: 56}} />
          <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>MUA</Text>
        </TouchableOpacity>
      </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Dekorasi')} style={{alignItems:'center'}}>
            <Image source={require('../../../assets/foto/dekorasi.png')} style={{height: 56, width: 56}} />
            <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Dekorasi</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Henna')} style={{alignItems:'center'}}>
            <Image source={require('../../../assets/foto/hena.png')} style={{height: 56, width: 56}} />
            <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Henna</Text>
          </TouchableOpacity>
        </View>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginVertical: 15, paddingRight: 3}}>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Fotografi')} style={{alignItems:'center'}}>
          <Image source={require('../../../assets/foto/kamera.png')} style={{height: 56, width: 56}} />
          <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Fotografi</Text>
        </TouchableOpacity>
      </View>      
      <View style={{alignItems:'center', paddingRight: 8}}>
        <TouchableOpacity onPress={() => navigation.navigate('Bouquet')} style={{alignItems:'center'}}>
          <Image source={require('../../../assets/foto/buket.png')} style={{height: 56, width: 56}} />
          <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Bouquet</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'center', paddingRight: 7}}>
        <TouchableOpacity onPress={() => navigation.navigate('Paket')} style={{alignItems:'center'}}>
          <Image source={require('../../../assets/foto/paket.png')} style={{height: 56, width: 56}} />
          <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Paket</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{alignItems:'center', paddingTop: 15}}>
      <TouchableOpacity onPress={() => navigation.navigate('Kalender')} style={{alignItems:'center'}}>
        <Image source={require('../../../assets/foto/kalender.png')} style={{height: 56, width: 56}} />
        <Text style={{color:'#EF7878', fontWeight:'bold', fontSize: 18}}>Kalender</Text>
      </TouchableOpacity>
    </View>

    <StatusBar />
  </View>
  );    
}    

export default Beranda

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
});