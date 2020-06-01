import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import _ from 'lodash'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: _.cloneDeep(this.props.contact)
        }
    }

    componentWillUnmount() {
        if (!_.isEqual(this.state.contact, this.props.contact))
            this.props.onEdit(this.props.id, 'contacts', this.state.contact)
    }

    render() {
        return (
            <View style={styles.toggleActive}>
                <Text style={styles.toggleActiveText}>Contact</Text>
                <View>
                    <Text>Partner</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.contact.partner = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.contact.partner}
                    />
                </View>
                <View>
                    <Text>Next of kind</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.contact.next_of_kin = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.contact.next_of_kin}
                    />
                </View >
            </View >
        )
    }
}

export default Contact

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