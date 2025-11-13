// Importación del módulo React necesario para crear componentes
import React from 'react';
// Importación de componentes de React Native: Pressable para botones presionables y Text para mostrar texto
import { Pressable, Text } from 'react-native';
// Importación de los estilos globales definidos en la aplicación
import { estilosGlobales } from '@/styles/estilosGlobales';
// Importación de la paleta de colores definida en la aplicación
import { Colors } from '@/constants/Colors';
// Importación de la librería Haptics de Expo para generar feedback táctil
import * as Haptics from 'expo-haptics';

// Definición de la interfaz para las propiedades (props) que recibe el componente SubmitButton
interface SubmitButtonProps {
  // Función que se ejecutará cuando se presione el botón (requerida)
  onPress: () => void;
  // Texto que se mostrará en el botón (opcional, valor por defecto: "Enviar")
  title?: string;
}

// Declaración del componente funcional SubmitButton con tipado TypeScript
// React.FC<SubmitButtonProps> indica que es un Functional Component que recibe las props definidas en la interfaz
const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  // Desestructuración de las props recibidas
  onPress,   // Prop onPress que contiene la función a ejecutar al presionar
  title = "Enviar" // Prop title con valor por defecto "Enviar" si no se proporciona
}) => {
  // Retorno del JSX que define la interfaz del componente
  return (
    // Componente Pressable que crea un área presionable (similar a TouchableOpacity pero más moderna)
    <Pressable
      // Prop style que define los estilos del botón
      // Recibe un objeto con estado pressed que indica si el botón está siendo presionado
      style={({ pressed }) => ({
        // Spread operator para copiar todos los estilos base de estilosGlobales.submitButton
        ...estilosGlobales.submitButton,
        // Color de fondo del botón, tomado de la paleta de colores
        backgroundColor: Colors.orange,
        // Opacidad del botón: 0.6 cuando está presionado, 1 cuando no lo está
        // Esto crea un efecto visual de feedback al presionar
        opacity: pressed ? 0.6 : 1,
      })}
      // Prop onPress que define qué sucede cuando se presiona el botón
      onPress={() => {
        // Ejecución de la función de Haptics para generar feedback táctil
        // selectionAsync() produce una vibración sutil al seleccionar
        Haptics.selectionAsync();
        // Ejecución de la función onPress pasada como prop desde el componente padre
        onPress();
      }}
    >
      {/* Componente Text que muestra el título del botón */}
      <Text style={estilosGlobales.submitButtonText}>
        {/* Renderizado del título del botón, que puede ser el pasado por props o "Enviar" por defecto */}
        {title}
      </Text>
    </Pressable>
  );
};

// Exportación del componente como default para poder importarlo en otros archivos
// Esto permite usar el componente en otras partes de la aplicación con: import SubmitButton from './SubmitButton'
export default SubmitButton;