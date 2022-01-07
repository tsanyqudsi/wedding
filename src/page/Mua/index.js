import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'


const Mua = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor:'white' }}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('DetailMua1')} style={{marginVertical: 30, marginLeft: 30, marginRight: 80, backgroundColor:'#FFBFBF', borderRadius: 10}}>
                    <Image source={require('../../../assets/foto/mua2.jpeg')} style={{width: 250, height: 250, borderRadius: 10}} />
                    <Text style={{fontSize: 16, marginTop: 10, paddingLeft: 10}}>MUA Yogya Putri</Text>
                    <Text style={{fontSize: 16, marginBottom: 10, paddingLeft: 10}}>By Mariezkha makeup</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DetailMua2')} style={{marginVertical: 30, marginLeft: 30, marginRight: 80, backgroundColor:'#FFBFBF', borderRadius: 10}}>
                    <Image source={require('../../../assets/foto/mua1.jpeg')} style={{width: 250, height: 250, borderRadius: 10}} />
                    <Text style={{fontSize: 16, marginTop: 10, paddingLeft: 10}}>MUA Sunda Siger Hijab</Text>
                    <Text style={{fontSize: 16, marginBottom: 10, paddingLeft: 10}}>By Putri Hermawan Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DetailMua3')} style={{marginVertical: 30, marginLeft: 30, marginRight: 80, backgroundColor:'#FFBFBF', borderRadius: 10}}>
                    <Image source={require('../../../assets/foto/mua3.jpeg')} style={{width: 250, height: 250, borderRadius: 10}} />
                    <Text style={{fontSize: 16, marginTop: 10, paddingLeft: 10}}>MUA Solo Putri Hijab</Text>
                    <Text style={{fontSize: 16, marginBottom: 10, paddingLeft: 10}}>By Mariezkha makeup</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Mua
