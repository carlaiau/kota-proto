
// This is the function that is dispatched and called when there are actual changes to the data on the panels
export const editProposal = (id, key, value) => ({
    type: 'EDIT_PROPOSAL',
    id,
    key,
    value
})
