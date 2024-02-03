import { combineReducers } from 'redux';
import filesReducer from './files.reducer';
import modeReducer from './mode.reducer';
import loadPreview from './preview.reducer';
import loadExplore from './explore.reducer';
import loadVisible from './visible.reducer';
import loadAllFiles from './allFiles.reducer';
import pushRecentFile from './recent.reducer';
import uploadShowReducer from './uploadShow.reducer';
import previenShowReducer from './previewShow.reducer';

export default combineReducers ({
    filesReducer,
    modeReducer,
    loadAllFiles,
    loadVisible,
    pushRecentFile,
    loadExplore,
    loadPreview,
    uploadShowReducer,
    previenShowReducer
})