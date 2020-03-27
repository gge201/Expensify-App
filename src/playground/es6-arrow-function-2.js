const multiplier={
    a : [1,2,3],
    multiply(){
        return this.a.map((key)=>2*key);
    }
};
console.log(multiplier.multiply());