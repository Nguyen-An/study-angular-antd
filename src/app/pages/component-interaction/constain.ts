export interface Author {
    id: number;
    name: string;
    age: number;
    address: string;
    gmail: string;
}

export const authorNull :Author = {
    id: 0,
    name: '',
    age: 0,
    address: '',
    gmail: ''
}

export const authors: Author[] = [
    {
        id: 1,
        name: 'Flora',
        age: 10,
        address: '123 Main St',
        gmail: 'ftwell0@phoca.cz'
    },
    // {
    //     id: 2,
    //     name: 'Rizel',
    //     age: 15,
    //     address: '123 Main St',
    //     gmail: 'ftwell0@phoca.cz'
    // },
    // {
    //     id: 3,
    //     name: 'Master Yi',
    //     age: 25,
    //     address: '123 Main St',
    //     gmail: 'ftwell0@phoca.cz'
    // },
    // {
    //     id: 4,
    //     name: 'Zed',
    //     age: 22,
    //     address: '123 Main St',
    //     gmail: 'ftwell0@phoca.cz'
    // },
    // {
    //     id: 5,
    //     name: 'Yasuo',
    //     age: 24,
    //     address: '123 Main St',
    //     gmail: 'ftwell0@phoca.cz'
    // },
    // {
    //     id: 9,
    //     name: 'Fizz',
    //     age: 25,
    //     address: '123 Main St',
    //     gmail: 'ftwell0@phoca.cz'
    // },
]