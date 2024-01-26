import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const ResultShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  };

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300
  }
})