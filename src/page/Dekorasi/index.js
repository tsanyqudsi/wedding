import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'


const Dekorasi = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor:'white' }}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('DetailDekorasi1')} style={{marginVertical: 30, marginLeft: 30, marginRight: 80, backgroundColor:'#FFBFBF', borderRadius: 10}}>
                    <Image source={require('../../../assets/foto/dekorasi1.jpeg')} style={{width: 250, height: 250, borderRadius: 10}} />
                    <Text style={{fontSize: 16, marginTop: 10, paddingLeft: 10}}>Dekorasi Klasik</Text>
                    <Text style={{fontSize: 16, marginBottom: 10, paddingLeft: 10}}>By Romelan Cipta Pesona</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DetailDekorasi2')} style={{marginVertical: 30, marginLeft: 30, marginRight: 80, backgroundColor:'#FFBFBF', borderRadius: 10}}>
                    <Image source={require('../../../assets/foto/dekorasi2.jpeg')} style={{width: 250, height: 250, borderRadius: 10}} />
                    <Text style={{fontSize: 16, marginTop: 10, paddingLeft: 10}}>Dekorasi Minimalis</Text>
                    <Text style={{fontSize: 16, marginBottom: 10, paddingLeft: 10}}>By Romelan Cipta Pesona</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Dekorasi
