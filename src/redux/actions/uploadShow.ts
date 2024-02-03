export const UPLOAD_SHOW = 'UPLOAD_SHOW';

export const uploadShow = (type: Boolean) :any => {
    return (
        (dispatch: any) => {
            dispatch({type: UPLOAD_SHOW, payload: type})
        }
    )
}