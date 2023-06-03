// Pulled from: https://blog.centerkey.com/2013/05/javascript-colorized-pretty-print-json.html
export const prettyPrintJson = {
    toHtml: (jsonObject: any) => {
        const htmlEntities = (string: string) => {
            // Makes text displayable in browsers
            return string
                .replace(/&/g, '&amp;')
                .replace(/\\"/g, '&bsol;&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };

        const replacer = (match: any, p1: any, p2: any, p3: any, p4: any) => {
            // Converts the four parenthesized capture groups into HTML
            const part = { indent: p1, key: p2, value: p3, end: p4 };
            const key = '<span class=json-key>';
            const val = '<span class=json-value>';
            const bool = '<span class=json-boolean>';
            const str = '<span class=json-string>';
            const isBool = ['true', 'false'].includes(part.value);
            const valSpan = /^"/.test(part.value) ? str : isBool ? bool : val;
            const findName = /"([\w]+)": |(.*): /;
            const indentHtml = part.indent || '';
            const keyName = part.key && part.key.replace(findName, '$1$2');
            const keyHtml = part.key ? key + keyName + '</span>: ' : '';
            const valueHtml = part.value ? valSpan + part.value + '</span>' : '';
            const endHtml = part.end || '';
            return indentHtml + keyHtml + valueHtml + endHtml;
        };
        const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/mg;
        return htmlEntities(JSON.stringify(jsonObject, null, 3))
            .replace(jsonLine, replacer);
    }
};