import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'Gum2',
    note:'',
    amount:200,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Gum3',
    note:'',
    amount:205,
    createdAt:moment(0).add(4,'days').valueOf()
}];
test('Should filter by text value',()=>{
    const filters={
        text:'2',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],])
})
test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])
}) 
test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]])
})
test('should filter by sortDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('should filter by sortAmount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})  