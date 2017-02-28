export default function mat(state = {}, action) {
  switch(action.type) {
    case 'mat:addBox':
      return {
        ...state,
        box: action.box,
      }
    default:
      return state
  }
}
