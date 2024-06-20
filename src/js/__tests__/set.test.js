import Team from '../team.js';
import Character from '../character.js';

test('should add a character to the team', () => {
    const team = new Team();
    const char1 = new Character('Fighter');
    team.add(char1);
    expect(team.members.has(char1)).toBe(true);
});

test('should throw an error it is the same character', () => {
    const team = new Team();
    const char1 = new Character('Fighter');
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Данный персонаж уже добавлен');
});

test('should add all characters to the team', () => {
    const team = new Team();
    const char1 = new Character('Fighter');
    const char2 = new Character('Zombie');
    const char3 = new Character('Magician');
    team.addAll(char1, char2, char3);
    expect(team.members.has(char1, char2, char3)).toBe(true);
});

test('toArray should convert set to array', () => {
    const team = new Team();
    const char1 = new Character('Fighter');
    const char2 = new Character('Zombie');
    const char3 = new Character('Magician');
    team.addAll(char1, char2, char3);
    const array = team.toArray();
    expect(Array.isArray(array)).toBe(true);
});