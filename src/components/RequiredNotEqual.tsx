import React from 'react';
import { useValidation } from 'form-validator-react';

import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css'

export const RequiredNotEqual = () => {

  const config: ValidationConfig = {
    fields: {
      word2: {
        notEqual: {
          fieldname: 'word1',
          message: 'word 1 and word 2 cannot be the same'
        }
      }
    }
  };

  const configExample = `
    config: ValidationConfig = {
    fields: {
      word2: {
        notEqual: {
          fieldname: 'word1',
          message: 'word 1 and word 2 cannot be the same'
        }
      }
    }
  };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- notEqual</h3>

        <div className="field-wrapper">
          <label className="label" >word 1</label>
          <input
            className={`input ${ validity['word1']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('word1')} />
        </div>

        <div className="field-wrapper">
          <label className="label" >word 1</label>
          <input
            className={`input ${ validity['word2']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('word2')} />

          { validity['word2']?.isError &&
          <div className="message">
            {validity['word2']?.message}
          </div>}
        </div>

        <button className="button" disabled={!isFormValid}>Submit</button>
      </form>
      <div className="config">
        <pre>
          {configExample}
        </pre>
      </div>
    </div>
  );
};