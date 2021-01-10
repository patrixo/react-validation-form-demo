import React from 'react';
import { useValidation } from 'form-validator-react';

import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css';

export const RequiredMinLengthMaxLength = () => {

  const config: ValidationConfig = {
    fields: {
      word: {
        minLength: {
          value: 3,
          message: 'too short'
        },
        maxLength: {
          value: 8,
          message: 'too long'
        }
      }
    }
  };

  const configExample = `
    config: ValidationConfig = {
      fields: {
        word: {
          minLength: {
            value: 3,
            message: 'too short'
          },
          maxLength: {
            value: 8,
            message: 'too long'
          }
        }
      }
    };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- minLength, maxLength</h3>

        <div className="field-wrapper">
          <label className="label" >Word</label>
          <input
            className={`input ${ validity['word']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('word')} />

          { validity['word']?.isError &&
          <div className="message">
            {validity['word']?.message}
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