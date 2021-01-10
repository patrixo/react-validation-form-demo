import React from 'react';

import { useValidation } from 'form-validator-react';
import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'


export const RequiredEmail = () => {

  const config: ValidationConfig = {
    fields: {
      email: {
        email: {
          message: 'Wrong format of email address'
        }
      }
    }
  };

  const configExample = `
    config: ValidationConfig = {
      fields: {
        email: {
          email: {
            message: 'Wrong format of email address'
          }
        }
      }
    };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- email</h3>

        <div className="field-wrapper">
          <label className="label" >Email</label>
          <input
            className={`input ${ validity['email']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('email')} />

          { validity['email']?.isError &&
          <div className="message">
            {validity['email']?.message}
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