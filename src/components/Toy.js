import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

class Toy extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
    name:              PropTypes.string.isRequired,
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div className={`toy ${this.props.name} ${this.props.className}`} onMouseDown={this.props.onMouseDown} style={{opacity: opacity}}>
          {this.props.children}
        </div>
      )
    )
  }
}

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`,
      );
    }
  },
};

export default DragSource('toy', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Toy)
