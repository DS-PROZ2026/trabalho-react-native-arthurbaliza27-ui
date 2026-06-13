import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AppCarrinho() {

  const [itens, setItens] = useState(0);

  return (

    <View style={styles.tela}>
      <Text style={styles.titulo}>Sua Sacola </Text>
      <Text style={styles.subtitulo}>Aproveite o frete grátis hoje!</Text>

      {/* SUA MISSÃO: Esconda este bloco de código inteiro se a variável 'itens' for ZERO */}
      {itens > 0 &&(
        <View style={styles.bannerAviso}>

          <View style={styles.bolinhaAlerta}></View>
          <Text style={styles.textoAviso}>
            Você tem {itens} produtos pendentes no carrinho!
          </Text>

        </View>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setItens(itens + 1)}
        activeOpacity={0.8}>

        <Text style={styles.textoBotao}>+ Adicionar Produto</Text>

      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 5,
  },
  subtitulo: { fontSize: 16, color: '#64748b', marginBottom: 40 },
  bannerAviso: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7ed',
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#fdba74',
    width: '100%',
    shadowColor: '#ea580c',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  bolinhaAlerta: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#f97316',
    marginRight: 15,
  },
  textoAviso: { fontSize: 15, color: '#c2410c', fontWeight: '700', flex: 1 },
  botao: {
    backgroundColor: '#2563eb',
    paddingVertical: 18,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  textoBotao: { color: 'white', fontWeight: '800', fontSize: 18 },
});
