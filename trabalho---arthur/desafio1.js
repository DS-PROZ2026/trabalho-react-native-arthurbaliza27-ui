import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function App() {

  return (

    // SUA MISSÃO: Trocar as tags HTML abaixo pelas tags do React Native

    <View style={styles.tela}>

      <View style={styles.caixa}>

        <Text style={styles.titulo}>Bem-vindo!</Text>

        <Text style={styles.texto}>Este texto está quebrando o celular. Troque as tags HTML pelas nativas!</Text>

        <TouchableOpacity style={styles.botao}>

          <Text style={styles.textoBotao}>Clique Aqui</Text>
          

        </TouchableOpacity>

      </View>

    </View>

  );
}
//==ESTILO==

const styles = StyleSheet.create({
  tela: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f5f9', padding: 20 },

  caixa: { backgroundColor: 'white', padding: 30, borderRadius: 24, shadowColor: '#0f172a', shadowOpacity: 0.1, shadowRadius: 15, elevation: 5, alignItems: 'center', width: '100%' },

  titulo: { fontSize: 28, fontWeight: '800', color: '#0f172a', marginBottom: 10 },

  texto: { fontSize: 16, color: '#64748b', textAlign: 'center', marginBottom: 30, lineHeight: 24 },

  botao: { backgroundColor: '#3b82f6', paddingVertical: 16, borderRadius: 14, width: '100%', alignItems: 'center' },

  textoBotao: { color: 'white', fontSize: 16, fontWeight: '700' }
});
