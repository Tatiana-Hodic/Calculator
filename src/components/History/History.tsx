import React from 'react';
import './History.scss';

export function History(props:any):any
{
    let list:string[] = [];
    let iterations:number = props.maxLength;

    while(iterations > 0)
    {
        if(props.list[iterations])
        {
            list.push(props.list[iterations]);
        }
        iterations--;
    }

    return(
        <div className="div-history">
            <h1>Historie:</h1>
                {list.map((item:string) => <p>{item}</p>)}
        </div>
    )
}