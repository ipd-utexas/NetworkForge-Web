/**
 * Created by old on 1/12/17.
 */

var update = require('react/lib/update');

export const types = {
  'ADD_NEW_ENT': 'ADD_NEW_ENT',
  'ADD_PUB_NAME':'ADD_PUB_NAME',
  'ADD_DEP': 'ADD_DEP',
  'TESTACT': 'TESTACT',
  'INC_SHALLOW_CS': 'INC_SHALLOW_CS',
  'DEC_SHALLOW_CS':'DEC_SHALLOW_CS',
  'FINALIZE_ENT': 'FINALIZE:ENT',
  'CHANGE_ENT_NAME': 'CHANGE_ENT_NAME',
  'SELECT_NEXT_ACTIVE_ENT':'SELECT_NEXT_ACTIVE_ENT',
  'SET_ENT_PRO':'SET_ENT_PRO',
  'RESET_SHALLOW_CS':'RESET_SHALLOW_CS',
  'ROUND_UPDATE_PUB':'ROUND_UPDATE_PUB',
  'TRUE_ADD_PUB_NAME':'TRUE_ADD_PUB_NAME'
};


const initialState = {
  indexName: '',
  indexPublisher: '',
  ents: {},
  shallowCS: 0,
  currentEntUIN: 'initial'
};

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case types.ADD_PUB_NAME:
      return update(state, {ents:{[state.currentEntUIN]: {publisher: {$set: action.text}}}});
    case types.ADD_NEW_ENT:
        var UIN = Math.floor((1 + Math.random() * 0x10000));
    {/* TODO: make sure no UIN can be repeated */}
        state.currentEntUIN = UIN;
      return update(state, {ents: {$merge: {[UIN]:{'name':action.text,deps:[],processed:false }}}});
    case types.INC_SHALLOW_CS:
        var incVar = state.shallowCS + 1;
      return {...state, shallowCS: incVar};
    case types.DEC_SHALLOW_CS:
      var decVar = state.shallowCS -1;
      return {...state, shallowCS: decVar};

    case types.ADD_DEP:
      var UIN = Math.floor((1 + Math.random() * 0x10000));
      return update(state, {ents:{[state.currentEntUIN]: {deps: {$push: [[action.text, UIN]]}}}});
    case types.FINALIZE_ENT:




      return state;
    case types.CHANGE_ENT_NAME:
      return {...state, indexName:action.text};

    case types.SELECT_NEXT_ACTIVE_ENT:
      Object.keys(state.ents).forEach(function(key){
        if(state.ents[key].processed == true){
          return {...state, currentEntUIN : key};
        }

      });
      return state;
    case types.SET_ENT_PRO:
      return update(state, {ents:{[state.currentEntUIN]: {processed: {$set: true}}}});

    case types.RESET_SHALLOW_CS:
    return update(state, {shallowCS: {$set:1}});

    case types.ROUND_UPDATE_PUB:
      return{...state, indexPublisher: state.ents[state.currentEntUIN].publisher};

    default:
      return state;

  }



}


export const actions = {




  AddEnt: (text) => ({type: types.ADD_NEW_ENT, text}),
  IncShallowCS: () => ({type: types.INC_SHALLOW_CS}),
  AddDep: (text) => ({type: types.ADD_DEP, text}),
  testACT: (entobj) => ({type: types.FINALIZE_ENT, entobj}),
  ChangeEntName: (text) => ({type: types.CHANGE_ENT_NAME, text}),
  TrueAddPub: (text) => ({type: types.TRUE_ADD_PUB_NAME, text})












};

