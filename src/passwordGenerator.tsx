import { passwordThemes } from './passwordThemes';

function getRandomElement(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomThemeWord() {
    const themeKeys = Object.keys(passwordThemes);
    const randomTheme = getRandomElement(themeKeys);
    return getRandomElement(passwordThemes[randomTheme as keyof typeof passwordThemes]).toLowerCase();
}

function generatePassword(
    numWords: number, 
    useCapitals: boolean, 
    useSpecialChar: boolean, 
    useNumbers: boolean,
    setPassword: CallableFunction
) {
    let parts: string[] = [];

    for (let i = 0; i < numWords; i++) {
        parts.push(getRandomThemeWord());
    }

    if (useNumbers) {
        const randomIndexForNumber = Math.floor(Math.random() * parts.length);
        const randomNumber = Math.floor(100 + Math.random() * 9000);
        parts.splice(randomIndexForNumber, 0, randomNumber.toString());
    }
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    if (useSpecialChar) {
        const randomIndexForSymbol = Math.floor(Math.random() * parts.length);
        const randomSymbol = getRandomElement(symbols.split(''));

        if (Math.random() < 0.5) {
            parts[randomIndexForSymbol] = randomSymbol + parts[randomIndexForSymbol];
        } else {
            parts[randomIndexForSymbol] = parts[randomIndexForSymbol] + randomSymbol;
        }
    }

    if (useCapitals) {
        const randomIndexForCapital = Math.floor(Math.random() * parts.length);
        parts[randomIndexForCapital] = parts[randomIndexForCapital].charAt(0).toUpperCase() + parts[randomIndexForCapital].slice(1);

        const randomIndexForSymbolCapital = Math.floor(Math.random() * symbols.length);
        parts = parts.map(part => part.replace(symbols[randomIndexForSymbolCapital], symbols[randomIndexForSymbolCapital].toUpperCase()));
    }

    setPassword(parts.join('-'));
}

export default generatePassword;
