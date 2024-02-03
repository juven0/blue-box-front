export const PREVIEW_SHOW = 'PREVIEW_SHOW';

export const previewShow = (type: Boolean) :any => {
    return (
        (dispatch: any) => {
            dispatch({type: PREVIEW_SHOW, payload: type})
        }
    )
}