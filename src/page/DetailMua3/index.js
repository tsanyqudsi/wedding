import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const DetailMua3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../../assets/foto/mua3.jpeg')} style={styles.image} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text1}>MUA Solo Putri Hijab</Text>
                <Text style={styles.text}>By Mariezkha makeup</Text>
                <Text style={styles.text}>IDR 2.800.000</Text>
                <Text style={styles.text1}>Deskripsi</Text>
                <Text style={styles.text}>> 1 Set make up akad nikah</Text>
                <Text style={styles.text}>> 1 Set sewa baju pengantin</Text>
                <Text style={styles.text}>> Melati non adat</Text>
                <Text style={styles.text}>> Soflen</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>Beli Sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailMua3

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    containerImage: {
        width: 300, 
        height: 320, 
        borderRadius: 10, 
        backgroundColor:'#FFBFBF', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 10, 
        marginHorizontal: 30
    },
    image: {
        width: 250, 
        height: 300, 
        borderRadius: 10
    },
    containerText: {
        marginLeft: 55
    },
    text: {
        fontSize: 18
    },
    text1: {
        marginTop: 20, 
        fontSize: 18
    },
    containerButton: {
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 20
    },
    button: {
        width: 180, 
        height: 50, 
        borderRadius: 10, 
        backgroundColor:'#FFBFBF', 
        justifyContent:'center',
         alignItems:'center'
    },
    text2: {
        fontSize: 24
    }
});
