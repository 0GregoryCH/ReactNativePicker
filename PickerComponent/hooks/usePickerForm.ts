import { useForm } from 'react-hook-form';

interface FormData {
  selectedLanguage: string;
}

export const usePickerForm = () => {
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      selectedLanguage: 'java'
    }
  });

  const selectedValue = watch('selectedLanguage');

  const onSubmit = (data: FormData) => {
    console.log('Selected language:', data.selectedLanguage);
    // Aquí puedes manejar el envío del formulario
    alert(`Idioma seleccionado: ${data.selectedLanguage}`);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    selectedValue
  };
};