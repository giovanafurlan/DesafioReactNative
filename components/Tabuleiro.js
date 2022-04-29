import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Quadro from './Quadro';

export default class Tabuleiro extends React.Component {
    renderQuadro(i) {
        return (
            <Quadro
                value={this.props.quadro[i]}
                desabilitado={this.props.desabilitado}
                onClick={() => this.props.onClick(i)}
            />
        )
    }
    render() {
        return (
            <View>
                <View style={styles.rowContainer}>
                    {this.renderQuadro(0)}
                    {this.renderQuadro(1)}
                    {this.renderQuadro(2)}
                </View>
                <View style={styles.rowContainer}>
                    {this.renderQuadro(3)}
                    {this.renderQuadro(4)}
                    {this.renderQuadro(5)}
                </View>
                <View style={styles.rowContainer}>
                    {this.renderQuadro(6)}
                    {this.renderQuadro(7)}
                    {this.renderQuadro(8)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});