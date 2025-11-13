{/* cd PickerComponent */}
{/* npx expo install @react-native-picker/picker react-hook-form */}

import React from 'react';
import { View, Text } from 'react-native';
import { usePickerForm } from '@/hooks/usePickerForm';
import CustomPicker from '@/Components/CustomPicker';
import SubmitButton from '@/Components/SubmitButton';
import { estilosGlobales } from '@/styles/estilosGlobales';
import ThemaText from '@/Components/ThemaText';

const PickerScreen = () => {
  //se usa el hook personalizado para el formulario (todo lo que se va a usar)
  const { control, handleSubmit, selectedValue, selectedFramework } = usePickerForm();

  return (
    <View style={estilosGlobales.background}>
      
      {/* Título */}
      <View style={{ paddingHorizontal: 30, marginTop: 60, marginBottom: 40 }}>
        <ThemaText variant='h1'>Selector de Lenguajes</ThemaText>
        <ThemaText variant='h2'>Elige tu lenguaje de programación favorito</ThemaText>
      </View>

      {/* Componente Picker */}
      <CustomPicker 
        control={control}
        name="selectedLanguage"
        label="Selecciona tu lenguaje:"
      />

       {/* Picker de Framework con modo dropdown */}
      <CustomPicker 
        control={control}
        name="selectedFramework"
        label="Selecciona tu framework:"
        mode="dropdown" 
      />

      {/* Valor seleccionado */}
      <Text style={estilosGlobales.selectedValueText}>
        Valor seleccionado: {selectedValue}
      </Text>

       <Text style={estilosGlobales.selectedValueText}>
        Framework: {selectedFramework}
      </Text>

      {/* Botón de envío */}
      <SubmitButton onPress={handleSubmit} title="Confirmar Selección" />

    </View>
  );
};

export default PickerScreen;