import { useState } from "react";
import styled from "styled-components";



const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`
const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        max-width: 150px;
        padding:16px 32px;
        border: 1px solid gray;
        font-size: 18px;
    }
    label{
        font-size: 1.5rem;
        font-weight: 100;
        padding: 10px 0;
    }

`

const StyledButton = styled.button`
    border: none;
    background-color: lightgrey;
    padding:10px 30px;
    border-radius: 30px;
    font-size: 1.5rem;
    max-width:300px;
    margin-top: 2rem;
    &:hover{
        color:white;
        cursor:pointer;
        
    }

`

const StyledResult = styled.div`
    font-size: 2rem;
    text-align: center;
    padding: 16px 0;
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;

`

const ErrorField = styled.span`
    color:red;
    font-style: italic;
    font-size: 12px;
`

const CopyButton = styled.span`
    font-size: 12px;
    font-weight: 700;
    background-color: lightgray;
    padding: 5px 20px;
    &:hover{
        cursor: pointer;
        color:white;
    }
`



export default function Form(){
    const [isDisabled, setIsDisabled] = useState(false);
    const [result, setResult] = useState('');
    const [color, setColor] = useState('black');
    const [copied, setCopied] = useState(false);
    const [firstInputField, setFirstInputField] = useState('');
    const [secondInputField, setSecondInputField] = useState('');


    function validateFields(input){
        const numbersRegex = /^-?\d*\.?\d+$/;
        if(input.match(numbersRegex)){
            return true;
        }else{
            return false;
        }
    }

    function handlefirstInputChange(e){
        if(!validateFields(e.target.value)){
            setFirstInputField('Can only accept numbers')
        }else{
            setFirstInputField('')
        }
    }
    function handlesecondInputChange(e){
        if(!validateFields(e.target.value)){
            setSecondInputField('Can only accept numbers')
        }else{
            setSecondInputField('')
        }
    }


    function handleSubmit(e){
        e.preventDefault();
        const oldPrice = e.target.old.value;
        const newPrice = e.target.new.value;
        const procentage = ((newPrice - oldPrice) / oldPrice) * 100;
        setColor(procentage > 0 ? 'green' : 'red');
        setResult(procentage.toString().slice(0,5) + ' %');
    }

    function handleCopy(){
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(function(){
            setCopied(false)
        }, 1000);
    }

    return(
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput>
                    <label htmlFor="oldPrice">Old price</label>
                    <input onChange={handlefirstInputChange} type="text" name='old' placeholder="Old price" id='oldPrice'/>
                    <ErrorField>{firstInputField}</ErrorField>
                </StyledInput>
                <StyledInput>
                    <label htmlFor="newPrice">New price</label>
                    <input onChange={handlesecondInputChange} type="text" placeholder="Old price" name='new' id='newPrice'/>
                    <ErrorField>{secondInputField}</ErrorField>
                </StyledInput>
                <StyledButton type="submit" disabled={isDisabled}>Calculate</StyledButton>
            </StyledForm>
            <StyledResult>
                <p>Result:</p>
                <span style={{color: color}}>{result}</span>
                <CopyButton onClick={handleCopy}>Copy result</CopyButton>
                {copied && <span style={{color: 'green', fontSize: '10px', position:'absolute', bottom:0, left:'50%', transform:'translate(-50%)'}}>Copied!</span>}
            </StyledResult>
        </>
    ) 
    
}