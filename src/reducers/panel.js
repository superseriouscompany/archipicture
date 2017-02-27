export default function panel(state = {}, action) {
  switch(action.type) {
    case 'panel:show':
      return {
        ...state,
        visible: true,
        title: action.title || 'Create Box',
        box: action.box,
        panelType: action.panelType,
      }
    case 'panel:hide':
      return {
        ...state,
        visible: false,
      }
    default:
      return state;
  }
}
