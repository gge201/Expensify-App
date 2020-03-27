import {addExpense, editExpense, removeExpense} from '../../actions/expenses'
test('should setup removeExpense action object',()=>{
    const action=removeExpense({id:'123abc'})
    expect(action).toEqual({type:'REMOVE_EXPENSE',id:'123abc'})
})
test('should setup editExpense action object',()=>{
    const action=editExpense('123abc', {note:'123'})
    expect(action).toEqual({type:'EDIT_EXPENSE',id:'123abc',updates:{note:'123'}})
})

test('should setup addExpense action object with provided values',()=>{
    const expenseData={
        description:'rent',
        amount:109500,
        createdAt:1000,
        note:'This was the last months rent'
    }
    const expense=addExpense(expenseData);
    expect(expense).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
})
test('should set up addExpense with default values',()=>{
    const expenseData={
        description:'',
        amount:0,
        createdAt:0,
        note:''
    }
    const expense=addExpense(expenseData);
    expect(expense).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
})