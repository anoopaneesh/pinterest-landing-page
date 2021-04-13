import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        'Authorization': 'Client-ID X_nAVHCJwtgPwD_l3pocDbldiMfAAAFlxj_yoOMazJ4'
    }
  });

export const getRandom = () =>{
    return new Promise((resolve,reject)=>{
        instance.get('/photos', {
            params: {
                page: 1,
                per_page: 20
            }
        }).then((response) => {
            resolve(response.data)
        })
    })
}
export const searchPhotos = (queryStr) => {
    return new Promise((resolve,reject)=>{
        instance.get('/search/photos',{
            params:{
                query:queryStr,
                per_page:20
            }
        }).then((response)=>{
            resolve(response.data.results)
        })
    })
}