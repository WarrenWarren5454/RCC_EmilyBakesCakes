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
