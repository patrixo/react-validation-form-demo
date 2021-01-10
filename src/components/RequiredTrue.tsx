import React from 'react';
import { useValidation } from 'form-validator-react';

import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'

export const RequiredTrue = () => {

  const config: ValidationConfig = {
    fields: {
      username: {
        requiredTrue: { message: 'Required checked' },
      },
    }
  };

  const configExample = `
    config: ValidationConfig = {
    fields: {
      username: {
        requiredTrue: { message: 'Required checked' },
      },
    }
  };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- requiredTrue</h3>
        <div className="field-wrapper">
          <label className="label" >Required checked</label>
          <input
            className={`input ${ validity['username']?.isError ? 'error' : ''}`}
            type="checkbox"
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