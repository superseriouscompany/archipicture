export default function panel(state = {}, action) {
  switch(action.type) {
    case 'panel:show':
      state = {
        ...state,
        visible: true,
      }
      return state;
    case 'panel:hide':
      state = {
        ...state,
        visible: false,
      }
      return state
    default:
      return state;
  }
}
