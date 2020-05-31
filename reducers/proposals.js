const initalProposals = [
    {
        id: 1,
        name: "Carl Aiau",
        info: {
            age: '27',
            place_of_birth: 'Dunedin'
        },
        contacts: {
            partner: 'sez',
            next_of_kin: 'molly'
        },
        finance: {
            bank_balance: 100,
            credit_cards: 18
        },

    },
    {
        id: 2,
        name: "Roger Federer",
        info: {
            age: '55',
            place_of_birth: 'Switzerland'
        },
        contacts: {
            partner: 'Some Lady',
            next_of_kin: 'Mrs Federer'
        },
        finance: {
            bank_balance: 99999,
            credit_cards: 0
        },
    },
    {
        id: 3,
        name: "Joe Rogan",
        info: {
            age: '45',
            place_of_birth: 'Brooklyn'
        },
        contacts: {
            partner: 'Mrs Rogan',
            next_of_kin: 'That dog'
        },
        finance: {
            bank_balance: 5000,
            credit_cards: 2
        },
    },
    {
        id: 4,
        name: "Michael Jordan",
        info: {
            age: '59',
            place_of_birth: 'Kansas'
        },
        contacts: {
            partner: 'Divorced',
            next_of_kin: 'Mr Jordan'
        },
        finance: {
            bank_balance: 700000,
            credit_cards: 5
        },
    }
]


const proposals = (state = initalProposals, action) => {
    switch (action.type) {

        case 'EDIT_Proposal':
            console.log("Action is reaching reducer", action)
            return state.map(proposals =>
                proposals.id === action.id
                    ?
                    {
                        ...proposals,
                        // Overwrites the specific key value pair that we're updating
                        // Hard code this to a value to ensure that your frontend panel is not just showing the local state    
                        [action.key]: action.value
                    }
                    : todo)
        default:
            return state
    }
}

export default proposals