const loadcart = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://express-grocery-api.herokuapp.com/mycart", false);
    xhttp.send();

    const mycart = JSON.parse(xhttp.responseText);

    for (let cart of mycart) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${cart['groceryname']}</h5>
                        

                        <div>Id: ${cart.productid}</div>
                        <div>Price: ${cart.price}</div>
                        <div>Total Quantity: ${cart.quantity}</div>

                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('cart').innerHTML = document.getElementById('cart').innerHTML + x;
    }
}

loadcart();