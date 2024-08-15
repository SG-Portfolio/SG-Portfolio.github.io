const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    // Check if any of the input fields are empty
    if (fullName.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "" || subject.value.trim() === "" || mess.value.trim() === "") {
        // If any field is empty, display an error message
        Swal.fire({
            title: "Error!",
            text: "Please fill out all required fields before sending the message.",
            icon: "error"
        });
        return; // Exit the function without sending the email
    }

    // If all fields are filled, proceed to send the email
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ghazaryan7.y@gmail.com",
        Password: "FB0A9B01A102D6AA162FAE93458C386BC981",
        To: 'ghazaryan7.y@gmail.com',
        From: "ghazaryan7.y@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send message. Please try again later.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again later.",
            icon: "error"
        });
        console.error('Email sending error:', error);
    });
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }

    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (validateInputs()) {
        // If inputs are valid, send email
        sendEmail();
        form.reset(); // Reset form fields
    } else {
        // If inputs are invalid, show error message
        Swal.fire({
            title: "Error!",
            text: "Please fill out all required fields correctly.",
            icon: "error"
        });
    }
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
})