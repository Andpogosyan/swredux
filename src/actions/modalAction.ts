import { InitialStateType } from "../redusers/modalReducer";

export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';
export const WHO_CLICK_MODAL = 'WHO_CLICK_MODAL';

type ChangeModalStatusActionType = {
    type: typeof CHANGE_MODAL_STATUS
    payload: InitialStateType
}



export function changeModalStatus(e: any) : ChangeModalStatusActionType {
    return {
        type: CHANGE_MODAL_STATUS,
        payload:  e.currentTarget.id
        
    }
}
