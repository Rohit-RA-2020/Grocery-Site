const loadgrocery = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://express-grocery-api.herokuapp.com/grocery", false);
    xhttp.send();

    const groceries = JSON.parse(xhttp.responseText);

    for (let grocery of groceries) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${grocery['groceryname']}</h5>
                        

                        <div>Id: ${grocery.productid}</div>
                        <div>Price: ${grocery.price}</div>
                        <div>Total Quantity: ${grocery.quantity}</div>

                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('grocery').innerHTML = document.getElementById('grocery').innerHTML + x;
    }
}

loadgrocery();
