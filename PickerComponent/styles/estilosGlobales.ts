import { Colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

export const estilosGlobales = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 20,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
  },
  subResult: {
    color: Colors.textSecundary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  /*Filas para los botones*/
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },

  /* Estilos para el Picker */
  pickerContainer: {
    marginVertical: 20,
  },
  pickerLabel: {
    color: Colors.textPrimary,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '300',
  },
  pickerWrapper: {
    backgroundColor: Colors.darkGray,
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    color: Colors.textPrimary,
    backgroundColor: Colors.darkGray,
  },

  /* Estilos para el botón de envío */
  submitButton: {
    height: 50,
    backgroundColor: Colors.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: '500',
  },

  /* Estilos para mostrar el valor seleccionado */
  selectedValueText: {
    color: Colors.textPrimary,
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
  }
})