// String

const text = "Hola Mundo";

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

// Array

const fruits = ["manzana", "melon", "banana"];

test('¿Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

// Numeros

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

// Booleano

test('Verdadero', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

// Callback

test('Probar Callback', () => {
    reverseString("Hola", (str) => {
        expect(str).toBe('aloH');
    });
});

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""));
    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola').then(string => {
        expect(string).toBe('aloH');
    });
});

test('Probar async/await', async () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

//afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

//beforeEach(() => console.log("Antes de cada prueba"));
beforeAll(() => console.log("Antes de todas las pruebas"));