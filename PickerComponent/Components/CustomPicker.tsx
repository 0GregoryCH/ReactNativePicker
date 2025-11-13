import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Control, Controller } from 'react-hook-form';
import { estilosGlobales } from '@/styles/estilosGlobales';
import { Colors } from '@/constants/Colors';
import ThemaText from './ThemaText';

interface CustomPickerProps {
  control: Control<any>;
  name: string;
  label?: string;
}

const CustomPicker: React.FC<CustomPickerProps> = ({ 
  control, 
  name, 
  label = "Selecciona un lenguaje" 
}) => {
  return (
    <View style={estilosGlobales.pickerContainer}>
      {label && (
        <Text style={estilosGlobales.pickerLabel}>{label}</Text>
      )}
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
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="javascript" />
              <Picker.Item label="Python" value="python" />
              <Picker.Item label="TypeScript" value="typescript" />
              <Picker.Item label="C++" value="cpp" />
              <Picker.Item label="Swift" value="swift" />
            </Picker>
          </View>
        )}
      />
    </View>
  );
};

export default CustomPicker;