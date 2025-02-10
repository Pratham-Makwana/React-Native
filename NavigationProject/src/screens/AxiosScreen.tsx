import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { FlatList } from 'react-native-gesture-handler'


interface POST {
    id : string,
    title : string
}

const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
})


api.interceptors.request.use(config => {
    // console.log('==> Request:',config);
    
    return config
})

api.interceptors.response.use(response => {
    // console.log('==> Response', response);
    
    return response
})
const AxiosScreen = () => {
    const [loading,setLoading] = useState(false)
    const [data , setData] = useState<POST[]>([])

    const fetchListOfPost = async () => {
        try {
            setLoading(true)
            const response = await api.get<POST[]>('/posts');
            if(response){
                setData(response.data)
                setLoading(false)
            }else {
                setData([])
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
     const renderItem = ({item}: {item: POST}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    

      useEffect(() => {
        fetchListOfPost();
      }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>AxiosScreen</Text>
      {loading ? (
              <ActivityIndicator size={'large'} />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            )}
    </View>
  )
}

export default AxiosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      header: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#ccc',
      },
      title: {
        fontSize: 16,
        fontWeight: '600',
      },
})