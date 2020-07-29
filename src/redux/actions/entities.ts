import Api from "../../client"
import { Entity } from "../../types"
import database from "../../database.json"
export const FETCH_ALL = "FETCH_ALL"
export const FETCH_ALL_SUCCESS ="FETCH_ALL_SUCCESS"
export const FETCH_ALL_FAILED = "FETCH_ALL_FAILED"
export function fetchAll(entity:Entity){

    return (dispatch:any) => {
      
        //affichi loading

        //fetchi 
        dispatch({type:FETCH_ALL, payload:{entity}})

        /*

        Api.get(entity)
            .then(data =>{dispatch({type:FETCH_ALL, payload:{data,entity}})
            .catch(err => {
                dispatch({type:FETCH_ALL_FAILED, payload:{erreur:!err.message!, entity}})
            })
        })*/

        setTimeout(()=>{
            dispatch({type:FETCH_ALL_SUCCESS, payload:{data:database[entity], entity}})
        },1000)
    }
}