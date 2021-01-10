import React from 'react';

import { useValidation } from 'form-validator-react';
import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'

export const Required = () => {

  const config: ValidationConfig = {
    fields: {
      username: {
        required: { message: 'Field is required' },
      },
    }
  };

  const configExample = `
   config: ValidationConfig = {
      fields: {
        username: {
          required: { message: 'Field is required' },
        },
      }
    };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- required</h3>

        <div className="field-wrapper">
          <label className="label" >User name</label>
          <input
            className={`input ${ validity['username']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('username')} />

          { validity['username']?.isError &&
          <div className="message">
            {validity['username']?.message}
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