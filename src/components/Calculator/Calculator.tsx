import React from 'react';
import './Calculator.scss';
import {Button} from './../Button/Button';
import {TextInput} from './../TextInput/TextInput';
import {useState} from 'react';

enum Operation{
    '+',
    '-',
    '*',
    '/'
}

function doOperation(operation:Operation, a:number, b:number):string
{
    switch(operation) {
        case 0: {
            return (a + b).toString();
        }
        case 1: {
            return (a - b).toString();
        }
        case 2: {
            return (a * b).toString();
        }
        case 3: {
            if (b === 0) {
                alert("Nulou nelze dělit.");
                return "";
            }
            else {
                return (a / b).toString();
            }
        }
        default: return "";
    }
}

export function Calculator(props: any):any {
    const[openedNumber, setOpenedNumber] = useState('');
    const [operation, setOperation] = useState(0);
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [storedOperation, setStoredOperation] = useState('');

    const addNumber = (n:string) => setOpenedNumber(() => openedNumber + n);
    const processOperation = (o:Operation) => {setOperation(o); setStoredOperation(openedNumber + " " + Operation[o] + " "); seta(parseFloat(openedNumber)); setToEmpty()};
    console.log(storedOperation);
    const setToEmpty = () => setOpenedNumber(() => "");

    return( 
    <div className="div-calculator">
        <TextInput className="calculator-input" name='upperInput' value={openedNumber}></TextInput> <br />
        <Button className="button-number" onClick={():void => addNumber("1")}>1</Button>
        <Button className="button-number" onClick={():void => addNumber("2")}>2</Button>
        <Button className="button-number" onClick={():void => addNumber("3")}>3</Button>
        <Button className="button-operation" onClick={():void => processOperation(0)}>+</Button> <br />
        <Button className="button-number" onClick={():void => addNumber("4")}>4</Button>
        <Button className="button-number" onClick={():void => addNumber("5")}>5</Button>
        <Button className="button-number" onClick={():void => addNumber("6")}>6</Button>
        <Button className="button-operation" onClick={():void => processOperation(1)}>-</Button> <br />
        <Button className="button-number" onClick={():void => addNumber("7")}>7</Button>
        <Button className="button-number" onClick={():void => addNumber("8")}>8</Button>
        <Button className="button-number" onClick={():void => addNumber("9")}>9</Button>
        <Button className="button-operation" onClick={():void => processOperation(2)}>*</Button> <br />
        <Button className="button-number" onClick={():void => addNumber("0")}>0</Button>
        <Button className="button-number" onClick={():void => addNumber(".")}>.</Button>
        <Button className="button-operation" onClick={():void => setToEmpty()}>C</Button>
        <Button className="button-operation" onClick={():void => processOperation(3)}>/</Button> <br />
        <Button className="button-result" 
        onClick={
        ():void => {
        let bLocal = parseFloat(openedNumber);
        setb(bLocal);
        setOpenedNumber(doOperation(operation, a, bLocal));
        setStoredOperation(storedOperation + openedNumber + " = " + doOperation(operation, a, bLocal));
        props.onCalculated(storedOperation + openedNumber + " = " + doOperation(operation, a, bLocal));
        }}>Spočítat</Button>
    </div>)
}