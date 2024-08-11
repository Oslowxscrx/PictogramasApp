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
  Dimensions,
} from 'react-native';
import {
  sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  sound6,
  sound7,
  sound8,
  sound9,
  sound10,
  sound11,
  sound12,
  sound13,
  sound14,
  sound15,
} from './sonidos/Sounds';
import Sound from 'react-native-sound';

const {width} = Dimensions.get('window');
// Función para reproducir el sonido
const playSound = (sound: Sound) => {
  sound.play((success: any) => {
    if (success) {
      return;
    }
  });
};
// Componente principal
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.header.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.title}>Comunicador</Text>
        </View>

        <View style={styles.topPictogramsContainer}>
          <TouchableOpacity
            onPress={() => playSound(sound1)}
            style={styles.pictogram}>
            <Image
              source={require('./images/si.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound2)}
            style={styles.pictogram}>
            <Image
              source={require('./images/no.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>No</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pictogramsContainer}>
          <TouchableOpacity
            onPress={() => playSound(sound3)}
            style={styles.pictogram}>
            <Image
              source={require('./images/comer.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Comer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound4)}
            style={styles.pictogram}>
            <Image
              source={require('./images/papa.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Papá</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound5)}
            style={styles.pictogram}>
            <Image
              source={require('./images/mama1.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Mamá</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound6)}
            style={styles.pictogram}>
            <Image
              source={require('./images/saludar.jpg')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Saludar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound7)}
            style={styles.pictogram}>
            <Image
              source={require('./images/feliz.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Feliz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound8)}
            style={styles.pictogram}>
            <Image
              source={require('./images/triste.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Triste</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound9)}
            style={styles.pictogram}>
            <Image
              source={require('./images/sed.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Sed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound10)}
            style={styles.pictogram}>
            <Image
              source={require('./images/bano.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Baño</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound11)}
            style={styles.pictogram}>
            <Image
              source={require('./images/dolor.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Dolor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound12)}
            style={styles.pictogram}>
            <Image
              source={require('./images/jugar.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Jugar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound13)}
            style={styles.pictogram}>
            <Image
              source={require('./images/pintar.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Pintar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound14)}
            style={styles.pictogram}>
            <Image
              source={require('./images/musica.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Musica</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => playSound(sound15)}
            style={styles.pictogram}>
            <Image
              source={require('./images/abrazo.png')}
              style={styles.pictogramImage}
            />
            <Text style={styles.pictogramText}>Abrazo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAFFD1',
  },
  header: {
    backgroundColor: '#448B66',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#003c71',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Cursive',
    textShadowColor: 'orange',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 8,
  },
  topPictogramsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pictogramsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  pictogram: {
    width: width / 3 - 20,
    height: width / 3 - 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 11, // Para Android
  },
  pictogramImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'contain',
  },
  pictogramText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
export default App;
