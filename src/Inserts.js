db.ventas.insertMany([

    { _id : 1,
      Producto: "Pistachos",
      unidades: 3,
      PrecioCosteEmpresa: 1.5,
      PrecioUnitario: 3,
      FechaDeVenta: new Date("2020-04-01"),
      cliente: "Luis García",
      vendedor: "Paco Gómez",
      buenCliente: true,
      buenVendedor: false,
    },
    
    { _id : 2, Producto: "Patatas de bolsa", unidades: 5, PrecioCosteEmpresa: 1, PrecioUnitario: 1.5, FechaDeVenta: new Date ("2020-3-12"), cliente: "Luis García", vendedor: "Paco Gómez", buenCliente:true, buenVendedor: false,},
    { _id : 3, Producto: "Bote Remolacha", unidades: 2, PrecioCosteEmpresa: 0.5, PrecioUnitario: 1.8, FechaDeVenta: new Date ("2020-1-8"), cliente: "Miguel Reyes", vendedor: "Pablo Jesús", buenCliente:true, buenVendedor: true,},
    { _id : 4, Producto: "Chocolate Milka", unidades: 10, PrecioCosteEmpresa: 0.5, PrecioUnitario: 1.5, FechaDeVenta: new Date ("2020-6-19"), cliente: "Ibai", vendedor: "Finn", buenCliente:false, buenVendendor: false,},
    { _id : 5, Producto: "Botella Almirante", unidades: 1, PrecioCosteEmpresa: 3, PrecioUnitario: 5, FechaDeVenta: new Date ("2019-1-1"), cliente: "Pablo Jesús", vendedor: "Alvaro Fuertes", buenCliente:true, buenVendedor: true,},
    { _id : 6, Producto: "Blue Label Escocés", unidades: 1, PrecioCosteEmpresa: 100, PrecioUnitario: 200, FechaDeVenta: new Date ("2022-1-1"), cliente: "Miguel Reyes", vendedor: "Rodolfo Arias", buenCliente:true, buenVendedor: false,},
    { _id : 7, Producto: "Leche", unidades: 6, PrecioCosteEmpresa: 0.3, PrecioUnitario: 0.5, FechaDeVenta: new Date ("2018-1-3"), cliente: "Guillermo García", vendedor: "Paco Gómez", buenCliente:false, buenVendedor: false,},
    { _id : 8, Producto: "Cable USB 2.0", unidades: 2, PrecioCosteEmpresa: 1, PrecioUnitario: 2.5, FechaDeVenta: new Date ("2015-5-1"), cliente: "Aurelio Guerra", vendedor: "Alvaro Fuertes", buenCliente:false, buenVendedor: true,},
    { _id : 9, Producto: "Chicles", unidades: 2, PrecioCosteEmpresa: 0.7, PrecioUnitario: 1, FechaDeVenta: new Date ("2021-7-13"), cliente: "Miguel Ángel Gomez", vendedor: "Finn", buenCliente:true, buenVendedor: true,},
    { _id : 10, Producto: "Nocilla", unidades: 1, PrecioCosteEmpresa: 1.5, PrecioUnitario: 2.5, FechaDeVenta: new Date ("2020-10-28"), cliente: "Blanca Pérez", vendedor: "Rodolfo Arias", buenCliente:false, buenVendedor: false,},
    { _id : 11, Producto: "Galletas María", unidades: 1, PrecioCosteEmpresa: 1, PrecioUnitario: 2, FechaDeVenta: new Date ("2018-1-3"), cliente: "Guillermo García", vendedor: "Paco Gómez", buenCliente:false, buenVendedor: false,},
    { _id : 12, Producto: "Rollo Papel cocina", unidades: 12, PrecioCosteEmpresa: 0.25, PrecioUnitario: 0.5, FechaDeVenta: new Date ("2018-1-3"), cliente: "Guillermo García", vendedor: "Paco Gómez", buenCliente:false, buenVendedor: false,},
])