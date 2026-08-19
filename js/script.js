window.onload = function () {

    var form = document.getElementById("orderForm");

    form.onsubmit = function (event) {

        event.preventDefault();

        var fname = document.getElementById("fname").value.trim();
        var phone = document.getElementById("phone").value.trim();

        var meal = document.getElementById("meal").value;
        var service = document.getElementById("service").value;

        var message = document.getElementById("formMessage");

        if (fname === "") {

            message.style.color = "#7dff9b";
            message.textContent = "Please enter your name.";

            document.getElementById("fname").focus();

            return;
        }

        if (phone === "") {

            message.style.color = "#7dff9b";
            message.textContent = "Please enter your phone number.";

            document.getElementById("phone").focus();

            return;
        }

        if (phone.length < 10) {

            message.style.color = "#7dff9b";
            message.textContent = "Phone number is too short.";

            document.getElementById("phone").focus();

            return;
        }

        if (meal === "") {

            message.style.color = "#7dff9b";
            message.textContent = "Please choose a meal.";

            return;
        }

        if (service === "") {

            message.style.color = "#7dff9b";
            message.textContent = "Please select a service type.";

            return;
        }

        var time = new Date().toLocaleTimeString();

        message.style.color = "#7dff9b";

        message.textContent =
            "Thanks " + fname +
            "! Your order for " + meal +
            " has been placed successfully at " + time +
            ". We will contact you at " + phone + ".";

        form.reset();

    };

};