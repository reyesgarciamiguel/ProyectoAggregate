/* Queremos saber el beneficio desde el 2020 incluido agrupando con el año coste por la empresa y venta al publico luego proyectamos la id como año y 
los resultados de la agrupacion en un campo llamado beneficio restando la venta menos el coste de la empresa (Todo sin incluir el IVA) */

db.ventas.aggregate(
    [
        { $match: { $expr: { $gte: [{ $year: "$FechaDeVenta" }, 2020] } } },
        {
            $group:
            {
                _id: { $year: "$FechaDeVenta" },
                CosteEmpresa: { $sum: { $multiply: ["$PrecioCosteEmpresa", "$unidades"] } },
                ventaPublico: {$sum: {$multiply: ["$PrecioUnitario", "$unidades"]}}
            }
        },
        {
            $project: {
                año: "$_id",
                _id: 0,
                Beneficio: {$subtract: ["$ventaPublico","$CosteEmpresa"]}
            }
        },
    
    ]
).pretty()

/*{ "año" : 2020, "Beneficio" : 20.6 }
{ "año" : 2022, "Beneficio" : 100 }
{ "año" : 2021, "Beneficio" : 0.6000000000000001 }*/ 



/*Venta total de nuestros mejores vendedores*/


db.ventas.aggregate(
    [
        { $match: {buenVendedor: true } } ,
        {
            $group:
            {
                _id: "$vendedor" ,
                TotalDeVentas: { $sum: { $multiply: ["$PrecioUnitario", "$unidades"] } }
            }
        },
        {
            $project: {
                Vendedor: "$_id",
                _id: 0,
                totalventas: "$TotalDeVentas",
                IVA: { $multiply: ["$TotalDeVentas", 0.21] },
                TotalDeVentasConIVA: { $multiply: ["$TotalDeVentas", 1.21] },
                Redondeo: { $round: [{ $multiply: ["$TotalDeVentas", 1.21] }, 0] }
            }
        }
    ]
).pretty()


/*{
        "Vendedor" : "Alvaro Fuertes",
        "totalventas" : 10,
        "IVA" : 2.1,
        "TotalDeVentasConIVA" : 12.1,
        "Redondeo" : 12
}
{
        "Vendedor" : "Finn",
        "totalventas" : 2,
        "IVA" : 0.42,
        "TotalDeVentasConIVA" : 2.42,
        "Redondeo" : 2
}
{
        "Vendedor" : "Pablo Jesús",
        "totalventas" : 3.6,
        "IVA" : 0.756,
        "TotalDeVentasConIVA" : 4.356,
        "Redondeo" : 4
}*/




/*Mediante esta agrupación queremos buscar el cliente Guillermo García, después agrupar mediante fecha de venta y el total a pagar mediante una multiplicación
entre unidades y preciounitario y por supuesto el número de pedidos que hizo*/

db.ventas.aggregate(
        [
           {$match: { cliente: "Guillermo García" } },
           {$group:  {_id: { Día: { $dayOfYear: "$FechaDeVenta"}, year: { $year: "$FechaDeVenta" } },
                    TotalaPagar: { $sum: { $multiply: [ "$unidades", "$PrecioUnitario" ] } },
                    NúmeroDePedidos: { $sum: 1 }
               }
            }
        ]
  ).pretty()


  /*{ "_id" : { "Día" : 3, "year" : 2018 }, "TotalaPagar" : 11, "NúmeroDePedidos" : 3 }*/



/*Esta agregación quiere buscar los clientes de calidad y agruparlos por su nombre y el average de sus gastos en los días que han comprado y el average de unidades por día que
han estado en la tienda*/


db.ventas.aggregate(
    [
      {$match: { buenCliente: true} },
      {$group:     
                 { 
                     _id: "$cliente",
                     GastoAVG: { $avg: { $multiply: [ "$unidades", "$PrecioUnitario" ] } },
                     UnidadesAVG: { $avg: "$unidades" }
                 }
        }
    ]
).pretty()

/*{ "_id" : "Miguel Ángel Gomez", "GastoAVG" : 2, "UnidadesAVG" : 2 }
{ "_id" : "Pablo Jesús", "GastoAVG" : 5, "UnidadesAVG" : 1 }
{ "_id" : "Miguel Reyes", "GastoAVG" : 101.8, "UnidadesAVG" : 1.5 }
{ "_id" : "Luis García", "GastoAVG" : 8.25, "UnidadesAVG" : 4 }*/



/*Encontramos por año desde el 2020 la mayor compra en unidades de cada año y calculamos que valen
esas unidades en el porcentaje total de unidades vendidas en estos 3 años */ 



db.ventas.aggregate(
    [
        { $match: { $expr: { $gte: [{ $year: "$FechaDeVenta" }, 2020] } } },
        {
            $group:
            {
                _id: { $year: "$FechaDeVenta" },
                Unidades: { $max: "$unidades"},
                
            }
        },
        {
            $project: {
                Año: "$_id",
                _id: 0,
                Unidades: "$Unidades",
                PorcentajeSobreTotal: { $multiply: [{ $divide: ["$Unidades", 24] }, 100] }
                
            }
        }
       
    
    ]
).pretty()


/*{
        "Año" : 2020,
        "Unidades" : 10,
        "PorcentajeSobreTotal" : 41.66666666666667
}
{ "Año" : 2022, "Unidades" : 1, "PorcentajeSobreTotal" : 4.166666666666666 }
{ "Año" : 2021, "Unidades" : 2, "PorcentajeSobreTotal" : 8.333333333333332 }*/ 