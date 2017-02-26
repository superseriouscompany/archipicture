export default function panel(state = {}, action) {
  switch(action.type) {
    case 'panel:show':
      return {
        ...state,
        visible: true,
      }
      return state;
    case 'panel:hide':
      return {
        ...state,
        visible: false,
      }
    default:
      return state;
  }
}
