
// This is the function that is dispatched and called when there are actual changes to the data on the panels
export const editTodo = (id, key, value) => ({
    type: 'EDIT_TODO',
    id,
    key,
    value
})
