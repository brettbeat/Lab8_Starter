// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('tests valid phone number', () => {
    const phoneNumber = '(805)535-9247'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('tests another valid phone number', () => {
    const phoneNumber = '1+(805)535-9247'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('tests empty phone number', () => {
    const phoneNumber = ''
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('tests phone number with one less number', () => {
    const phoneNumber = '(805)535-924'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('tests valid email', () => {
    const email = 'bbeattie@ucsd.edu'
    expect(functions.isEmail(email)).toBe(true);
});

test('tests another valid email', () => {
    const email = 'brettbeattie99@gmail.com'
    expect(functions.isEmail(email)).toBe(true);
});

test('tests invalid email', () => {
    const email = 'bbeattie@ucsd.'
    expect(functions.isEmail(email)).toBe(false);
});

test('tests empty email', () => {
    const email = ''
    expect(functions.isEmail(email)).toBe(false);
});

test('tests long password', () => {
    const password = 'WhyShouldntHe'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('tests short password', () => {
    const password = 'GetAJob'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('tests password starting w/ number', () => {
    const password = '5xyzty'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('tests too short password', () => {
    const password = 'thx'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('tests valid date', () => {
    const date = '08/06/2021'
    expect(functions.isDate(date)).toBe(true);
});

test('tests valid date with single number', () => {
    const date = '8/6/2021'
    expect(functions.isDate(date)).toBe(true);
});

test('tests invalid date', () => {
    const date = '08/06/202122'
    expect(functions.isDate(date)).toBe(false);
});

test('tests date with YYYY as YY', () => {
    const date = '08/06/21'
    expect(functions.isDate(date)).toBe(false);
});

test('tests valid 6 digit hex color', () => {
    const color = 'ffffff'
    expect(functions.isHexColor(color)).toBe(true);
});

test('tests valid 3 digithex color', () => {
    const color = '123'
    expect(functions.isHexColor(color)).toBe(true);
});

test('tests invalid hex color', () => {
    const color = 'fffff'
    expect(functions.isHexColor(color)).toBe(false);
});

test('tests valid hex color', () => {
    const color = 'fffffg'
    expect(functions.isHexColor(color)).toBe(false);
});
