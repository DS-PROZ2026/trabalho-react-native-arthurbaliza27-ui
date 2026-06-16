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

const QUIZ_2 = [
  {
    id: 1,
    imagem:
      'https://imgs.search.brave.com/pPCaJxOrmoUJpHAp3SkuW_ST5fmud6GRb5_v5toKkkQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTU3MTM5L3B0L2Zv/dG8vdmVyZGUtZG8t/YnJhc2lsLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1MQ2lu/RmI5bjZzajZSeHUt/bHg4cnRtLU9MUVA3/X2pWUHNrTVpmRVVy/WmhVPQ',
    pergunta: 'Qual é a maior região do Brasil em extensão territorial?',
    opcoes: ['Sudeste', 'Norte', 'Centro-Oeste', 'Nordeste'], //b) Norte ✅
    respostaCerta: 1,
  },
  {
    id: 2,
    imagem: 'https://imgs.search.brave.com/CkDjlp-LvDeF-SJFG51GR_W6PWbTPtE48pQPhDL7sCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXN0YWRvc2VjYXBp/dGFpc2RvYnJhc2ls/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8xMi9CZWxv/LVJpby1BbWF6b25h/cy0zMDB4MTk5Lmpw/Zw',
    pergunta:
      ' Qual é o rio mais extenso inteiramente dentro do território brasileiro?',
    opcoes: [
      'Rio Amazonas',
      'Rio Paraná',
      'Rio São Francisco',
      'Rio Tocantins',
    ], //c) Rio São Francisco ✅
    respostaCerta: 0,
  },
  {
    id: 3,
    imagem: 'https://imgs.search.brave.com/TuQmXNA4obUFAkQPJNby5-WdPxhOaPPDf5NvKSn2RR0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubXVuZG9lZHVj/YWNhby51b2wuY29t/LmJyL211bmRvZWR1/Y2FjYW8vMjAyMy8w/Ni9wYW50YW5hbC5q/cGc',
    pergunta: ' Qual bioma ocupa a maior parte do território brasileiro?',
    opcoes: ['Cerrado', 'Mata Atlântica', 'Amazônia', 'Caatinga'], //c) Amazônia ✅
    respostaCerta: 2,
  },
  {
    id: 4,
    imagem: 'https://imgs.search.brave.com/fyxGoMHtByo700Vy3JaoRYyaNEsnjaFVPlBGazPXIPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJz/ZW1maW0uY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA3LzExLmpwZw',
    pergunta: ' Qual estado brasileiro possui a maior linha costeira?',
    opcoes: ['Bahia ', 'Maranhão', 'Rio de Janeiro', 'Ceará'], //a) Bahia ✅
    respostaCerta: 0,
  },
  {
    id: 5,
    imagem: 'https://imgs.search.brave.com/PeZlFPdTQ2_x3W7PEeHf0aqCyIWTga2KGHdMD0Kk43E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubXVuZG9lZHVj/YWNhby51b2wuY29t/LmJyL211bmRvZWR1/Y2FjYW8vMjAyMS8w/NC9jYW1wby1ncmFu/ZGUuanBn',
    pergunta: ' Qual é a capital do estado do Mato Grosso do Sul?',
    opcoes: ['Cuiabá', 'Campo Grande', 'Corumbá', 'Dourados'], //Campo Grande ✅
    respostaCerta: 1,
  },
  {
    id: 6,
    imagem: 'https://imgs.search.brave.com/77WoBrkHBU5DT8ALx1mliVyFZGu6vivoO4hdM4PFz9k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMi5z/dGF0aWMuYnJhc2ls/ZXNjb2xhLnVvbC5j/b20uYnIvYmUvMjAy/Mi8wNi9tYXBhLWJv/bGl2aWEuanBn',
    pergunta: ' Quantos estados fazem fronteira com a Bolívia?',
    opcoes: ['3', '4', '5', '6'], //c) 5 ✅
    respostaCerta: 2,
  },
  {
    id: 7,
    imagem: 'https://imgs.search.brave.com/O9vk-75sM_yOTi_9G3QW8MibFntHgZcBOQUAmdShiHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaWFh/ZGlhZXMuY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzExL3BpY28tZGEt/bmVibGluYS0xLkpQ/Ry45MTB4NjgwX3E5/NS00OTB4MzY2Lmpw/Zw',
    pergunta: ' Qual é o ponto mais alto do Brasil?',
    opcoes: [
      'Pico da Bandeira',
      'Pico das Agulhas Negras',
      'Pico 31 de Março',
      'Pico da Neblina',
    ], //d) Pico da Neblina ✅
    respostaCerta: 3,
  },
];

export default function AppQuiz() {
  const [telaAtual, setTelaAtual] = useState('inicio');
  const [quizAtivo, setQuizAtivo] = useState(QUIZ);
  const [quizNumero, setQuizNumero] = useState(1);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [carregando, setCarregando] = useState(false);
  //== Para a missão 2 ==>
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const [mostrarCorreta, setMostrarCorreta] = useState(false);

  // A cor personalizada dos Quizzes:
  const tema =
    quizNumero === 1
      ? { primaria: '#3b82f6', sombra: '#3b82f6', fundo: '#f0f4ff' }
      : { primaria: '#2d6a4f', sombra: '#2d6a4f', fundo: '#f0faf4' };
  //usando operador ternario para saber em qual quiz está

  //==Funções de tela==|
  function iniciarJogo() {
    setQuizAtivo(QUIZ); // O primeiro quiz
    setPerguntaAtual(0);
    setQuizNumero(1);
    setPontuacao(0);
    setTelaAtual('quiz');
  }
  function iniciarProx() {
    setQuizAtivo(QUIZ_2); // quiz de geografia
    setQuizNumero(2);
    setPerguntaAtual(0);
    setPontuacao(0);
    setTelaAtual('quiz');
  }

  function voltarAoInicio() {
    setTelaAtual('inicio');
  }
  //==============|

  function responder(indiceClicado) {
    const pergunta = quizAtivo[perguntaAtual];

    // Mostra o feedback imediatamente
    setRespostaSelecionada(indiceClicado);
    setRespostaCorreta(pergunta.respostaCerta);

    // Após 600ms, revela a correta também
    setTimeout(() => {
      setMostrarCorreta(true);
    }, 600);

    // Após 1 segundo, aparece o loading
    setTimeout(() => {
      if (indiceClicado === pergunta.respostaCerta) {
        setPontuacao(pontuacao + 1);
      }
      // Limpa o feedback e ativa o loading
      setRespostaSelecionada(null);
      setRespostaCorreta(null);
      setMostrarCorreta(false);
      setCarregando(true);

      // Após mais 500ms, avança
      setTimeout(() => {
        if (perguntaAtual + 1 < quizAtivo.length) {
          setPerguntaAtual(perguntaAtual + 1);
        } else {
          setTelaAtual('resultado');
        }
        setCarregando(false);
      }, 1000);
    }, 1700);
  }

  // ==========================================
  // AS TELAS
  // ==========================================
  if (telaAtual === 'inicio') {
    return (
      //Tela INICIaL
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

  // O meu quiz
  if (telaAtual === 'inicio_2') {
    return (
      <View style={[styles.telaCentrada, { backgroundColor: tema.fundo }]}>
        <Image
          source={{ uri: 'https://thf.bing.com/th/id/OIP.itJWPlHE0xCez0AM0uhs8gHaHa?w=202&h=202&c=7&r=0&o=7&cb=thfc1falcon2&dpr=1.5&pid=1.7&rm=3' }}
          style={styles.logoInicial}
        />
        <Text style={styles.tituloPrincipal}>Quiz de Geografia 🌎</Text>
        <Text style={styles.subtituloInicio}>
          Teste seus conhecimentos sobre o Brasil!
        </Text>
        <TouchableOpacity
          style={[styles.botaoIniciar, { backgroundColor: tema.primaria }]}
          onPress={iniciarProx}
          activeOpacity={0.8}>
          <Text style={styles.textoBotaoIniciar}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'resultado') {
    return (
      <View style={[styles.telaCentrada, { backgroundColor: tema.fundo }]}>
        <Text style={styles.iconeGrande}> </Text>

        {quizNumero === 1 ? (
          <Text style={styles.titulo}>Fim do Quiz Dev! 💻</Text>
        ) : (
          <Text style={styles.titulo}>Fim do Quiz!</Text>
        )}

        {quizNumero === 1 ? (
          <Text style={styles.subtitulo}>
            Acertos: {pontuacao} de {quizAtivo.length}.
          </Text>
        ) : (
          <Text style={styles.subtitulo}>
            Acertos: {pontuacao} de {quizAtivo.length}.
          </Text>
        )}

        {quizNumero === 1 ? (
          <TouchableOpacity
            style={[styles.botaoAcao, { backgroundColor: tema.primaria }]}
            onPress={() => {
              setQuizNumero(2);
              setTelaAtual('inicio_2');
            }}>
            <Text style={styles.textoBotaoAcao}>Próximo Quiz 🌎</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.botaoAcao, { backgroundColor: tema.primaria }]}
            onPress={voltarAoInicio}>
            <Text style={styles.textoBotaoAcao}>Voltar ao Início</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  if (carregando) {
    return (
      <View style={[styles.telaCentrada, { backgroundColor: tema.fundo }]}>
        <ActivityIndicator size="large" color={tema.primaria} />
        <Text style={[styles.textoCarregando, { color: tema.primaria }]}>
          Validando resposta...
        </Text>
      </View>
    );
  }

  const pergunta = quizAtivo[perguntaAtual];

  return (
    <View style={[styles.tela, { backgroundColor: tema.fundo }]}>
      <View style={styles.cabecalho}>
        <Text style={styles.progresso}>
          Pergunta {perguntaAtual + 1} de {quizAtivo.length}
        </Text>
        <Text style={[styles.pontos, { color: tema.primaria }]}>
          Pontos: {pontuacao}
        </Text>
      </View>

      <View style={styles.cartaoPergunta}>
        {pergunta.imagem && (
          <Image
            source={{ uri: pergunta.imagem }}
            style={styles.imagemPergunta}
          />
        )}
        <Text style={styles.textoPergunta}>{pergunta.pergunta}</Text>
      </View>

      <View style={styles.areaOpcoes}>
        {pergunta.opcoes.map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.botaoOpcao,
              respostaSelecionada === index &&
                index === respostaCorreta &&
                styles.botaoCorreto,
              respostaSelecionada === index &&
                index !== respostaCorreta &&
                styles.botaoErrado,
              mostrarCorreta &&
                index === respostaCorreta &&
                styles.botaoCorreto,
            ]}
            onPress={() => responder(index)}
            disabled={respostaSelecionada !== null} // ← bloqueio de segurança!
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
  //=== Missão 2 ===
  botaoCorreto: {
    backgroundColor: '#22c55e',
    borderColor: '#16a34a',
    borderWidth: 3,
    transform: [{ scale: 1.02 }], // ← faz crecer
  },
  botaoErrado: {
    backgroundColor: '#ef4444',
    borderColor: '#dc2626',
    borderWidth: 3,
    transform: [{ scale: 1.02 }],
  },
  //================

  imagemPergunta: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
    resizeMode: 'contain',
  },

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
