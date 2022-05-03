const item = [ 
    {name: 'Bike', price:100},
 {name: 'TV', price:200},
  {name: 'Album', price:10}, 
  {name: 'Book', price:5}, 
  {name: 'Phone', price:500},
   {name: 'Computer', price:1000},
 ];
 const findCheapestItem=(item)=>{
    
    min=item[0];
    
    for(let i=0; i<item.length; i++){
        if(item[i].price<min.price){
            min.price=item[i].price;
        }
    }
   return min.price
}
 const findExpensiveItem=(item)=>{
      max=0;
      max=item[0];
      for(let i=0; i<item.length; i++){
          if(item[i].price>max.price){
              max.price=item[i].price;
          }
      }
     return max.price
 }

 const cheapProduct=findCheapestItem(item);
 const ExpensiveProduct=findExpensiveItem(item);
 const productFullPrice=item.reduce((totalPrice,product)=> totalPrice+product.price,0);
 const productFullPriceGreaterThanTenDollar=item.filter(product=>product.price>10).reduce((totalPrice,product)=>totalPrice+product.price,0);

  console.log("Cheapest product is "+cheapProduct);
  console.log("Expensive product is:"+ExpensiveProduct);
 console.log("Total price of all products :"+productFullPrice);
 console.log("Total price of all products greater than 10 dollars :"+productFullPriceGreaterThanTenDollar);