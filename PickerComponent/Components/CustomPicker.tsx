import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Control, Controller } from 'react-hook-form';
import { estilosGlobales } from '@/styles/estilosGlobales';
import { Colors } from '@/constants/Colors';

interface CustomPickerProps {
  control: Control<any>;
  name: string;
  label?: string;
  mode?: 'dialog' | 'dropdown'; 
}

const CustomPicker: React.FC<CustomPickerProps> = ({ 
  control, 
  name, 
  label = "Selecciona una opción", 
  mode = "dialog" // valor por defecto
}) => {
  // Opciones dinámicas según el nombre del campo
  const opciones = name === "selectedLanguage"
    ? [
        { label: "Java", value: "java" },
        { label: "JavaScript", value: "javascript" },
        { label: "Python", value: "python" },
        { label: "TypeScript", value: "typescript" },
        { label: "C++", value: "c++" },
        { label: "Swift", value: "swift" },
      ]
    : [
        { label: "React", value: "react" },
        { label: "Angular", value: "angular" },
        { label: "Vue", value: "vue" },
        { label: "Django", value: "django" },
        { label: "Spring", value: "spring" },
      ];

  return (
    <View style={estilosGlobales.pickerContainer}>
      {label && <Text style={estilosGlobales.pickerLabel}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View style={estilosGlobales.pickerWrapper}>
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={estilosGlobales.picker}
              dropdownIconColor={Colors.orange}
              mode={mode} 
            >
              {opciones.map((opt) => (
                <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
              ))}
            </Picker>
          </View>
        )}
      />
    </View>
  );
};

export default CustomPicker;
