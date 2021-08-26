const googleSearch = require('./script');

mockDb = [
    'dogs.com',
    'cats.com',
    "animal.com",
    "myfavoritedog.com",
    "blackdogs.com"
];

describe('googleSearch', () => {

    it('this is test', () => {
        expect('hello').toBe('hello')
    })

    it('is searching google', () => {
        expect(googleSearch('test', mockDb)).toEqual([]);
        expect(googleSearch('dog', mockDb)).toEqual(['dogs.com', "myfavoritedog.com"]);
    })

    it('works with undefined and null inputs', () => {
        expect(googleSearch(undefined, mockDb)).toEqual([]);
        expect(googleSearch(null, mockDb)).toEqual([]);
    })

    it('does not return more than 2 values', () => {
        expect(googleSearch('dog', mockDb).length).toEqual(2);
    })

})