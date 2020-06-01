import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import _ from 'lodash'

import Info from './proposals/Info'
import Contact from './proposals/Contact'
import Finance from './proposals/Finance'

const ProposalRoot = ({ proposal, onEdit, isOpen = false, openFn }) => {

    const { id, name, info, contacts, finance } = proposal

    const [activeToggle, changeActiveToggle] = useState(null)
    // Make all this prettier at some point
    const changeToggle = (newToggle) => {
        // Check if there is a currentToggle set and if so check the 
        // data within that toggle and do global update if different
        changeActiveToggle(newToggle)
        openFn(id)
    }

    return (
        <>
            <View style={styles.proposalRow}>
                <Text>{name}</Text>
                <View style={styles.proposalActionContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => changeToggle('info')}>
                        <Text style={styles.buttonText}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => changeToggle('contacts')}>
                        <Text style={styles.buttonText}>Contacts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => changeToggle('finance')}>
                        <Text style={styles.buttonText}>Finance</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                activeToggle == 'info' && isOpen && (
                    <Info id={id} info={info} onEdit={onEdit} />
                )
            }
            {
                activeToggle == 'contacts' && isOpen && (
                    <Contact id={id} contact={contacts} onEdit={onEdit} />
                )
            }
            {
                activeToggle == 'finance' && isOpen && (
                    <Finance id={id} finance={finance} onEdit={onEdit} />
                )
            }
        </>

    )
}


const ProposalList = ({ proposals, editProposal }) => {
    const [activeProposal, setActive] = useState(null)
    return (
        <View style={styles.container}>
            <FlatList
                data={proposals}
                renderItem={({ item }) => (
                    <ProposalRoot
                        isOpen={activeProposal == item.id}
                        openFn={setActive}
                        proposal={item}
                        onEdit={editProposal}
                    />
                )}



            />
        </View>
    )
}
export default ProposalList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        padding: 10,
    },
    proposalRow: {
        width: 1000,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        padding: 10,
        paddingBottom: 50,
        borderRadius: 5,
        marginTop: 20
    },
    proposalActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#555',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});
