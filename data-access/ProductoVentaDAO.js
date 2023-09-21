const {ProductoVenta} = require('../models/ProductoVenta')

class ProductoVentaDAO{
    constructor(){}

    async crear(idventa,idproducto,cantidadvendida,subtotal,precioventa){
        try {
            const productoVenta = await ProductoVenta.create({
                idventa,
                idproducto,
                cantidadvendida,
                subtotal,
                precioventa
            })
            return productoVenta
        } catch (error) {
            throw error
        }
    }

    async buscar(){
        try {
            return await ProductoVenta.findAll()
        } catch (error) {
            throw error
        }
    }
}
module.exports = new ProductoVentaDAO()
