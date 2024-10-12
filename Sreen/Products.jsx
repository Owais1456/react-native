import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProd(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePress = () => {
    console.warn("Clicked Successfully");
  };

  return (
    <View style={styles.container}>
      {prod.map((e) => (
        <View key={e.id} style={styles.card}>
          <Image
            source={{ uri: e.image }}
            style={styles.image}
          />
          <Text style={styles.title}>{e.title}</Text>
          <Text style={styles.description}>{e.description}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  description: {
    fontSize: 15,
    color: 'blue',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Products;
