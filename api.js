const axios = require('axios')
const baseURL = 'https://como-fazer-jrsintia.firebaseio.com/'
const auth = "Sycpcv56m5TYjmvP78vOliNiMq4bD5l4JWheDcJu"



 const list = async (key) =>  {
   
    const content = await axios.get(baseURL + key + ".json" + "?auth=" + auth) 

    if (content.data) {
       const objetos = Object
                            .keys(content.data)      //Object.Keys pega os objetos e os transforma em vetor 
                            .map((key) => {          //Para cada item do array eu seto um objeto com a key e um spread de sua data 
                                    return {
                                        id: key,
                                        ...content.data[key]
                                    }
                                }
                            )

        return objetos                                 

    } else {
     return []

    }


}


const apagar = async (key, id) => {    
    await axios.delete(baseURL + key + '/' + id + ".json" + "?auth=" + auth);        
    return true;
}

const get = async (key, id) => {

    const content = await axios.get(`${baseURL}${key}/${id}.json?auth=` + auth);
    return {        
            id: id,
            ...content.data       
    }
}

const update = async(key, id, data) => {
    await axios.put(`${baseURL}${key}/${id}.json?auth=` + auth, data)
    return true;
}

const create = async(key, data) => {
    await axios.post(baseURL + key + '.json' + "?auth=" + auth, data)    
    return true;
}



module.exports =  {
    list,
    apagar,
    get,
    update,
    create
}
