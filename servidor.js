const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const datos = {
    nombre: 'JUAN BARRENECHE',
    areasConocimiento: ['JavaScript', 
    'Node.js', 
    'React', 'HTML', 
    'CSS'],
    hobbies: ['EJERCICIO', 
    'NADAR',
     'GUITARRA'],
  };

  res.end(JSON.stringify(datos));
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}/`);
});
