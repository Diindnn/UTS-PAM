import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '7eb39829f38e30baf56c8d1bb8fe05ad',
        language: 'en-US',
        page: 1
      }
    })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function renderMovieItem({ item }) {
    return (
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate('Detail', { id: item.id })}
      >
        <View style={{padding: 20, backgroundColor: 'black',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={{  width: '70%', height: 300 }}
          />
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
        </View>


      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: '100%', padding: 20 }}
      />
    </View>
  );
}
