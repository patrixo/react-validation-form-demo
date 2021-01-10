import React from 'react';

import { useValidation } from 'form-validator-react';
import { ValidationConfig } from 'form-validator-react/dist/types';

import '../styles.css';

export const RequiredBiggerThanLowerThan = () => {

  const config: ValidationConfig = {
    fields: {
      num2: {
        biggerThan: {
          fieldname: 'num1',
          message: 'num 2 must be bigger than num1'
        },
      },
      num3: {
        lowerThan: {
          fieldname: 'num1',
          message: 'num 3 must be lower than num1'
        },
      }
    }
  };

  const configExample = `
  config: ValidationConfig = {
    fields: {
      num2: {
        biggerThan: {
          fieldname: 'num1',
          message: 'num 2 must be bigger than num1'
        },
      },
      num3: {
        lowerThan: {
          fieldname: 'num1',
          message: 'num 3 must be lower than num1'
        },
      }
    }
  };
  `;

  const { useGetValue, isFormValid, validity } = useValidation(config);

  return (
    <div className="validation-case-wrapper">
      <form className="form">
        <h3 className="validation-rule">- biggerThan, lowerThan</h3>

        <div className="field-wrapper">
          <label className="label" >num 1</label>
          <input
            className={`input ${ validity['num1']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('num1')} />
        </div>

        <div className="field-wrapper">
          <label className="label" >num 2</label>
          <input
            className={`input ${ validity['num2']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('num2')} />

          { validity['num2']?.isError &&
          <div className="message">
            {validity['num2']?.message}
          </div>}
        </div>

        <div className="field-wrapper">
          <label className="label" >num 3</label>
          <input
            className={`input ${ validity['num3']?.isError ? 'error' : ''}`}
            type="text"
            {...useGetValue('num3')} />

          { validity['num3']?.isError &&
          <div className="message">
            {validity['num3']?.message}
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