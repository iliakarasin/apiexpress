import md5 from 'crypto-js/md5';

export const hash = (string: string) => {
    return md5(string).toString();
};
