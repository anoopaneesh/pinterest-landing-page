import React,{useState,useContext,useEffect} from 'react'
import { getRandom, searchPhotos } from './config'


const PinContext = React.createContext()

export const PinProvider = ({children}) => {
    const [pins, setPins] = useState([])
    useEffect(() => {
        getRandom().then((data)=>{
            let urls = []
            data.map((e) => {
                urls.push({ url: e.urls.regular, id: e.id });
                return 1;
            })
            setPins(urls)
        })
    }, [])
    const getPhotos = (queryStr) => {
        searchPhotos(queryStr).then((data)=>{
            let urls = []
            data.map((e) => {
                urls.push({ url: e.urls.regular, id: e.id });
                return 1;
            })
            setPins(urls)
           
        })
    }
    return (
        <PinContext.Provider value={{pins,getPhotos}}>
            {children}
        </PinContext.Provider>
    )
}


export const usePinContext = () => useContext(PinContext)
