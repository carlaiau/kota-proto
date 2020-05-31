import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ProposalList = ({ proposals, editProposal }) => (
    <View style={styles.container}>
        <FlatList
            data={proposals}
            renderItem={({ item }) => (
                <>
                    <View style={styles.proposalRow}>
                        <Text>{item.name}</Text>

                    </View>
                </>
            )}
        />
    </View>
)
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
    },
    toggleActive: {
        flex: 1,
        width: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleActiveText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    }
});
