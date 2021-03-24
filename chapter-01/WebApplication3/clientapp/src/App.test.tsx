import React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
//import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

interface IUser {
    name: string;
    id: number;
}

class UserAccount implements IUser {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

test('do some typescript', () => {
    let bob = new UserAccount("bob", 1);
    let jenny = new UserAccount("jenny", 2);

    let sum = bob.id + jenny.id;

    expect(sum).toEqual(3);
});

class AdminAccount {
    name: string;
    id: number;
    accessLevel: string;

    constructor(name: string, id: number, accessLevel: string) {
        this.name = name;
        this.id = id;
        this.accessLevel = accessLevel;
    }
}

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function logUser(user: IUser) {
    console.log(`ID: ${user.id}, Username: ${user.name}`);
}

test('try structural account', () => {
  let will = new AdminAccount("will", 3, "Full Administrator");

  let willCopy : UserAccount = will;
  logUser(will);
  logUser(willCopy);
    
  let alice = new Person("alice");
  //let aliceCopy : UserAccount = alice; // no good
  //logUser(alice); // also no good
  expect(alice).not.toBeNull();
});

test('ensureArray converts value to string', () => {
    let value = "hi";
    let array = ensureArray(value);
    expect(array.hasOwnProperty("length")).toBe(true);
    expect(array.length).toEqual(1);
    expect(array[0]).toEqual(value);
});

test('ensureArray returns array for array', () => {
    let array = ["hello","world"];
    let outputArray = ensureArray(array);
    expect(typeof outputArray).toEqual("object");
    expect(Array.isArray(outputArray)).toEqual(true);
    expect(outputArray.length).toEqual(2);
    expect(outputArray[0]).toEqual(array[0]);
    expect(outputArray[1]).toEqual(array[1]);
});

function ensureArray(value: string | string[]) {
    if (typeof value === "string") {
        return [value];
    } else {
        return value;
    }
}
