import {createStore} from 'redux';
const incrementCount=({incrementBy = 1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}
const decrementCount=({decrementBy = 1}={})=>{
    return{
        type:'DECREMENT',
        decrementBy
    }
}
const Reset=(()=>{
    return{
        type:'RESET'
    }
})
const S=(({count=0}={})=>{
    return{
        type:'SET',
        count
    }
})
const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy=typeof action.decrementBy === 'number' ? action.decrementBy:1;
            return{
                count:state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count:0
            }
        case 'SET':
            return{
                count:action.count
            }
        default:
            return state
    }
});
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({
    type:'INCREMENT',
    incrementBy:5
});
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount({decrementBy:77}));
store.dispatch({
    type:'DECREMENT',
    decrementBy:2
});
store.dispatch({
    type:'DECREMENT'
});
store.dispatch({
    type:'RESET'
});
store.dispatch(S({count:100}));