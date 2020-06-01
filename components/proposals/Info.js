import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import _ from 'lodash'

class Info extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            info: _.cloneDeep(this.props.info)
        }
    }

    componentWillUnmount() {
        if (!_.isEqual(this.state.info, this.props.info))
            this.props.onEdit(this.props.id, 'info', this.state.info)
    }

    render() {
        return (
            <View style={styles.toggleActive}>
                <Text style={styles.toggleActiveText}>Info</Text>
                <View>
                    <Text>Age</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.info.age = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.info.age}
                    />
                </View>
                <View>
                    <Text>Place of Birth</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            this.setState(prevState => {
                                prevState.info.place_of_birth = text
                                return prevState
                            }
                            )
                        }}
                        value={this.state.info.place_of_birth}
                    />
                </View>
            </View >
        )
    }
}

export default Info

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