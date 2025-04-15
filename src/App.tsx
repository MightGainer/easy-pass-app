// App.tsx
import React, { useState } from 'react';
import Options from './Options';
import PasswordDisplay from './PasswordDisplay';
import './App.css';
import generatePassword from './passwordGenerator';

const App: React.FC = () => {
  const startingNumWords = 3;
  const startingUseCapitals = false;
  const startingUseSpecialChar = false;
  const startinguseNumbers = true;
  const [numWords, setNumWords] = useState<number>(startingNumWords);
  const [useCapitals, setUseCapitals] = useState<boolean>(startingUseCapitals);
  const [useSpecialChar, setUseSpecialChar] = useState<boolean>(startingUseSpecialChar);
  const [useNumbers, setUseNumbers] = useState<boolean>(startinguseNumbers);
  const [password, setPassword] = useState<string>(generatePassword(startingNumWords, startingUseCapitals, startingUseSpecialChar, startinguseNumbers));
  const [copied, setCopied] = useState<boolean>(false);

  function setPasswordToState() {
    let newPassword = generatePassword(
      numWords,
      useCapitals,
      useSpecialChar,
      useNumbers
    );

    setPassword(newPassword);
    setCopied(false); // Reset copied status when generating a new password
  }

  const copyToClipboard = async () => {
    try {
      if (password !== '') {
        await navigator.clipboard.writeText(password);
        setCopied(true);
      }
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="App">
      <div className="frame">
        <h1>Easy, secure and memorable passwords</h1>
        <p><b>This password generator</b> creates unique, memorable passwords using random words from different themes, optionally including numbers, capital letters, and special characters for added security.</p>
        <p>No data collected.</p>
        <Options
          generatePasswordCallback={setPasswordToState}
          numWords={numWords}
          setNumWords={setNumWords}
          useCapitals={useCapitals}
          setUseCapitals={setUseCapitals}
          useSpecialChar={useSpecialChar}
          setUseSpecialChar={setUseSpecialChar}
          useNumbers={useNumbers}
          setUseNumbers={setUseNumbers}
        />
        <div className="button-group">
          <button onClick={setPasswordToState}>Generate Password</button>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
        <PasswordDisplay password={password} copied={copied} />
      </div>
    </div>
  );
};

export default App;
