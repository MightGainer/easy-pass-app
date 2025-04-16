interface OptionsProps {
    generatePasswordCallback: CallableFunction;
    numWords: number;
    setNumWords: React.Dispatch<React.SetStateAction<number>>;
    useCapitals: boolean;
    setUseCapitals: React.Dispatch<React.SetStateAction<boolean>>;
    useSpecialChar: boolean;
    setUseSpecialChar: React.Dispatch<React.SetStateAction<boolean>>;
    useNumbers: boolean;
    setUseNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
const Options: React.FC<OptionsProps> = ({
    generatePasswordCallback,
    numWords,
    setNumWords,
    useCapitals,
    setUseCapitals,
    useSpecialChar,
    setUseSpecialChar,
    useNumbers,
    setUseNumbers
}) => {
    return (
      <div className="options">
        <label>
          Number of words:
          <input
            type="number"
            value={numWords}
            min="1"
            max="10"
            onChange={
                (e) => {
                    setNumWords(parseInt(e.target.value) || 3);
                    generatePasswordCallback();
                }
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={useCapitals}
            onChange={
                (e) => {
                    setUseCapitals(e.target.checked);
                    generatePasswordCallback();
                }
            }
          />
          Include Capitals
        </label>
        <label>
          <input
            type="checkbox"
            checked={useSpecialChar}
            onChange={
                (e) => {
                    setUseSpecialChar(e.target.checked);
                    generatePasswordCallback();
                }
            }
          />
          Include Special Characters
        </label>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={
                (e) => {
                    setUseNumbers(e.target.checked);
                    generatePasswordCallback();
                }
            }
          />
          Include Numbers
        </label>
      </div>
    );
  };
  
  export default Options;
  