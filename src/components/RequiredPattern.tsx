import { useValidation } from 'form-validator-react';
import React from 'react';

import '../styles.css'
import { ValidationConfig } from 'form-validator-react/dist/types';

export const RequiredPattern = () => {

  const  config: ValidationConfig = {
    fields: {
      pattern: {
        pattern: {
          value: /[a-z]/,
          message: 'Wrong pattern [a-z] required'
        },
      },
    }
  };

  const configExample = `
    config: ValidationConfig = {
    fields: {
      pattern: {
        pattern: {
          value: /[a-z]/,
          message: 'Wrong pattern [a-z] required'
        },
      },
    }
  };
  `;


  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- pattern</h3>

        <div className="field-wrapper">
          <label className="label" >Pattern [a-z]</label>
          <input
            className={`input ${ validity['pattern']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('pattern')} />

          { validity['pattern']?.isError &&
          <div className="message">
            {validity['pattern']?.message}
          </div>}
        </div>

        <button className="button" disabled={!isFormValid}>Submit</button>
      </form>
      <div className="config">
        <pre>{configExample}</pre>
      </div>
    </div>
  );
};