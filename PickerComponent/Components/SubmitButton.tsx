import React from 'react';
import { Pressable, Text } from 'react-native';
import { estilosGlobales } from '@/styles/estilosGlobales';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

interface SubmitButtonProps {
  onPress: () => void;
  title?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  onPress, 
  title = "Enviar" 
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...estilosGlobales.submitButton,
        backgroundColor: Colors.orange,
        opacity: pressed ? 0.6 : 1,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text style={estilosGlobales.submitButtonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;