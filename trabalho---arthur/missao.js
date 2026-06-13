import React, { useState } from 'react';
// 1. IMPORTAMOS O COMPONENTE IMAGE AQUI:
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
const QUIZ = [
  {
    id: 1,
    pergunta: 'No React Native, qual tag nós usamos no lugar da <div> da Web?',
    opcoes: ['<Container>', '<Section>', '<View>', '<Box>'],
    respostaCerta: 2,
  },
  {
    id: 2,
    pergunta: 'Como chamamos a regra de CSS para aplicar espaçamento interno?',
    opcoes: ['margin', 'padding', 'spacing', 'border'],
    respostaCerta: 1,
  },
  {
    id: 3,
    pergunta: 'Qual componente substitui o <button> tradicional?',
    opcoes: [
      '<Touchable>',
      '<PressableButton>',
      '<TouchableOpacity>',
      '<Action>',
    ],
    respostaCerta: 2,
  },
];
export default function AppQuiz() {
  const [telaAtual, setTelaAtual] = useState('inicio');
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [carregando, setCarregando] = useState(false);
  function iniciarJogo() {
    setPerguntaAtual(0);
    setPontuacao(0);
    setTelaAtual('quiz');
  }
  function voltarAoInicio() {
    setTelaAtual('inicio');
  }
  function responder(indiceClicado) {
    setCarregando(true);
    setTimeout(() => {
      const pergunta = QUIZ[perguntaAtual];
      if (indiceClicado === pergunta.respostaCerta) {
        setPontuacao(pontuacao + 1);
      }
      if (perguntaAtual + 1 < QUIZ.length) {
        setPerguntaAtual(perguntaAtual + 1);
      } else {
        setTelaAtual('resultado');
      }
      setCarregando(false);
    }, 1500);
  }
  // ==========================================
  // AS TELAS
  // ==========================================
  if (telaAtual === 'inicio') {
    return (
      <View style={styles.telaCentrada}>
        {/* 2. EXEMPLO PRÁTICO DE IMAGEM: */}
        {/* Repare nas chaves duplas {{ }} usadas para passar o link da internet */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logoInicial}
        />
        <Text style={styles.tituloPrincipal}>Quiz do Dev</Text>
        <Text style={styles.subtituloInicio}>
          Teste seus conhecimentos em React Native!
        </Text>
        <TouchableOpacity
          style={styles.botaoIniciar}
          onPress={iniciarJogo}
          activeOpacity={0.8}>
          <Text style={styles.textoBotaoIniciar}>INICIAR JOGO</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (telaAtual === 'resultado') {
    return (
      <View style={styles.telaCentrada}>
        <Text style={styles.iconeGrande}> </Text>
        <Text style={styles.titulo}>Fim de Jogo!</Text>
        <Text style={styles.subtitulo}>
          Você acertou {pontuacao} de {QUIZ.length}
          perguntas.
        </Text>
        <TouchableOpacity
          style={styles.botaoAcao}
          onPress={voltarAoInicio}
          activeOpacity={0.8}>
          <Text style={styles.textoBotaoAcao}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (carregando) {
    return (
      <View style={styles.telaCentrada}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.textoCarregando}>Validando resposta...</Text>
      </View>
    );
  }
  const pergunta = QUIZ[perguntaAtual];
  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <Text style={styles.progresso}>
          Pergunta {perguntaAtual + 1} de {QUIZ.length}
        </Text>
        <Text style={styles.pontos}>Pontos: {pontuacao}</Text>
      </View>
      <View style={styles.cartaoPergunta}>
        <Text style={styles.textoPergunta}>{pergunta.pergunta}</Text>
      </View>
      <View style={styles.areaOpcoes}>
        {pergunta.opcoes.map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.botaoOpcao}
            onPress={() => responder(index)}
            activeOpacity={0.7}>
            <Text style={styles.textoOpcao}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
// ==========================================
// ESTILOS
// ==========================================
const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#f8fafc', padding: 20, paddingTop: 60 },
  telaCentrada: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // 3. ESTILO DA IMAGEM
  logoInicial: { width: 120, height: 120, marginBottom: 20 },
  tituloPrincipal: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1e293b',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtituloInicio: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  botaoIniciar: {
    backgroundColor: '#10b981',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    width: '100%',
    maxWidth: 300,
    shadowColor: '#10b981',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
    alignItems: 'center',
  },
  textoBotaoIniciar: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  progresso: { fontSize: 16, fontWeight: '700', color: '#64748b' },
  pontos: { fontSize: 16, fontWeight: '800', color: '#3b82f6' },
  cartaoPergunta: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
    minHeight: 150,
    justifyContent: 'center',
  },
  textoPergunta: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1e293b',
    textAlign: 'center',
    lineHeight: 30,
  },
  areaOpcoes: { flex: 1 },
  botaoOpcao: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  textoOpcao: {
    fontSize: 18,
    color: '#334155',
    fontWeight: '600',
    textAlign: 'center',
  },
  iconeGrande: { fontSize: 80, marginBottom: 20 },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 10,
  },
  subtitulo: { fontSize: 18, color: '#64748b', marginBottom: 40 },
  botaoAcao: {
    backgroundColor: '#3b82f6',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  textoBotaoAcao: { color: 'white', fontSize: 18, fontWeight: '800' },
  textoCarregando: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#3b82f6',
  },
});
