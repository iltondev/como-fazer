const api = require('../api')

const novaForm = async (req, res) => {    
    // console.log('cheguei')
    res.render('categorias/nova')
}

const nova = async (req, res) => {  
    // console.log('cheguei2')
    await api.create('categorias', {categoria: req.body.categoria}) 
    res.redirect('/categorias')
}

const get = async (req, res) => {      
    const categorias = await api.list("categorias");
    res.render('categorias/index', {categorias})

}

const apagar = async (req, res) => {    
    await api.apagar('categorias', req.params.id)
    // await api.apagar('publicacoes/categoria/' + req.params.id )
    await api.apagar('publicacoes', req.params.id )
    res.redirect('/categorias')
}

const editarForm = async (req, res) => {    
    const categoria =  await api.get('categorias', req.params.id)
    res.render('categorias/editar', {categoria})    
}

const editar = async (req, res) => {    
    
    await api.update('categorias', req.params.id, 
    { 
      categoria: req.body.categoria
    })
    res.redirect('/categorias')
}

module.exports = {
    novaForm,
    nova,
    get,
    apagar,
    editarForm,
    editar
}