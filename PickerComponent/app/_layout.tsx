import { estilosGlobales } from '@/styles/estilosGlobales';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const RootLayout = () => {
  return (
    <View style={estilosGlobales.background}>
      <Slot/>
      <StatusBar style='light'/> 
    </View>
  );
};

export default RootLayout;