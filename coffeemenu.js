// // THIS IS FOR MENU IN INDEX.HTML
const coffeeMenu = document.querySelector(".coffee-menu");

    
    function displayCoffee(category = "hot") {

    const filteredCoffee = coffeeImage.filter(item => {
        return item.category === category;
    });

    coffeeMenu.innerHTML = filteredCoffee.map(item => `

        <div class="bg-dark col-12 col-md-5 col-lg-3 border border-2 rounded-4 shadow-lg mb-3">

            <div class="text-center">

                ${item.category === "hot" ? `
                    <div class="steam-wrapper">
                        <div class="steam steam-1"></div>
                        <div class="steam steam-2"></div>
                        <div class="steam steam-3"></div>
                    </div>
                ` : ""}

                <img src="${item.img}" 
                     alt="${item.title}" 
                     class="product mt-4 mb-2">

                <a href="order.html?id=${item.id}"
                    class="title-product mt-0 bg-warning mx-auto p-2 rounded text-dark fw-semibold text-decoration-none d-block">
                        ${item.title}
                    
                </a>

                <p class="mt-2 text-light fw-normal">
                    ${item.description}
                </p>

            </div>

        </div>

    `).join("");
}



const hotMenu = document.querySelectorAll(".hotmenu");
const loader = document.querySelector(".loader-container");

    hotMenu.forEach(menu => {

    menu.addEventListener("click", () => {

        // Remove active from all
        hotMenu.forEach(item => {
            item.classList.remove("active");
        });

        // Add active to clicked menu
        menu.classList.add("active");

        // Show loader
        loader.classList.add("show");

        setTimeout(() => {

            // Show selected category
            displayCoffee(menu.textContent.toLowerCase());

            // Hide loader
            loader.classList.remove("show");

        }, 1000);

    });

});



displayCoffee("hot");
