import React from 'react'
import { View, Text } from 'react-native'
import { useQuery, gql } from '@apollo/client'

const GET_PRODUCT = gql`
Query {
    produks {
      id_produk
      nama_produk
      deskripsi
      harga
      stok
      gambar
      kategoriId_kategori {
        kategori
      }
    }
  }`;

export default function Henna() {
    const {loading, error, data} = useQuery(GET_PRODUCT,{
  id: id_produk //Where id is the product id
  })
    console.log(error,data)
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>An Error Occurred </h1>
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Henna</Text>
        </View>
    )
}


