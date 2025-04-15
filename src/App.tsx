// App.tsx
import React, { useState } from 'react';
import Options from './Options';
import PasswordDisplay from './PasswordDisplay';
import './App.css';
import generatePassword from './passwordGenerator';

const App: React.FC = () => {
  const [numWords, setNumWords] = useState<number>(3);
  const [useCapitals, setUseCapitals] = useState<boolean>(false);
  const [useSpecialChar, setUseSpecialChar] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  function setPasswordToState() {
    generatePassword(
      numWords,
      useCapitals,
      useSpecialChar,
      useNumbers,
      setPassword);

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
        <h1>Password Generator</h1>
        <p>This password generator creates unique, memorable passwords using random words from different themes, optionally including numbers, capital letters, and special characters for added security.</p>
        <Options
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
