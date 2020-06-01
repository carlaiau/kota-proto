import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import _ from 'lodash'

class Finance extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            finance: _.cloneDeep(this.props.finance)
        }
    }

    componentWillUnmount() {
        if (!_.isEqual(this.state.finance, this.props.finance))
            this.props.onEdit(this.props.id, 'finance', this.state.finance)
    }

    render() {
        return (
            <View style={styles.toggleActive}>
                <Text style={styles.toggleActiveText}>Finance</Text>
                <View>
                    <Text>Bank Balance</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.finance.bank_balance = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.finance.bank_balance}
                    />
                </View>
                <View>
                    <Text>Credit Cards</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.finance.credit_cards = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.finance.credit_cards}
                    />
                </View>
            </View >
        )
    }
}

export default Finance

const styles = StyleSheet.create({
    toggleActive: {
        flex: 1,
        backgroundColor: '#ddd',
        width: 1000,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    toggleActiveText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
        marginRight: 10
    },
    textInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        width: 200,
        marginRight: 10,
        marginVertical: 10
    }
})