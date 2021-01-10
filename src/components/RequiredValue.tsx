import React from 'react';

import { useValidation } from 'form-validator-react/dist';
import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'

export const RequiredValue = () => {

  const config: ValidationConfig = {
    fields: {
      username: {
        requiredValue: {
          value: 'John',
          message: 'Username must be John'
        }
      },
      checkbox: {
        requiredValue: {
          value: false,
          message: 'This cannot be checked'
        }
      }
    }
  };

  const configExample = `
    config: ValidationConfig = {
      fields: {
        username: {
          requiredValue: {
            value: 'John',
            message: 'Username must be John'
          }
        },
        checkbox: {
          requiredValue: {
            value: false,
            message: 'This cannot be checked'
          }
        }
      }
    };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- requiredValue</h3>
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

        <div className="field-wrapper">
          <label className="label" >Cannot be checked</label>
          <input
            defaultChecked={true}
            className={`input ${ validity['checkbox']?.isError ? 'error' : ''}`}
            type="checkbox"
            {...useGetValue('checkbox')} />

          { validity['checkbox']?.isError &&
          <div className="message">
            {validity['checkbox']?.message}
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