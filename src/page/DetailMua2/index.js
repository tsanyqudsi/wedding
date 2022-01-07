import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const DetailMua2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../../assets/foto/mua1.jpeg')} style={styles.image} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text1}>MUA Sunda Siger Hijab</Text>
                <Text style={styles.text}>By Putri Hermawan Wedding</Text>
                <Text style={styles.text}>IDR 2.500.000</Text>
                <Text style={styles.text1}>Deskripsi</Text>
                <Text style={styles.text}>> 1 Set make up akad nikah</Text>
                <Text style={styles.text}>> 2 Set sewa baju pengantin</Text>
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

export default DetailMua2

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    containerImage: {
        width: 300, 
        height: 220, 
        borderRadius: 10, 
        backgroundColor:'#FFBFBF', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 50, 
        marginHorizontal: 30
    },
    image: {
        width: 250, 
        height: 200, 
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
        marginTop: 50
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
