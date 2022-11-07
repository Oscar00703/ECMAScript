//Mejora para capturar en grupos valores que estan dentro de una expresion regular
const regex = /(\d{4})-(\d{2})-(\d{2})/; //anio, mes, dia => formato de EEUU
const matchers = regex.exec('2022-01-02');
console.table(matchers);