const {Producto} = require('../models/Producto')

class ProductoDAO{
    constructor(){}

    async crearProducto(nombre,precio,cantidad){
        try { 
            const producto = await Producto.create({nombre,precio,cantidad})
            return producto
        } catch (error) {
            return error
        }
    }

    async obtenerProductos(){
        try {
            const productos = await Producto.findAll()
            return productos
        } catch (error) {
            return error
        }
    }

    async obtenerProductoId(id){
        try {
            const producto = await Producto.findByPk(id)
            return producto
        } catch (error) {
            return error
        }
    }

    async eliminar(id){
        try {
            const producto = await Producto.findByPk(id)
            if (!producto) {
                throw new Error('no se encontro el producto')
            }
            await producto.destroy()
            return 'producto eliminado'
        } catch (error) {
            return error
        }
    }

    async actualizar(id, nombre, precio, cantidad){
        try {
            const producto = await Producto.findByPk(id)
            if (!producto) {
                throw new Error('no se encontro el producto')
            }
            await producto.update((nombre,precio,cantidad),{where:{id}})
            return 'producto actualizado'
        } catch (error) {
            return error
        }
    }
}

module.exports = new ProductoDAO()