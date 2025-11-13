import React from 'react';
// Importación de componentes básicos de React Native para la interfaz de usuario
import { View, Text } from 'react-native';
// Importación del componente Picker para selección de opciones
import { Picker } from '@react-native-picker/picker';
// Importación de tipos y componentes de React Hook Form para manejo de formularios
import { Control, Controller } from 'react-hook-form';
import { estilosGlobales } from '@/styles/estilosGlobales';
import { Colors } from '@/constants/Colors';

// Definición de la interfaz para las props del componente CustomPicker
interface CustomPickerProps {
  // Control de React Hook Form para manejar el estado del formulario
  control: Control<any>;
  // Nombre del campo en el formulario
  name: string;
  // Etiqueta opcional que se muestra arriba del picker
  label?: string;
  // Modo de visualización del picker: dialog (modal) o dropdown (desplegable)
  mode?: 'dialog' | 'dropdown'; 
}

// Componente funcional CustomPicker que recibe las props definidas en la interfaz
const CustomPicker: React.FC<CustomPickerProps> = ({ 
  control,  // Prop control pasada desde el componente padre
  name,     // Prop name pasada desde el componente padre  
  label = "Selecciona una opción", // Valor por defecto para la etiqueta si no se proporciona
  mode = "dialog" // Valor por defecto para el modo si no se proporciona
}) => {
  // Definición de opciones dinámicas basadas en el nombre del campo
  // Si el nombre del campo es "selectedLanguage", se muestran opciones de lenguajes
  // De lo contrario, se muestran opciones de frameworks
  const opciones = name === "selectedLanguage"
    ? [
        // Array de opciones para lenguajes de programación
        { label: "Java", value: "java" },
        { label: "JavaScript", value: "javascript" },
        { label: "Python", value: "python" },
        { label: "TypeScript", value: "typescript" },
        { label: "C++", value: "c++" },
        { label: "Swift", value: "swift" },
      ]
    : [
        // Array de opciones para frameworks
        { label: "React", value: "react" },
        { label: "Angular", value: "angular" },
        { label: "Vue", value: "vue" },
        { label: "Django", value: "django" },
        { label: "Spring", value: "spring" },
      ];

  // Retorno del JSX que compone la interfaz del componente
  return (
    // Contenedor principal del picker con estilos aplicados
    <View style={estilosGlobales.pickerContainer}>
      {/* Renderizado condicional de la etiqueta si existe */}
      {label && <Text style={estilosGlobales.pickerLabel}>{label}</Text>}
      
      {/* Componente Controller de React Hook Form que conecta el picker con el formulario */}
      <Controller
        // Prop control que recibe el control del formulario
        control={control}
        // Nombre del campo en el formulario
        name={name}
        // Función render que recibe el estado del campo y devuelve el JSX
        render={({ field: { onChange, value } }) => (
          // Contenedor del picker con estilos aplicados
          <View style={estilosGlobales.pickerWrapper}>
            {/* Componente Picker nativo de React Native */}
            <Picker
              //Propiedades 

              // Valor actualmente seleccionado en el picker
              selectedValue={value}
              // Función que se ejecuta cuando se cambia la selección
              onValueChange={onChange}
              // Estilos aplicados al picker
              style={estilosGlobales.picker}
              // Color del ícono desplegable del picker
              dropdownIconColor={Colors.orange}
              // Modo de visualización del picker (dialog o dropdown)
              mode={mode} 
            >
              {/* Mapeo de las opciones para crear los items del picker */}
              {opciones.map((opt) => (
                // Componente Picker.Item por cada opción disponible
                <Picker.Item 
                  key={opt.value} // Key única para React basada en el valor
                  label={opt.label} // Texto visible que se muestra en la opción
                  value={opt.value} // Valor interno que se almacena en el formulario
                />
              ))}
            </Picker>
          </View>
        )}
      />
    </View>
  );
};

// Exportación del componente para poder ser usado en otros archivos
export default CustomPicker;