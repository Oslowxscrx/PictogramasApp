import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {sound1} from './sonidos/Sounds'; // Asegúrate de que la ruta sea correcta
import Sound from 'react-native-sound';

// Función para reproducir el sonido
const playSound = (sound: Sound) => {
  sound.play(success => {
    if (!success) {
      console.log('Sound did not play');
    }
  });
};

// Componente principal
const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.header.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.title}>Pictogramas</Text>
        </View>
        <View style={styles.pictogramContainer}>
          <TouchableOpacity onPress={() => playSound(sound1)}>
            <Image
              source={require('./images/comer.jpg')}
              style={styles.pictogram}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4a90e2', // Azul brillante
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#003c71', // Azul oscuro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Blanco
  },
  pictogramContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 20,
  },
  pictogram: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4a90e2', // Azul brillante
  },
});

export default App;
