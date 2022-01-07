import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Zocial } from '@expo/vector-icons';

const KataSandi1 = ({ navigation }) => {
    return (
    <View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop: 200}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Buat Kata Sandi Baru</Text>
        </View>
      <View style={{flexDirection:'row', backgroundColor:'#C8C8C6', marginTop: 40, marginHorizontal: 15, height: 46, borderRadius: 10}}>
        <View style={{marginTop: 9, marginLeft: 10}}>
          <Zocial name="email" size={24} color="grey" />
        </View>
        <TextInput placeholder='Alamat email' style={{height: 48, marginLeft: 15}} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('KataSandi2')} style={{backgroundColor:'#EF7878', marginTop: 20, marginHorizontal: 15, height: 46, borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight:'bold', color:'white'}}>Lanjutkan</Text>
      </TouchableOpacity>
    </View>
    )
}

export default KataSandi1
