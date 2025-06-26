import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProjectCard = ({ title, description, link }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => console.log('Abrir link:', link)}>
        <Text style={styles.link}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFD700',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  link: {
    fontSize: 14,
    color: '#0000FF',
    marginTop: 10,
  },
});

export default ProjectCard;
