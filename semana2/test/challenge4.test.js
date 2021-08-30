const landMass = require("../challenge4");

test('Porcentaje de masa de la tierra que representa Rusia', () => {
    expect(landMass("Rusia", 17098242)).toEqual(expect.objectContaining({
        percent: expect.any(Number),
        message: expect.any(String),
    }));
    expect(landMass("Rusia", 17098242).percent).toBeGreaterThanOrEqual(11.48);
    expect(landMass("Rusia", 17098242).percent).toBeLessThan(12);
});

test('Porcentaje de masa de la tierra que representa Colombia', () => {
    expect(landMass("Colombia", 1143000)).toEqual(expect.objectContaining({
        percent: expect.any(Number),
        message: expect.any(String),
    }));
    expect(landMass("Colombia", 1143000).percent).toBeGreaterThanOrEqual(0.75);
    expect(landMass("Colombia", 1143000).percent).toBeLessThan(0.80);
});

test('Porcentaje de masa de la tierra que representa Canadá', () => {
    expect(landMass("Canadá", 9985000)).toEqual(expect.objectContaining({
        percent: expect.any(Number),
        message: expect.any(String),
    }));
    expect(landMass("Canadá", 9985000).percent).toBeGreaterThanOrEqual(6.70);
    expect(landMass("Canadá", 9985000).percent).toBeLessThan(6.75);
});

test('Porcentaje de masa de la tierra que representa Alemania', () => {
    expect(landMass("Alemania", 357386)).toEqual(expect.objectContaining({
        percent: expect.any(Number),
        message: expect.any(String),
    }));
    expect(landMass("Alemania", 357386).percent).toBeGreaterThanOrEqual(0.23);
    expect(landMass("Alemania", 357386).percent).toBeLessThan(0.27);
});