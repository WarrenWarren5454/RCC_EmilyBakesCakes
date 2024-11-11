function toggleCustomMessage() {
    const messageCheckbox = document.getElementById("custom_message_check");
    const messageInput = document.getElementById("custom_message_input");
    messageInput.style.display = messageCheckbox.checked ? "block" : "none";
}

function generateLayerOptions() {
    const numLayers = document.getElementById("num_layers").value;
    const layerOptions = document.getElementById("layer_options");
    layerOptions.innerHTML = ""; // Clear previous layer options

    for (let i = 1; i <= numLayers; i++) {
        const layerDiv = document.createElement("div");
        layerDiv.className = "layer-group";
        layerDiv.innerHTML = `
            <h3>Layer ${i}</h3>
            <div class="layer-row">
                <div class="layer-item">
                    <label for="flavor_${i}">Flavor</label>
                    <select id="flavor_${i}" name="flavor_${i}" required>
                        <option value="">Select Flavor</option>
                        <option value="vanilla">Vanilla</option>
                        <option value="almond">Almond</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="strawberry">Strawberry</option>
                    </select>
                </div>
                <div class="layer-item">
                    <label for="icing_${i}">Icing</label>
                    <select id="icing_${i}" name="icing_${i}" required>
                        <option value="">Select Icing</option>
                        <option value="white_buttercream">White Buttercream</option>
                        <option value="almond_buttercream">Almond Buttercream</option>
                        <option value="chocolate_ganache">Chocolate Ganache</option>
                    </select>
                </div>
                <div class="layer-item">
                    <label for="decoration_${i}">Decoration</label>
                    <select id="decoration_${i}" name="decoration_${i}">
                        <option value="">Select Decoration</option>
                        <option value="buttercream_flowers">Buttercream Flowers</option>
                        <option value="fondant_decorations">Fondant Decorations</option>
                    </select>
                </div>
            </div>
        `;
        layerOptions.appendChild(layerDiv);
    }
}

function simulateTransaction() {
    const placeOrderButton = document.getElementById('placeOrderButton');
    const loadingMessage = document.getElementById('loadingMessage');
    
    // Disable the button and show the loading message
    placeOrderButton.disabled = true;
    loadingMessage.style.display = 'block';

    // Gather form data
    const orderData = {
        orderId: "1001", // Generate a random order number
        employeeId: document.getElementById('employee_id').value,
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        phoneNumber: document.getElementById('phone_number').value,
        email: document.getElementById('email').value,
        address: document.getElementById('street_address').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zip_code').value,
        deliveryDate: document.getElementById('delivery_date').value,
        numLayers: document.getElementById('num_layers').value,
        customMessage: document.getElementById('custom_message').value,
        initialDeposit: document.getElementById('initialDeposit').value
    };

    // Save the data to localStorage
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Simulate a delay (e.g., 3 seconds for the POS transaction to "complete")
    setTimeout(() => {
        loadingMessage.style.display = 'none';
        placeOrderButton.disabled = false;

        // Redirect to the "Order Complete" page
        window.location.href = 'order_complete.html';
    }, 3000); // 3000ms = 3 seconds
}

