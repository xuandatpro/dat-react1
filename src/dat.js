import React from 'react';
function Dat(){
    const list = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ];
      const sidebar=(
        <ul>
            {list.map((list)=>
            <li key={list.id}>
                {list.title}
            </li>
            )}
        </ul>
       );
    return(
        <div className="App">
          
          <h1>{list.title}</h1>
          <p>{list.content}</p>
          <div>
          {sidebar}
          <hr/>
          
          </div>
        </div>
    )
}
export default Dat