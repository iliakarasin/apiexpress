const sampleSchema = `{
    "id": "UUID",
    "name": "full name, including middle initial",
    "birthDate": "YYYY-MM-DD",
}`;

export const sampleData = {
    url: '/api/persons',
    prompt: 'List of Persons with birthdays in June',
    schema: sampleSchema,
    count: 2,
};
