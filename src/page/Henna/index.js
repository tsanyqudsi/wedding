import React from 'react'
import { View, Text } from 'react-native'
import { useAtomValue } from 'jotai/utils'
import { graphQLAtom } from '../../store/app'
import { query } from '../../libs/request'
import { getProducts } from '../../gql/getProducts'

export default function Henna() {
  const data = useAtomValue(graphQLAtom)

  React.useEffect(()=> {
    query(getProducts)
  },[])

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Henna</Text>
          
      </View>
  )
}


