import api from '../api';

describe('Dummy Test Suite', ()=>{
    it('is a dummy test', ()=>{
        let expected = true;
        let actual = api.dummy_function();
        expect(actual).toBe(expected);
    })
    it('adj hozzá egy emailt', ()=> {
        let email = 'asd@gmail.com';
        const expected = 'a**@gmail.com';
        const actual = api.EmailMasking(email);
        expect(actual).toBe(expected);
    });
})