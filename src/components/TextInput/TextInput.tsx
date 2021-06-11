import React from 'react';
import './TextInput.scss';

export function TextInput(props: any):any {
    return <input type="text" value={props.value}></input>;
}