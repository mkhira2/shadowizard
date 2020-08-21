function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === "hard") {
        options.shadow_type = "0px"
    } else {
        options.shadow_type = "15px"
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding === true) {
            image.style.padding = "1em";
        }

        if (typeof options.padding === "number") {
            image.style.padding = options.padding + "px";
        }
        if (typeof options.padding === "string" && String(options.padding).endsWith("px")) {
            image.style.padding = options.padding;
        }
    })
}

module.exports.shadowizard = shadowizard;
