var money={
    a:1,
    b:2,
    add(c,d,e,f){
        console.log(arguments);
        const result=this.a+this.b+c+d+e+f
        return result
    }
}
Function.prototype.fun=function(that){
    var method=this;
    console.log('Hii');
    let args=Array.prototype.slice.apply(arguments,[1])
    return function(){ 
        console.log(args,Array.prototype.slice.apply(arguments,[0]));
        args=args.concat(Array.prototype.slice.apply(arguments,[0]));
        console.log(args);
        return method.apply(that,args);
    }
}
const get=money.add.fun(money,1,2)
const output=get(1,2)
console.log(output);
