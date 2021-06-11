import React from 'react';
import './History.scss';

export function History(props:any)
{
    let list:Element = document.createElement('ul'); 
    for (let item in props.list) {
        let li = <li>{item.toString()}</li>;
        let l = document.createElement('li');
        l.innerHTML = item;
        list.appendChild(l);
    }
    return(
        <div className="div-history">
        </div>
    )
}