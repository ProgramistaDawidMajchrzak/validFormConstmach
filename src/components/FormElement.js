import React from 'react';
import './FormElement.css';

export default function FormElement(props) {
    const { labelType, inputType, inputPlaceholder, name } = props;
    return (
        <>
            <div className="form-box">
                <label htmlFor={labelType}>{labelType}</label>
                <input id={labelType} type={inputType} placeholder={inputPlaceholder} name={name} />
            </div>
        </>
    )
}
