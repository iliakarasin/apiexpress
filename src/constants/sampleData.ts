const sampleSchema = `{
    "Person": "String",
    "BirthDate": "Date",
    "id": "GUID"
}`;

export const sampleData = {
    url: '/api/persons',
    prompt: 'List of Persons with birthdays in June',
    schema: sampleSchema,
    count: 2,
};
