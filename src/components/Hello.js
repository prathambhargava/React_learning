import React from "react";

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Jsx</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'hello Effigo'))
}
export default Hello