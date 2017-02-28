import React, { Component, PropTypes } from 'react'
import {DropTarget} from 'react-dnd'
import { connect } from 'react-redux';

class Mat extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const { box } = this.props;
    const isActive = canDrop && isOver;

    let className = "mat";
    if (isActive) {
      className += ' dropactive';
    } else if (canDrop) {
      className += ' droptarget';
    }

    return connectDropTarget(
      <div className={className}>
        { box ?
          box.name
        : isActive ?
          'Release to drop'
        :
          'drag a lil box in'
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

const droppable = DropTarget('toy', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Mat)

export default connect(mapStateToProps)(droppable)

function mapStateToProps(state) {
  return {
    box: state.mat.box,
  };
}
