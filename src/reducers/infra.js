export default function infra(state = {}, action) {
  switch(action.type) {
    case 'infra:add':
      return {
        boxes: (state.boxes || []).concat(action.box)
      }
    case 'infra:update':
      return {
        boxes: (state.boxes || []).map((b) => {
          if( b.id !== action.box.id ) { return b; }
          return Object.assign({}, b, action.box)
        })
      }
    default:
      return state;
  }
}
