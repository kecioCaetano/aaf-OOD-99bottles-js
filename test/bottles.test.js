import {VerseFake,CountdownSong} from '../lib/bottles'

describe('CountdownSong', () => {

    test('verses', () =>{
        const expected = 
        'This is verse 99.\n'+
        '\n'+
        'This is verse 98.\n'+
        '\n'+
        'This is verse 97.\n';
        expect(new CountdownSong(VerseFake).verses(99,97)).toBe(expected);
    });

    test('verse', () =>{
        const expected = 'This is verse 500.\n';
        expect(new CountdownSong(VerseFake).verse(500)).toBe(expected);
    });

    test('song', () => {
    const expected =
        'This is verse 47.\n'+
        '\n'+
        'This is verse 46.\n'+
        '\n'+
        'This is verse 45.\n'+
        '\n'+
        'This is verse 44.\n'+
        '\n'+
        'This is verse 43.\n';
    expect(new CountdownSong(VerseFake, 47, 43).song()).toBe(expected);
  });
});