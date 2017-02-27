export default function infra(state = {}, action) {
  switch(action.type) {
    case 'infra:add':
      return {
        boxes: (state.boxes || []).concat(action.box)
      }
    default:
      return state;
  }
}
