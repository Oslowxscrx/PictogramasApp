// Sounds.tsx (o Sounds.js)
import Sound from 'react-native-sound';

// Cargar los sonidos
export const sound1 = new Sound('si.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: si.mp3');
  }
});

export const sound2 = new Sound('no.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: no.mp3');
  }
});

export const sound3 = new Sound('comer1.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: comer.mp3');
  }
});

export const sound4 = new Sound('saludo.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: saludo.mp3');
  }
});

export const sound5 = new Sound('papa.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: papa.mp3');
  }
});

export const sound6 = new Sound('mama1.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: mama.mp3');
  }
});

