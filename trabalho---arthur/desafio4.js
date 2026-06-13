import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function AppTema() {

  const [escuro, setEscuro] = useState(false);
  
  return (
    <View style={[styles.tela, escuro ? styles.telaEscura : styles.telaClara]}>
      <View style={styles.iconeContainer}>
        <Text style={styles.iconeSolLua}>{escuro ? '🌙' : '☀️'}</Text>
      </View>
      <Text
        style={[
          styles.titulo,escuro ? styles.textoClaro : styles.textoEscuro,
        ]}>
        Ajuste de Tema
      </Text>

      <TouchableOpacity
        style={[styles.botao, escuro ? styles.botaoEscuro : styles.botaoClaro]}
        onPress={() => setEscuro(!escuro)}
        activeOpacity={0.8}>
        {/* SUA MISSÃO: Deixe o texto abaixo dinâmico usando o operador ternário */}
        <Text
          style={[
            styles.textoBotao,
            escuro ? styles.textoBotaoEscuro : styles.textoBotaoClaro,
          ]}>
            {escuro ? 'Ativar modo Claro' : 'Ativar Modo Noturno'}
        </Text>

      </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  telaClara: { backgroundColor: '#f0fdf4' },
  telaEscura: { backgroundColor: '#022c22' },
  iconeContainer: { marginBottom: 30 },
  iconeSolLua: { fontSize: 80 },
  titulo: { fontSize: 28, fontWeight: '800', marginBottom: 40 },
  textoClaro: { color: '#ecfdf5' },
  textoEscuro: { color: '#064e3b' },
  botao: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 2,
  },
  botaoClaro: { backgroundColor: '#10b981', borderColor: '#059669' },
  botaoEscuro: { backgroundColor: 'transparent', borderColor: '#34d399' },
  textoBotao: { fontWeight: '800', fontSize: 16, textAlign: 'center' },
  textoBotaoClaro: { color: 'white' },
  textoBotaoEscuro: { color: '#34d399' },
});
