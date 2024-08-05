// Sounds.tsx (o Sounds.js)
import Sound from 'react-native-sound';

// Cargar los sonidos
export const sound1 = new Sound('comer.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load the sound', error);
  } else {
    console.log('Sound loaded successfully: comer.mp3');
  }
});
