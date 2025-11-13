import { estilosGlobales } from '@/styles/estilosGlobales';
import React from 'react';
import { Text, TextProps } from 'react-native';
 
interface Props extends TextProps{
    variant?: 'h1' | 'h2';
}
 
const ThemaText = ({children, variant, ...rest} : Props) => {
  return (
      <Text style={[
        {color:'white',fontFamily:'spaceMono'},
        variant === 'h1' && estilosGlobales.mainResult,
        variant === 'h2' && estilosGlobales.subResult,
      ]} {...rest}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {children}
      </Text>
 
  )
}
 
export default ThemaText