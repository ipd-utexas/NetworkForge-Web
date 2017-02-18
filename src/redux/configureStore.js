/**
 * Created by old on 1/12/17.
 */
import {createStore, bindActionCreators, applyMiddleware} from 'redux';
import * as EntityTracker from './modules/EntityTracker';
import Storebake from './modules/StoreToCSVConverter'

export const configureStore = () => {
  // Return the store
  const store = createStore(EntityTracker.reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(depMiddleWare));

  const actions = {
    EntityTracker: bindActionCreators(
        EntityTracker.actions,
        store.dispatch)
  }

  return {store, actions};
}


const depMiddleWare = (store) => (next) => (action) => {
  // Our middleware

  if(action.type == EntityTracker.types.FINALIZE_ENT){
    
    
    store.dispatch({type:'SET_ENT_PRO'});
    console.log('I recognize you');
    console.log(JSON.stringify(action.entobj));

    Object.keys(action.entobj).forEach(function(key){
      console.log(action.entobj[key]);
      console.log('loopworks');
      store.dispatch({ type: 'ADD_NEW_ENT', text: action.entobj[key][0] })


    });
    store.dispatch({type:'SELECT_NEXT_ACTIVE_ENT'});
    store.dispatch({type:'RESET_SHALLOW_CS'});
    store.dispatch({type: 'ROUND_UPDATE_INDEXNAME'});
    store.dispatch({type:'ROUND_UPDATE_PUB'});
    Storebake(store);

    

  }
  else if(action.type == EntityTracker.types.TRUE_ADD_PUB_NAME){
    store.dispatch({type:'ADD_PUB_NAME', text:action.text});
    store.dispatch({type:'ROUND_UPDATE_PUB'});
    return next(action);
  }


  return next(action);

  // call the next function

}

export default configureStore;