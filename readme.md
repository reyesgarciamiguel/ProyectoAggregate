# Proyecto método aggregate

Base de datos con el objetivo de prácticar/aprender/usar el método aggregate más a fondo.

El proyecto consta de un documento Inserts con los documentos de ventas de un supermercado a diferentes clientes con diferentes precios, fechas o compras. Después tenemos
las consultas donde usamos el metodo aggregate.

- [x] Inserts
- [x] Consultas
- [x] AportaciónPersonal

## Datos del creador 👁️‍🗨️

_Datos del creador:_

Miguel Reyes, 20 años y de Sevilla, pertenezco al grupo de primer año de administración de redes y sistemas.


### Comandos Básicos utilizados 📋

_Estos son algunos_

```
use prueba: Cambia la base de datos activa y la crea en el caso de que no esté.

db.prueba.insertOne({nombre: "Miguel"}): Añade el documento a la colección prueba que la crea en el caso de no existir

db.prueba.insertMany([]): Añade varios documentos a la vez

db.prueba.aggregate(): Trata sobre operadores de etapa
```

### Operadores Mínimos 📋

_Estos son todos_

```
- $sum              

- $avg            

- $divide              

- $multiply              

- $project          

- $max  

- $group


```