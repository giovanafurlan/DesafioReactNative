import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Tabuleiro from './components/Tabuleiro';
import verificaVencedor from './utils/VerificaVencedor';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quadrados: Array(9).fill(""),
      xProximo: true,
      mensagem: "",
      tabuleiroDesabilitado: false,
    };
  }

  handleOnClick = i => {
    const { quadrados, xProximo } = this.state;

    if (quadrados[i]) return;
    const jogador = xProximo ? "X" : "O";

    quadrados[i] = jogador;

    let msg = verificaVencedor(quadrados, jogador);

    switch (msg) {
      case "X":
        msg = "Vencedor: X";
        break;
      case "0":
        msg = "Vencedor: O";
      case "E":
        msg = "Empate";
        break;
    }

    const desabilitado = !msg ? false : true;
    this.setState({
      quadrados,
      xProximo: !xProximo,
      mensagem: msg,
      tabuleiroDesabilitado: desabilitado
    });

    novoJogo = () => {
      this.setState({
        quadrados: Array(9).fill(""),
        xProximo: true,
        mensagem: "",
        tabuleiroDesabilitado: false,
      });
    }

  }
    render(){
      const{quadrados, xProximo, mensagem, tabuleiroDesabilitado}=this.state;
      return(
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Jogo da Velha</Text>
          </View>
          <View style={styles.boardContainer}>
            <Tabuleiro
              quadrados={quadrados}
              desabilitado={tabuleiroDesabilitado}
              onClick={this.handleOnClick}
            />
            {mensagem === "" && (
              <View>
                <Text style={styles.textVencedor}>{mensagem}</Text>
                <TouchableOpacity onPress={this.novoJogo}>
                  <Text style={styles.textNovoJogo}>Novo Jogo</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <StatusBar style="auto"/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer:{
    height: 50,
    backgroundColor: 'steelblue',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
  },
  boardContainer: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  textVencedor: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textNovoJogo: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    marginTop: 30
  }
});
