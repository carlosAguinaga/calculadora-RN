import React from 'react';
import {styles} from '../theme/appTheme';
import {Text, TouchableOpacity, View} from 'react-native';

interface Pros {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  text,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Pros) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
