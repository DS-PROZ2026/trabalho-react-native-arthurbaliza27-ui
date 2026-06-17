import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Calculadora() {
  const [display, setDisplay] = useState('0');

  const teclas = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
  ];

  function teclaselect(valor) {
    if (valor === 'C') {
      setDisplay('0');
      return;
    }

    if (valor === '=') {
      calcular();
      return;
    }

    setDisplay((anterior) =>
      anterior === '0'
        ? valor
        : anterior + valor
    );
  }

  function calcular() {
    try {
      const resultado = eval(display);
      setDisplay(String(resultado));
    } catch {
      setDisplay('Erro');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.input}>{display}</Text>

        <View style={styles.linhaBotoes}>
          {teclas.map((tecla) => (
            <TouchableOpacity
              key={tecla}
              style={styles.botao}
              onPress={() => teclaselect(tecla)}
            >
              <LinearGradient
                colors={['#6366f1', '#4f46e5']}
                style={styles.gradient}
              >
                <Text style={styles.textoBotao}>
                  {tecla}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1C1C1D',
  },

  card: {
    backgroundColor: '#DDDAD7',
    padding: 25,
    borderRadius: 25,
    elevation: 8,
  },

  input: {
    backgroundColor: '#f1f5f9',
    padding: 18,
    marginBottom: 15,
    borderRadius: 15,
    fontSize: 32,
    textAlign: 'right',
    color: 'black',
  },

  linhaBotoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  botao: {
    width: '22%',
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },

  gradient: {
    paddingVertical: 18,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});