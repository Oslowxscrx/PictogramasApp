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


export const sound4 = new Sound('papa.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: papa.mp3');
  }
});

export const sound5 = new Sound('mama1.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: mama.mp3');
  }
});

export const sound6 = new Sound('saludo.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: saludo.mp3');
  }
});

export const sound7 = new Sound('feliz.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: feliz.mp3');
  }
});

export const sound8 = new Sound('triste.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: triste.mp3');
  }
});

export const sound9 = new Sound('sed.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: sed.mp3');
  }
});

export const sound10 = new Sound('bano.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: bano.mp3');
  }
});

export const sound11 = new Sound('dolor.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: dolor.mp3');
  }
});

export const sound12 = new Sound('jugar.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Falla al cargar el sonido', error);
  } else {
    console.log('El sonido se cargo correctamente: jugar.mp3');
  }
});
