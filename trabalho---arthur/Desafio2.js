import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContadorCongelado() {

  const [curtidas, setcurtidas] = useState(0);
  const [curtiu, setcurtiu] = useState(false);

  function darLike() {
    if (curtiu === false) {
      setcurtidas(curtidas + 1);
      setcurtiu(!curtiu);
    }else{
      setcurtidas(curtidas - 1)
      setcurtiu(!curtiu)
    }
      
  }

  return (
    <View style={styles.tela}>
      <View style={styles.card}>
        <View style={styles.circuloIcone}>
          <Text style={styles.iconeGrande}>💕</Text>
        </View>
        <Text style={styles.numeroDestaque}>{curtidas}</Text>
        <Text style={styles.textoSubtitulo}>curtidas nesta foto</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={darLike}
          activeOpacity={0.8}>
          <Text style={styles.textoBotao}>Dar Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff1f2',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#e11d48',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  circuloIcone: {
    width: 80,
    height: 80,
    backgroundColor: '#ffe4e6',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconeGrande: { fontSize: 40 },
  numeroDestaque: { fontSize: 48, fontWeight: '900', color: '#e11d48' },
  textoSubtitulo: {
    fontSize: 16,
    color: '#9f1239',
    marginBottom: 30,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#e11d48',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: { color: 'white', fontWeight: '800', fontSize: 18 },
});
