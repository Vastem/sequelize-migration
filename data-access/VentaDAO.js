const {Venta} = require('../models/Venta')

class VentaDAO{
    constructor(){}

    async crear(total,iva){
        try { 
            const venta = await Venta.create({total,iva})
            return venta
        } catch (error) {
            return error
        }
    }

    async obtener(){
        try {
            const ventas = await Venta.findAll()
            return ventas
        } catch (error) {
            return error
        }
    }

    async obtenerId(id){
        try {
            const venta = await Venta.findByPk(id)
            return venta
        } catch (error) {
            return error
        }
    }

    async eliminar(id){
        try {
            const venta = await Venta.findByPk(id)
            if (!venta) {
                throw new Error('no se encontro la venta')
            }
            await venta.destroy()
            return 'venta eliminado'
        } catch (error) {
            return error
        }
    }

    async actualizar(id, total, iva){
        try {
            const venta = await Venta.findByPk(id)
            if (!venta) {
                throw new Error('no se encontro la venta')
            }
            await venta.update((total,iva),{where:{id}})
            return 'venta actualizado'
        } catch (error) {
            return error
        }
    }
}

module.exports = new VentaDAO()