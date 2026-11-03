// Part 3: JavaScript Interactivity, Search Filter & Form Validation

// Product Search / Filtering Function
function filterProducts() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let grid = document.getElementById('productGrid');
    let cards = grid.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Enquiry Form Validation & Processing
function validateEnquiryForm(event) {
    event.preventDefault();
    
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let productType = document.getElementById('productType').value;
    let message = document.getElementById('message').value.trim();
    let feedback = document.getElementById('formFeedback');

    if (fullName === "" || email === "" || phone === "" || productType === "" || message === "") {
        feedback.style.color = "red";
        feedback.innerText = "Please fill in all required fields.";
        return false;
    }

    // Phone number validation (10-digit format)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        feedback.style.color = "red";
        feedback.innerText = "Please enter a valid 10-digit phone number.";
        return false;
    }

    feedback.style.color = "green";
    feedback.innerText = "Thank you, " + fullName + "! Your enquiry has been successfully processed. Estimated response time: 24 hours.";
    document.getElementById('enquiryForm').reset();
    return false;
}

// Contact Form Handling with Mailto
function handleContactSubmission(event) {
    event.preventDefault();
    let name = document.getElementById('cName').value;
    let email = document.getElementById('cEmail').value;
    let message = document.getElementById('cMessage').value;

    let mailtoLink = `mailto:info@sweetcrumbsbakery.co.za?subject=General Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)} (%0AReply Email: ${encodeURIComponent(email)})`;
    window.location.href = mailtoLink;
}