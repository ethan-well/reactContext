import React from 'react';
import PropTypes from 'prop-types';

export default class SubSub extends React.Component {
  render() {
    const style = { color: this.context.color }
    const cb = (msg) => {
      return () => {
        this.context.callback(msg);
      }
    }

    return(
      <div style = { style }>
        this is SubSub
        <button onClick = { cb('使用 context 实现跨组件通讯')}>跨组件通讯</button>
      </div>
    )
  }

}

// 自组件声明自己需要使用 context
SubSub.contextTypes = {
  color: PropTypes.string,
  callback: PropTypes.func,
}
