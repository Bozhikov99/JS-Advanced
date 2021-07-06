function solve() {
   let addButtonElements=document.querySelectorAll('.add-product');
   let checkoutElement=document.querySelector('.checkout');
   let textAreaElement=document.querySelector('textarea');
   let uniqueProducts={};
   let sum=0;
   
   for (const button of addButtonElements) {
      button.addEventListener('click', addProduct);
   }

   checkoutElement.addEventListener('click', (e)=>{
      for (let b of addButtonElements) {
         b.removeEventListener('click', addProduct);
      }
      let products=Object.keys(uniqueProducts);
      let totalPrice=sum.toFixed(2);
      textAreaElement.textContent+=`You bought ${products.join(', ')} for ${totalPrice}.`;
   });

   function addProduct(e){
      let productElement=e.currentTarget
      .parentElement
      .parentElement;

      
      let prodName=productElement.querySelector('.product-title')
      .textContent;
      
      
      let prodPrice=Number(productElement.querySelector('.product-line-price')
      .textContent)
      .toFixed(2);
      
      console.log(prodName);
      if (!uniqueProducts[prodName]) {
         uniqueProducts[prodName]='';
         sum+=Number(prodPrice);
      }
      
      textAreaElement.textContent+=`Added ${prodName} for ${prodPrice} to the cart.\n`;
   }
}