// The Screen can also act as the connect container

import { connect } from 'react-redux'
import { editProposal } from '../actions'
import ProposalList from '../components/ProposalList'


// Don't need filtering yet
const getFilteredProposals = (proposals, filter) => {
    return proposals
}

const mapStateToProps = state => ({
    proposals: getFilteredProposals(state.proposals, () => { })
})

const mapDispatchToProps = dispatch => ({
    editProposal: (id, key, value) => dispatch(editProposal(id, key, value))
})

const Proposals = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProposalList)

export default Proposals