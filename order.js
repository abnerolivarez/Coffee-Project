// ==========================================
// GET PRODUCT ID FROM URL
// ==========================================

const urlParams = new URLSearchParams(
    window.location.search
);

const productId = Number(
    urlParams.get("id")
);


// ==========================================
// FIND PRODUCT
// ==========================================

const product = coffeeImage.find(item => {

    return item.id === productId;

});


// ==========================================
// CHECK PRODUCT
// ==========================================

if (!product) {

    alert("Product not found.");

    window.location.href = "index.html";

}


// ==========================================
// ELEMENTS
// ==========================================

const productImage =
    document.getElementById("productImage");

const productTitle =
    document.getElementById("productTitle");

const productDescription =
    document.getElementById("productDescription");

const sizeOptions =
    document.getElementById("sizeOptions");

const summaryProduct =
    document.getElementById("summaryProduct");

const summarySize =
    document.getElementById("summarySize");

const summaryPrice =
    document.getElementById("summaryPrice");

const summaryQuantity =
    document.getElementById("summaryQuantity");

const totalPrice =
    document.getElementById("totalPrice");

const quantityDisplay =
    document.getElementById("quantity");

const totalQuantity =
    document.getElementById("totalQuantity");

const totalQuantityLabel =
    document.getElementById("totalQuantityLabel");

const minusBtn =
    document.getElementById("minusBtn");

const plusBtn =
    document.getElementById("plusBtn");

const placeOrderBtn =
    document.getElementById("placeOrderBtn");


// ==========================================
// VARIABLES
// ==========================================

let selectedOption = "";

let quantity = 1;


// ==========================================
// DISPLAY PRODUCT
// ==========================================

productImage.src = product.img;

productImage.alt = product.title;

productTitle.textContent = product.title;

productDescription.textContent = product.description;

summaryProduct.textContent = product.title;


// ==========================================
// CREATE OPTIONS
// ==========================================

function createOptions() {

    sizeOptions.innerHTML = "";


    // MEAL
    if (product.category === "meal") {

        optionSection.style.display = "none";

        selectedOption = "";

        return;
    }
// ==============================================//


    // ======================================
    // SWEET PRODUCTS
    // ======================================

    if (product.category === "sweet") {


        selectedOption = "1pc";


        const options = [

            {
                name: "1 pcs",
                value: "1pc",
                price: product.price
            },

            {
                name: "2 pcs",
                value: "2pc",
                price: product.price * 2
            },

            {
                name: "3 pcs",
                value: "3pc",
                price: product.price * 3
            }

        ];


        options.forEach((option, index) => {


            const button =
                document.createElement("button");


            button.type = "button";


            button.className =
                "btn btn-outline-dark size-btn";


            // FIRST OPTION ACTIVE

            if (index === 0) {

                button.classList.add("active");

            }


            button.innerHTML = `

                ${option.name}

                <br>

                <small>
                    ₱${option.price}
                </small>

            `;


            // =================================
            // CLICK OPTION
            // =================================

            button.addEventListener("click", () => {


                document
                    .querySelectorAll(".size-btn")
                    .forEach(item => {

                        item.classList.remove("active");

                    });


                button.classList.add("active");


                selectedOption =
                    option.value;


                updateOrder();

            });


            sizeOptions.appendChild(button);

        });

    }
// ================================================================//

    // ======================================
    // COFFEE PRODUCTS
    // ======================================

    else {


        selectedOption = "small";


        const options = [

            {
                name: "Small",
                value: "small",
                price: product.price
            },

            {
                name: "Medium",
                value: "medium",
                price: product.price + 20
            },

            {
                name: "Large",
                value: "large",
                price: product.price + 40
            }

        ];


        options.forEach((option, index) => {


            const button =
                document.createElement("button");


            button.type = "button";


            button.className =
                "btn btn-outline-dark size-btn";


            // FIRST OPTION ACTIVE

            if (index === 0) {

                button.classList.add("active");

            }


            button.innerHTML = `

                ${option.name}

                <br>

                <small>
                    ₱${option.price}
                </small>

            `;


            // =================================
            // CLICK OPTION
            // =================================

            button.addEventListener("click", () => {


                document
                    .querySelectorAll(".size-btn")
                    .forEach(item => {

                        item.classList.remove("active");

                    });


                button.classList.add("active");


                selectedOption =
                    option.value;


                updateOrder();

            });


            sizeOptions.appendChild(button);

        });

    }

}
// ========================================================//



// ==========================================
// GET CURRENT PRICE
// ==========================================

function getOptionPrice() {


    // MEAL
    if (product.category === "meal") {
        return product.price;
    }


    // ======================================
    // SWEET
    // ======================================

    if (product.category === "sweet") {


        if (selectedOption === "1pc") {

            return product.price;

        }


        if (selectedOption === "2pc") {

            return product.price * 2;

        }


        if (selectedOption === "3pc") {

            return product.price * 3;

        }

    }


    // ======================================
    // COFFEE
    // ======================================

    if (selectedOption === "small") {

        return product.price;

    }


    if (selectedOption === "medium") {

        return product.price + 20;

    }


    if (selectedOption === "large") {

        return product.price + 40;

    }

}


// ==========================================
// GET OPTION NAME
// ==========================================

function getOptionName() {

    if (product.category === "meal") {
        return "Regular";
    }

    if (selectedOption === "1pc") {

        return "1 pc";

    }


    if (selectedOption === "2pc") {

        return "2 pcs";

    }


    if (selectedOption === "3pc") {

        return "3 pcs";

    }


    if (selectedOption === "small") {

        return "Small";

    }


    if (selectedOption === "medium") {

        return "Medium";

    }


    if (selectedOption === "large") {

        return "Large";

    }

}


// ==========================================
// UPDATE ORDER
// ==========================================

function updateOrder() {
    const optionLabel = document.querySelector(".optionLabel");

    const currentPrice = getOptionPrice();

    const total = currentPrice * quantity;
    

    // CHANGE LABEL

    if (product.category === "sweet") {

        optionLabel.textContent = "Pc";

    } else {

        optionLabel.textContent = "Size";

    }


    // OPTION

    summarySize.textContent = getOptionName();


    // PRICE

    summaryPrice.textContent = `₱${currentPrice}`;


    // QUANTITY

    summaryQuantity.textContent =
        quantity;


    quantityDisplay.textContent =
        quantity;
    




   // ======================================
    // TOTAL QUANTITY
    // ======================================

    if (product.category === "sweet") {

        let sliceQuantity = 1;


        if (selectedOption === "1pc") {

            sliceQuantity = 1;

        }

        if (selectedOption === "2pc") {

            sliceQuantity = 2;

        }

        if (selectedOption === "3pc") {

            sliceQuantity = 3;

        }


    const totalSlice = sliceQuantity * quantity;

    // Change singular/plural
    if (totalSlice === 1) {
        totalQuantityLabel.textContent = "Total pc.";
    } else {
        totalQuantityLabel.textContent = "Total pcs";
    }

    totalQuantity.textContent = totalSlice;

    } else {

        totalQuantityLabel.textContent = "Total Quantity";

        totalQuantity.textContent = quantity;
    }


    // TOTAL

    totalPrice.textContent =
        `₱${total}`;

}


// ==========================================
// MINUS BUTTON
// ==========================================

minusBtn.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;
        updateOrder();
    }

});


// ==========================================
// PLUS BUTTON
// ==========================================

plusBtn.addEventListener("click", () => {
    quantity++;
    updateOrder();

});


// ==========================================
// PLACE ORDER
// ==========================================

placeOrderBtn.addEventListener("click", () => {


    const instructions =
        document.getElementById("instructions").value;


    const order = {


        productId: product.id,
        product: product.title,

        image: product.img,
        category: product.category,

        option: selectedOption,
        optionName: getOptionName(),

        quantity: quantity,
        price: getOptionPrice(),

        total:
            getOptionPrice() * quantity,


        instructions:
            instructions


    };


    // ======================================
    // SAVE ORDER
    // ======================================

    localStorage.setItem("currentOrder",JSON.stringify(order));

    console.log("ORDER:", order);

    alert("Your order has been added successfully!");
    window.location.href="menu.html#menu-products"

});
    

// ==========================================
// INITIALIZE
// ==========================================

createOptions();

updateOrder();