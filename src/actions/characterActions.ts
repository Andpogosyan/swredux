import axios from 'axios';
export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';
export const GET_CHARACTERS_FULL = 'GET_CHARACTERS_FULL';


type GetCharactersActionType = {
    type: typeof GET_CHARACTERS_REQUEST | typeof GET_CHARACTERS_SUCCESS | typeof GET_CHARACTERS_FAIL
    payload: any
}


export function getCharacters(url: string) {
    if(url){return function (dispatch: any) {
        dispatch({
            type: GET_CHARACTERS_REQUEST,
        })
        
        const getChar = async (url: string) => {
            const response = await axios(url).then((res) =>{
                    const {data} = res;
                    console.log('data', data)
                    dispatch({
                        type: GET_CHARACTERS_SUCCESS,
                        payload: data,
                    })
                }).catch((err) => {
                    dispatch({
                        type: GET_CHARACTERS_FAIL,
                        })
                  });;
                
        }
        return getChar(url);
    }}
    return {
        type: GET_CHARACTERS_FULL
    }
}


