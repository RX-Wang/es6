/**
 * Created by wangxuquan on 2017/5/27.
 */
// import 'bluebird';
/*
export const todos = createReducer([], {
    [ActionTypes.ADD_TODO](state, action) {
        let text = action.text.trim();
        return [...state, text];
    }
});*/
/*
const ActonTypes = {
    ADD_TODO : 'ADD_TODO'
};
const F = {
    [ActonTypes.ADD_TODO](params){
        console.log(params);
    }
};
F[ActonTypes.ADD_TODO]('456');*/

const a = {
  a : 'a',
  d : 'ad'
};
const b = {
    b : 'b',
    d : 'bd'
};

const c = {
    ...a,
    ...b
};

console.log(c);

const e = [1,3,4,5,6,7];
console.log([...e,...e]);

console.log(...e);
