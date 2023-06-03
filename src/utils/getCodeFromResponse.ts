const extractJSONObjectFromString = (str: string) => {
    let startIndex = str.indexOf('{');
    let endIndex = str.lastIndexOf('}');

    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
        const jsonString = str.substring(startIndex, endIndex + 1);

        try {
            const jsonObject = JSON.parse(jsonString);
            return jsonObject;
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }

    return null;
}

export const getCodeFromText = (text: string) => {
    try {
        const parsed = JSON.parse(text);
        return parsed;
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }

    try {
        const jsonObject = extractJSONObjectFromString(text);
        return jsonObject;
    } catch {}

    return null;
};
