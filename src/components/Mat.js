import React, { Component, PropTypes } from 'react'
import {DropTarget} from 'react-dnd'

class Mat extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'hotpink';
    } else if (canDrop) {
      backgroundColor = 'cornflowerblue';
    }

    return connectDropTarget(
      <div className="mat" style={{backgroundColor}}>
        {isActive ?
          'Release to drop' :
          'Drag a box here'
        }
      </div>,
    );
  }
}

const boxTarget = {
  drop() {
    return { name: 'Mat' };
  },
};

export default DropTarget('toy', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Mat)
