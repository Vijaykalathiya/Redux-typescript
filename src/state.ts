import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { ProjectState } from './projects/state/projectTypes';
import { initialProjectState } from './projects/state/projectReducer';
import { projectReducer } from './projects/state/projectReducer';

const reducer = combineReducers({
    projectState: projectReducer
});

export default function configureStore(preloadState: any) {
    const middlewares = [ReduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    //Thunk is middleware
  //DevTools is an enhancer (actually changes Redux)
  //applyMiddleware wraps middleware and returns an enhancer

  // to use only thunk middleware
  // const enhancer = compose(middlewareEnhancer);

  //to use thunk & devTools
  const enhancer = composeWithDevTools(middlewareEnhancer);
  const store = createStore(reducer, preloadState, enhancer);

}

export interface AppState {
    projectState: ProjectState;
}

export const initialAppState: AppState = {
    projectState :initialProjectState
};

export const store = configureStore(initialAppState);