import { useForm } from 'react-hook-form';//use form de react-hook-form 

//La intefaz de los datos del formulario
//MANTENER LOS TIPADOS DE LOS CAMPOS DEL FORMULARIO
interface FormData {
  selectedLanguage: string;
  selectedFramework: string;
}

export const usePickerForm = () => {
  //control: valor  del formulario
  //handleSubmit: función para manejar el envío del formulario
  //watch: función para observar los valores del formulario
  //Todo eso viene de useForm
  const { control, handleSubmit, watch } = useForm<FormData>({// useForm controla el formulario y define los valores iniciales
    defaultValues: {
      selectedLanguage: 'java',//asigna java como valor inicial
      selectedFramework: 'react'//asigna react como valor inicial
    }
  });

   // "watch" permite observar los valores actuales del formulario
  const selectedValue = watch('selectedLanguage');
  const selectedFramework = watch('selectedFramework');

  const onSubmit = (data: FormData) => {
    console.log('Selected language:', data.selectedLanguage);
    console.log('Selected framework:', data.selectedFramework);
    alert(`Lenguaje: ${data.selectedLanguage}\nFramework: ${data.selectedFramework}`);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    selectedValue,
    selectedFramework
  };
};