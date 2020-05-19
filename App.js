import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated } from 'react-native';
import _ from 'lodash'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toCloseAfterAnimation: null,
      activeProposal: null,
      proposals: [
        {
          id: 1,
          name: "Carl Aiau",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),

        },
        {
          id: 2,
          name: "Roger Federer",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),

        },
        {
          id: 3,
          name: "Joe Rogan",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        },
        {
          id: 4,
          name: "Michael Jordan",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        },
        {
          id: 5,
          name: "Joe Exotic",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        },
        {
          id: 6,
          name: "Mark Zuckerberg",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        },
        {
          id: 7,
          name: "Allen Iverson",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        },
        {
          id: 8,
          name: "Steve Jobs",
          toggleActive: {
            info: false,
            contacts: false,
            finance: false,
          },
          animation: new Animated.Value(0),
        }
      ]
    }
  }


  openToggle = ({ id, type }) => {
    const mutatedProposals = this.state.proposals
    const proposalToOpen = _.find(mutatedProposals, { id: id })
    let toggleWasActive = false
    // no current active proposal exists
    if (!this.state.activeProposal) {
      proposalToOpen.toggleActive[type] = true
      return this.setState({
        activeProposal: id,
        proposals: mutatedProposals,
      }, () => {
        Animated.timing(proposalToOpen.animation, { toValue: 400, duration: 500 }).start()
      })
    }

    // You have clicked another tab in the same proposal
    else if (this.state.activeProposal == id) {
      _.forEach(proposalToOpen.toggleActive, (value, key) => {
        if (key == type) {
          if (value)
            toggleWasActive = true // This exact toggle is already active
          proposalToOpen.toggleActive[key] = !value
        }
        else
          proposalToOpen.toggleActive[key] = false
      })

      if (toggleWasActive)
        Animated.timing(proposalToOpen.animation, { toValue: 0, duration: 500 }).start(() => this.setState({
          activeProposal: null,
          proposals: mutatedProposals,
        }))

      else
        return this.setState({
          activeProposal: id,
          proposals: mutatedProposals,
        })

    }

    // We're opening another proposal
    else {
      const proposalToClose = _.find(mutatedProposals, { id: this.state.activeProposal })
      proposalToOpen.toggleActive[type] = true
      return this.setState({
        proposals: mutatedProposals,
        activeProposal: id,
        toCloseAfterAnimation: this.state.activeProposal
      }, () => {
        Animated.parallel([
          Animated.timing(proposalToClose.animation, { toValue: 0, duration: 500 }),
          Animated.timing(proposalToOpen.animation, { toValue: 400, duration: 500 })
        ])
          .start(this.cleanStateAfterAnimation)
      })

    }
  }


  cleanStateAfterAnimation = () => {
    const { proposals, toCloseAfterAnimation } = this.state
    const proposalToClose = _.find(proposals, { id: toCloseAfterAnimation })

    // Now remove the old proposal.toggleActives
    _.forEach(proposalToClose.toggleActive, (v, k) => {
      proposalToClose.toggleActive[k] = false
    })

    return this.setState({
      proposals,
      toCloseAfterAnimation: null
    })
  }




  render() {
    return (
      <View style={styles.container}>
        <FlatList

          data={this.state.proposals}
          renderItem={({ item }) => (
            <>
              <View style={styles.proposalRow}>
                <Text>{item.name}</Text>
                <View style={styles.proposalActionContainer}>
                  <TouchableOpacity style={styles.button} onPress={
                    () => this.openToggle({ id: item.id, type: 'info' })
                  }>
                    <Text style={styles.buttonText}>Info</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={
                    () => this.openToggle({ id: item.id, type: 'contacts' })
                  }>
                    <Text style={styles.buttonText}>Contacts</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={
                    () => this.openToggle({ id: item.id, type: 'finance' })
                  }>
                    <Text style={styles.buttonText}>Finance</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {<Animated.View style={{
                height: item.animation,
                backgroundColor: item.toggleActive.info ? 'red' : item.toggleActive.contacts ? 'green' : item.toggleActive.finance ? 'blue' : 'white'
              }}>
                <>
                  {item.toggleActive.info && (
                    <View style={styles.toggleActive}>
                      <Text style={styles.toggleActiveText}>Info</Text>
                    </View>
                  )
                  }
                </>
                <>
                  {item.toggleActive.contacts && (
                    <View style={styles.toggleActive}>
                      <Text style={styles.toggleActiveText}>Contacts</Text>
                    </View >
                  )
                  }
                </>
                <>
                  {item.toggleActive.finance && (
                    <View style={styles.toggleActive}>
                      <Text style={styles.toggleActiveText}>Finance</Text>
                    </View >
                  )
                  }
                </>
              </Animated.View>}
            </>
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </View>
    );
  }
}

export default App

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
