import React from 'react';

import { useValidation } from 'form-validator-react/dist';
import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'

export const RequiredMinMax = () => {

  const config: ValidationConfig = {
    fields: {
      age: {
        min: {
          value: 20,
          message: 'You are too young'
        },
        max: {
          value: 100,
          message: 'You are old'
        }
      }
    }
  };


  const configExample = `
  config: ValidationConfig = {
    fields: {
      age: {
        min: {
          value: 20,
          message: 'You are too young'
        },
        max: {
          value: 100,
          message: 'You are old'
        }
      }
    }
  };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- min, max</h3>

        <div className="field-wrapper">
          <label className="label" >User age</label>
          <input
            className={`input ${ validity['age']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('age')} />

          { validity['age']?.isError &&
          <div className="message">
            {validity['age']?.message}
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