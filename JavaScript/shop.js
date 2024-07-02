// Cart
let cartIcon=document.querySelector("#cart-circle");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
//Open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
    document.body.classList.add("cart-open"); 
};
//Close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
    document.body.classList.remove("cart-open"); 
};

//Cart working js
if(document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//Making function
function ready(){
    //Remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i=0; i<addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //Buy button work
    document.getElementsByClassName("buy-now")[0].addEventListener("click", buyButtonClicked);
}


//Buy button
function buyButtonClicked(){
    var total=document.getElementsByClassName("total-price")[0].innerText;
    if(total=="$0"){
        alert("PLease add at least one item to proceed");
    }
    else{
        alert("Your order is placed. Click ok to enter your details");
        var cartContent = document.getElementsByClassName("cart-content")[0];


    
        
        
        var detailsForm = document.getElementsByClassName("form-container")[0];
        detailsForm.style.display = "block";

        /*test**************************test****************/

        var overlay = document.getElementsByClassName("overlay")[0];

        // Show the form and overlay
        detailsForm.style.display = "block";
        overlay.style.display = "block";

        // Make the shop inactive
        document.body.classList.add("inactive");

        /*test****************************test**********************/
        
        var submitBtn = document.getElementById("#submit-form");
        submitBtn.addEventListener("click", function(event){
            while(cartContent.hasChildNodes()){
                cartContent.removeChild(cartContent.firstChild);
                }
                updatetotal();
        })
        
        //********************************************* */
        /*while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
        }
        updatetotal();*/
        


        /*window.location.href = 'page2.html?variable=' + encodeURIComponent(total);*/
    
    }

}

//Remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
//add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price=shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg=shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0; i<cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("You have already added this item into cart");
            return;
        }
    }

    var cartBoxContent = `
                            <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <!-- Remove Cart -->
                            <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("click", quantityChanged);
}




//Update total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i=0; i< cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    //If price contains cents value
    total=Math.round(total * 100)/100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
}

function submitForm(){
    

}

