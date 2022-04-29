import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Quadro extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.props.onClick}
                    disabled={this.props.desabilitado}>
                    <Text style={styles.text}>{this.props.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        borderWidth: 1,
        background: 'white',
    },
    text: {
        minWidth: 100,
        minHeight: 100,
        fontSize: 60,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 1
    }
});