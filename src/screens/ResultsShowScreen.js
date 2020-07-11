import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id=navigation.getParam('id');

  const getResult = async (id) => {
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    setResult(response.data);
  }
  useEffect(() =>{
    getResult(id);
  }, []);

  if (!result){
    return null;
  }

  return(
    <View>
      <Text>{result.name}</Text>
      <Text>Price Range: {result.currency}{result.price_range}</Text>
      <Image style={styles.thumbnail} source={{ uri: result.thumb}} />
    </View>
  );
}

const styles = StyleSheet.create({
    thumbnail: {
      height: 100
    }
  });

export default ResultsShowScreen;
