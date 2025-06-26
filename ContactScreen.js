import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Contato" />
      <Text style={styles.contact}>E-mail: matheus@email.com</Text>
      <Text style={styles.contact}>Telefone: (XX) XXXX-XXXX</Text>
      <Text style={styles.contact}>LinkedIn: linkedin.com/in/matheus</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  contact: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
});

export default ContactScreen;
