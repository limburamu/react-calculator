import React, { useState } from 'react'
import Button from './Button';
import '../styles/ButtonListStyles.css';
import Input from './Input';

import * as math from 'mathjs';

const ButtonList = () => {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');


    const addToText = (val) => {
        setText((text) => [...text, val + '']);
    }


    // const calculateResult = () => {
    //     const input = text.join('');

    //     setResult(math.evaluate(input));
    // };

    const calculateResult = () => {
        const input = text.join('');
        try{
            setResult(math.evaluate(input));
        }
        catch(err) {
            setResult('Error')
        }
        
    }


    const resetInput = () => {
        setText('');
        setResult('');
    };


    const deleteLast = () => {
        if(text == '') {
            return;
        }

        const val = text.slice(0, -1)

        setText(val);
    }

    const buttonColor = '#f2a33c'
    return (
        <div className='Main'>
            <div className='calc-wrapper'>
                <Input text={text} result={result} />
                <div className='row'>
                    <Button symbol='7' handleClick={addToText} />
                    <Button symbol='8' handleClick={addToText} />
                    <Button symbol='9' handleClick={addToText} />
                    <Button symbol='/' color={buttonColor} handleClick={addToText} />
                </div>
                <div className='row'>
                    <Button symbol='4' handleClick={addToText} />
                    <Button symbol='5' handleClick={addToText} />
                    <Button symbol='6' handleClick={addToText} />
                    <Button symbol='*' color={buttonColor} handleClick={addToText} />
                </div>
                <div className='row'>
                    <Button symbol='1' handleClick={addToText} />
                    <Button symbol='2' handleClick={addToText} />
                    <Button symbol='3' handleClick={addToText} />
                    <Button symbol='+' color={buttonColor} handleClick={addToText} />
                </div>
                <div className='row'>
                    <Button symbol='0' handleClick={addToText} />
                    <Button symbol='.' handleClick={addToText} />
                    <Button symbol='=' handleClick={calculateResult} />
                    <Button symbol='-' color={buttonColor} handleClick={addToText} />
                </div>
                <div className='extra'>
                    <Button symbol='Clear' color='red' handleClick={resetInput} />
                    <Button symbol='Del' color='orange' handleClick={deleteLast}/>
                </div>
            </div>
        </div>
    )
}

export default ButtonList
