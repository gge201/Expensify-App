import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD6w7x7A1sida5RfVEoWzmxJMFToEpH1mI",
    authDomain: "expensify-app-479ae.firebaseapp.com",
    databaseURL: "https://expensify-app-479ae.firebaseio.com",
    projectId: "expensify-app-479ae",
    storageBucket: "expensify-app-479ae.appspot.com",
    messagingSenderId: "482457242780",
    appId: "1:482457242780:web:75cd91ce468418c1e03159",
    measurementId: "G-PC7JC8QSFR"
};
firebase.initializeApp(firebaseConfig);


const database=firebase.database();
 export{firebase,database as default};


































// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// // database.ref('expenses').once('value')
// // .then((snapshot)=>{
// //     const expenses=[];
// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id:childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// // })
// // database.ref('expenses').on('value',(snapshot)=>{
// //     const expenses=[];
// //     snapshot.forEach((childSnapshot)=>{
// //         expenses.push({
// //             id:childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses)
// // })
// // database.ref('expenses').push({
// //     description:'Rent',
// //     note:'',
// //     amount:109500,
// //     createdAt:45678904567890
// // })

// // const firebaseNotes={

// // }
// // const notes=[{
// //     id:'121',
// //     title:'First note',
// //     body:'This is my note'
// // },
// // {
// //     id:'761sse',
// //     title:'Another note',
// //     body:'This is my note'
// // }
// // ]
// // database.ref('notes').set(notes)
// // database.ref().on('value',(snapshot)=>{
// //     const val=snapshot.val()
// //     console.log(`${val.name} works as ${val.job.title} at ${val.job.company}`)
// // })
// // const onValueChange=database.ref().on('value',(snapshot)=>{
// //     console.log(snapshot.val())
// // },(e)=>{
// //     console.log('Error with data fetching ',e)
// // })
// // setTimeout(()=>{
// //     database.ref('age').set(22)
// // },3000)
// // setTimeout(()=>{
// //     database.ref().off(onValueChange);
// // },6000)
// // setTimeout(()=>{
// //     database.ref('age').set(23)
// // },9000)
// // database.ref().once('value')
// // .then((snapshot)=>{
// //     const val=snapshot.val();
// //     console.log(val)
// // })
// // .catch((e)=>{
// //     console.log('Error ',e)
// // })
// // database.ref().set({
// //     name:'Piyush Gandhi',
// //     age:21,
// //     job:{
// //         title:'Software Developer',
// //         company:'Google'
// //     },
// //     stressLevel:9,
// //     location:{
// //         city:'Bangalore',
// //         country:'India'
// //     }      
// // }).then(()=>{
// //     console.log('Data is saved')
// // }
// // ).catch((e)=>{
// //     console.log('This failed ',e)
// // });

// // database.ref().update({
// //     stressLevel:8,
// //     'location/city':'Seattle',
// //     'job/company':'Amazon'
// // })
// // database.ref('isSingle').remove().then(()=>{
// //     console.log('Item is removed')
// // }).catch((e)=>{
// //     console.log('Data not removed because of ',e)
// // })
