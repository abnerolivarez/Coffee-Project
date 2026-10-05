

const menuProducts = document.querySelector("#menu-products");


        /* ========================= */
        /* DISPLAY PRODUCTS */
        /* ========================= */

        function displayProducts(category = "all") {

            let filteredProducts;

            if (category === "all") {

                filteredProducts = coffeeImage;

            } else {

                filteredProducts =
                    coffeeImage.filter(product =>
                        product.category === category
                    );

            }


            menuProducts.innerHTML = filteredProducts.map(product => `

                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

                    <div class="product-card rounded-4 shadow-sm h-100">

                        <div class="product-image-container">

                            <img
                                src="${product.img}"
                                alt="${product.title}"
                                class="product-image rounded-5">

                        </div>


                        <div class="p-4">

                            <div class="d-flex justify-content-between
                                align-items-center mb-2">

                                <span class="badge category-badge rounded-pill">

                                    ${product.category}

                                </span>

                                <span class="product-price fw-bold">

                                    ₱${product.price}

                                </span>

                            </div>


                            <h5 class="fw-bold">

                                ${product.title}

                            </h5>


                            <p class="text-secondary small">

                                ${product.description}

                            </p>

                            <div class="text-center">
                            <a href="order.html?id=${product.id}"
                                class="order text-decoration-none py-2 px-4 rounded-pill w-100 fw-semibold">

                                Order Now!

                                <i class="fa-solid fa-arrow-right ms-2"></i>

                            </a>
                            </div>

                        </div>

                    </div>

                </div>

            `).join("");

        }



        /* ========================= */
        /* FILTER BUTTONS */
        /* ========================= */
        const loadermenu = document.querySelector(".loader-container");

        const filterButtons =
            document.querySelectorAll(".menu-filter");


        filterButtons.forEach(button => {

            button.addEventListener("click", () => {


                filterButtons.forEach(item => {

                    item.classList.remove("active");

                });


                button.classList.add("active");


                const category = button.dataset.category;


                 // Show loader
                    loadermenu.classList.add("show");

                    // Wait before displaying products
                    setTimeout(() => {

                        displayProducts(category);

                        // Hide loader
                        loadermenu.classList.remove("show");
                        displayProducts(category);

                    }, 1000);



               

            });

        });



        /* ========================= */
        /* INITIAL PRODUCTS */
        /* ========================= */

        displayProducts("all");  
