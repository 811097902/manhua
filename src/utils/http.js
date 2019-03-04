const axios=require('axios')

module.exports=({method,url})=>{
    return axios({
        method,
        url
    })
    .then(res=>res.data)
    .catch(err=>console.log(err))
}