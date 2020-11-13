export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';
export const WHO_CLICK_MODAL = 'WHO_CLICK_MODAL';

export function changeModalStatus(e) {
    return {
        type: CHANGE_MODAL_STATUS,
        payload: {
            status: !status,
            whoclick: e.currentTarget.id
        },
    }
}
