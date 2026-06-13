import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
export default function AppRegras() {
  return (
    <View style={styles.tela}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Termos de Uso</Text>
        <Text style={styles.subtitulo}>
          Por favor, leia todas as regras abaixo.
        </Text>
      </View>

      {/* SUA MISSÃO: Troque a View abaixo pelo componente que permite rolagem */}
      <ScrollView style={styles.caixaDeTexto}>
        <Text style={styles.textoLongo}>
          1. Respeite os colegas no laboratório.
        </Text>
        <Text style={styles.textoLongo}>
          2. Pratique o código todos os dias.
        </Text>
        <Text style={styles.textoLongo}>
          3. Beba muita água enquanto programa.
        </Text>
        <Text style={styles.textoLongo}>
          4. Faça pausas regulares para esticar as pernas.
        </Text>
        <Text style={styles.textoLongo}>
          5. Não tenha medo da tela vermelha de erro.
        </Text>
        <Text style={styles.textoLongo}>
          6. Leia a documentação oficial do React Native.
        </Text>
        <Text style={styles.textoLongo}>
          7. Ajude quem está com dificuldade ao seu lado.
        </Text>
        <Text style={styles.textoLongo}>
          8. Salve seu trabalho obsessivamente.
        </Text>
        <Text style={styles.textoLongo}>
          9. Comente o seu código para lembrar depois.
        </Text>
        <Text style={styles.textoLongo}>
          10. Divirta-se criando aplicativos reais!
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#f8fafc', paddingTop: 60 },
  header: { paddingHorizontal: 25, marginBottom: 20 },
  titulo: { fontSize: 32, fontWeight: '900', color: '#0f172a' },
  subtitulo: { fontSize: 16, color: '#64748b', marginTop: 5 },
  caixaDeTexto: {
    height: 250,
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  textoLongo: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});
