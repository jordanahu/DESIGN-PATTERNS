let Iterator = (function(){

  function Iterator(items){
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
  first(){

    this.reset();
    return this.next();
  },

  next(){
    return this.items[this.index++]
  },
  hasNext(){
    return this.index<=this.items.length
  },
  reset(){
    this.index = 0;
  },
  each(fn){
    for(let item=this.first(); this.hasNext(); item=this.next()){
      fn(item)
    }
  }
}

return Iterator;
})();




let items = ["jam", "zeynab","maryam","mashhad","Iran"];

let iter = new Iterator(items);

iter.each(x=>{
  console.log(x)
});

