import React from 'react';
import SubSub from './SubSub';

// 无状态组件： 由无状态函数声明的组件
const Sub = (props) => {
  return(
    <div>
      <SubSub />
    </div>
  )
}

export default Sub;
