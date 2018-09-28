export const padLeft = (str, len = 2, padStr = '0') =>
    (Array(len).fill(padStr).join('') + str).substr(0 - len);

export const padRight = (str, len = 2, padStr = '0') =>
    (str.toString() + Array(len).fill(padStr).join('')).substr(0, len);
