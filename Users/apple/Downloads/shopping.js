const menubtn=document.querySelector('.menubtn');
            const navlinks=document.querySelector('.navlinks');

            menubtn.addEventListener('click',()=>{
            navlinks.classList.toggle("active");
            });

            const product=["Women","men","Kids","Beauty & jewellery","Home & Kitchen","Electronic Item","Footware & Bags","Food & Drinks"];
            const productlist=document.getElementById("productlist");
            const allproductsLink=document.getElementById("allproductLink");
            const productListsection=document.getElementById("productListsection");

         allproductsLink.addEventListener('click',function(e){
            e.preventDefault();
            productlist.innerHTML="";
            product.forEach(product => {
                const li = document.createElement("li");
    li.textContent = product;
    productlist.appendChild(li);
            });
            productListsection.style.display= "block";

         });

         allproductsLink.addEventListener('mouseleave', () => {
            productlist.style.display = "none";
          });