import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import Counter from './playground/counter'
import Comp from './components/practice'
const store=configureStore();
import './firebase/firebase'
// import './playground/promises'
// store.dispatch(addExpense({description:'water bill',amount:4500}));
// store.dispatch(addExpense({description:'Gas bill',amount:3500,createdAt:1000}))
// store.dispatch(addExpense({description:'rent',amount:109500}));

// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

const jsx=(
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'))































