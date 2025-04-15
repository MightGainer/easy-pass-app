import React from 'react';

interface PasswordDisplayProps {
  password: string;
  copied: boolean;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, copied }) => {
  return (
    <div className="output">
      <p>
        {password} {copied && <span role="img" aria-label="copied">✅</span>}
      </p>
    </div>
  );
};

export default PasswordDisplay;
