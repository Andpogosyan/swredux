import axios from 'axios';
export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';
export const GET_CHARACTERS_FULL = 'GET_CHARACTERS_FULL';




export function getCharacters(url) {
    if(url){return function (dispatch) {
        dispatch({
            type: GET_CHARACTERS_REQUEST,
        })
        
        const getChar = async (url) => {
            const response = await axios(url).then((res) =>{
                    const {data} = res;
                    dispatch({
                        type: GET_CHARACTERS_SUCCESS,
                        payload: data,
                    })
                }).catch((err) => {
                    dispatch({
                        type: GET_CHARACTERS_FAIL,
                        error: true,
                        
                    })
                  });;
                
        }
        return getChar(url);
    }}
    return {
        type: GET_CHARACTERS_FULL
    }
}



// then(() =>{
//     dispatch({
//         type: GET_CHARACTERS_SUCCESS,
//         payload: data,
//     })
// }).catch(() => {
//     dispatch({
//         type: GET_CHARACTERS_FAIL,
//         error: true,
        
//     })
//   });