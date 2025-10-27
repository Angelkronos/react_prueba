// Test simple para verificar que Jasmine funciona
describe('Setup de Testing', () => {
  it('debería ejecutar un test básico', () => {
    expect(true).toBe(true);
  });

  it('debería hacer matemáticas básicas', () => {
    const suma = 2 + 2;
    expect(suma).toBe(4);
  });

  it('debería trabajar con strings', () => {
    const texto = 'Hola Mundo';
    expect(texto).toContain('Mundo');
  });
});
