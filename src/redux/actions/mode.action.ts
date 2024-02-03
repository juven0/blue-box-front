export const CHANGE_MODE = 'CHANGE_MODE';

export const changeMode = (type: string) :any => {
    return (
        (dispatch: any) => {
            dispatch({type: CHANGE_MODE, payload: type})
        }
    )
}