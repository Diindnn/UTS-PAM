import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';

export default function DetailScreen({ route }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}`, {
      params: {
        api_key: '7eb39829f38e30baf56c8d1bb8fe05ad',
        language: 'en-US'
      }
    })
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  if (!movie) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{ width: '85%', height: 450 }}
      />
      </View>
      
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{movie.title}</Text>
        <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
        <Text style={{ marginBottom: 10 }}>Release Date: {movie.release_date}</Text>
        <Text style={{ marginBottom: 10 }}>Rating: {movie.vote_average}/10</Text>
      </View>
    </ScrollView>
  );
}

