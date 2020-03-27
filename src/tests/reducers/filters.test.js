import moment from 'moment';
import filtersReducer from '../../reducers/filters';
test('should set up default filter values',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
})
test('should set sort By Amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
})
test('should set sort By Date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state=filtersReducer(undefined,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date');
})
test('should set Text Filter',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state=filtersReducer(currentState,{type:'SET_TEXT_FILTER',text:'Hello'})
    expect(state.text).toBe('Hello');
})
test('should set start Date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state=filtersReducer(currentState,{type:'SET_START_DATE',date:2000})
    expect(state.startDate).toBe(2000);
})
test('should set end Date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state=filtersReducer(currentState,{type:'SET_END_DATE',date:2000})
    expect(state.endDate).toBe(2000);
})
