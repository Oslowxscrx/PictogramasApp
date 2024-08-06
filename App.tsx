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
import {sound1, sound2, sound3, sound4, sound5, sound6} from './sonidos/Sounds'; // Asegúrate de que la ruta sea correcta
import Sound from 'react-native-sound';

// Función para reproducir el sonido
const playSound = (sound: Sound) => {
  console.log('Attempting to play sound...');
  sound.play(success => {
    if (success) {
      console.log('Sound played successfully');
    } else {
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

        {/* Pictogramas principales */}
        <View style={styles.mainPictogramsContainer}>
          <TouchableOpacity onPress={() => playSound(sound1)} style={styles.mainPictogram}>
            <Image source={require('./images/si.jpg')} style={styles.mainPictogramImage} />
            <Text style={styles.pictogramText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound(sound2)} style={styles.mainPictogram}>
            <Image source={require('./images/no.jpg')} style={styles.mainPictogramImage} />
            <Text style={styles.pictogramText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound(sound3)} style={styles.mainPictogram}>
            <Image source={require('./images/comer.jpg')} style={styles.mainPictogramImage} />
            <Text style={styles.pictogramText}>Comer</Text>
          </TouchableOpacity>
        </View>

        {/* Otros pictogramas en filas de 3 */}
        <View style={styles.otherPictogramsContainer}>
          <TouchableOpacity onPress={() => playSound(sound4)} style={styles.pictogram}>
            <Image source={require('./images/saludar.jpg')} style={styles.pictogramImage} />
            <Text style={styles.pictogramText}>Saludar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound(sound5)} style={styles.pictogram}>
            <Image source={require('./images/papa.jpg')} style={styles.pictogramImage} />
            <Text style={styles.pictogramText}>Papá</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSound(sound6)} style={styles.pictogram}>
            <Image source={require('./images/mama1.jpg')} style={styles.pictogramImage} />
            <Text style={styles.pictogramText}>Mamá</Text>
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
  mainPictogramsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  mainPictogram: {
    width: 140, // Tamaño más grande para pictogramas principales
    height: 140,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPictogramImage: {
    width: '75%',
    height: '80%', // Deja espacio para el texto
    resizeMode: 'contain',
  },
  pictogramText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  otherPictogramsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  pictogram: {
    width: 120,
    height: 150, // Aumenta la altura para acomodar el texto
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictogramImage: {
    width: '100%',
    height: '75%', // Deja espacio para el texto
    resizeMode: 'contain',
  },
});

export default App;