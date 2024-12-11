import React from 'react'

const Hello = () =>{
//return(
 //   <div className='dummyClass'>
 //       <h1>Hello Faith</h1>
 //   </div>
//)
return React.createElement(
    'div',
    {id:'Hello', className:'dummyClass'},
    React.createElement('h1',null,'Hello Faith'))
}

export default Hello