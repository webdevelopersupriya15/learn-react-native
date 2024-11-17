import { View, Text,ScrollView } from 'react-native'
import React, { useState } from 'react'

import { useEffect } from 'react'
import axios from 'axios'

const index = () => {

  const [fetchData, setFetchData]=useState([])

  useEffect(()=>{

    const resultData=()=>{

      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
          console.log(response.data)
          setFetchData(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })

    }

    resultData()

  },[])
  return (

    <ScrollView>
      <View>
      {
        fetchData.map((item, index)=>(
          <View key={index} style={{borderWidth:1, borderColor:'black', padding:10, margin:10}}>
            <Text>{item.id}</Text>
            <Text style={{fontWeight:'bold'}}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        ))
        
      }
      </View> 
      
    </ScrollView>
  )
}

export default index
