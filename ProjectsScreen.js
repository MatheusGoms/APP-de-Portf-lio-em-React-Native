import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: '1',
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo para organizar tarefas diárias.',
    link: 'https://github.com/matheus/task-manager-app',
  },
  {
    id: '2',
    title: 'Sistema de E-commerce',
    description: 'Plataforma para venda de produtos online.',
    link: 'https://github.com/matheus/ecommerce-platform',
  },
];

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Projetos" />
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectCard
            title={item.title}
            description={item.description}
            link={item.link}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ProjectsScreen;
