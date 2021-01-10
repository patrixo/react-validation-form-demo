import React from 'react';

import { RequiredTrue } from './components/RequiredTrue';
import { RequiredValue } from './components/RequiredValue';
import { RequiredMinMax } from './components/RequiredMinMax';
import { Required } from './components/Required';
import { RequiredEmail } from './components/RequiredEmail';
import { RequiredMinLengthMaxLength } from './components/RequiredMinMaxLength';
import { RequiredPattern } from './components/RequiredPattern';
import { RequiredEqual } from './components/RequiredEqual';
import { RequiredBiggerThanLowerThan } from './components/RequiredBiggerThanLowerThan';
import { RequiredNotEqual } from './components/RequiredNotEqual';

function App() {
  return (
    <div className="app">
      <h1>Validation cases</h1>
      <Required />
      <hr/>
      <RequiredTrue />
      <hr/>
      <RequiredValue />
      <hr/>
      <RequiredMinMax />
      <hr/>
      <RequiredEmail />
      <hr/>
      <RequiredMinLengthMaxLength />
      <hr/>
      <RequiredPattern />
      <hr/>
      <RequiredEqual />
      <hr/>
      <RequiredNotEqual />
      <hr/>
      <RequiredBiggerThanLowerThan />
    </div>
  );
}

export default App;
