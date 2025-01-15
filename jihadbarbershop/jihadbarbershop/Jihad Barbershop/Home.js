document.addEventListener("DOMContentLoaded", () => {
    // Load Menu Data
    const menuData = [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Services", href: "#services" },
        { text: "Contact Us", href: "#contact" },
        { text: "Location", href: "#location" },
        { text: "Login", href: "login.html", class: "login-btn" },
        { text: "More", href: "#more" }
    ];

    const navLinks = document.querySelector(".nav-links");
    navLinks.innerHTML = menuData
        .map(
            (item) =>
                `<li><a href="${item.href}" class="${item.class || ""}">${item.text}</a></li>`
        )
        .join("");

    // Fetch Content JSON
    fetch("content.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update Hero Section
            const heroSection = document.querySelector(".hero");
            heroSection.querySelector("h1").textContent = data.hero.title;
            heroSection.querySelector("p").textContent = data.hero.description;

            const buttonsContainer = heroSection.querySelector(".hero-buttons");
            buttonsContainer.innerHTML = "";
            data.hero.buttons.forEach(button => {
                const btn = document.createElement("button");
                btn.textContent = button.text;
                btn.className = button.type === "explore" ? "explore-btn" : "video-btn";
                buttonsContainer.appendChild(btn);
            });

            // Update Pricing Section
            const pricingContainer = document.querySelector(".pricing-container");
            pricingContainer.innerHTML = "";
            data.services.forEach(service => {
                const card = document.createElement("div");
                card.className = "pricing-card";

                const title = document.createElement("h3");
                title.textContent = service.title;

                const price = document.createElement("p");
                price.className = "price";
                price.textContent = service.price;

                const description = document.createElement("p");
                description.textContent = service.description;

                const button = document.createElement("button");
                button.className = "book-now";
                button.textContent = "Book Now";
                button.addEventListener("click", () => location.href = "booking.html");

                card.appendChild(title);
                card.appendChild(price);
                card.appendChild(description);
                card.appendChild(button);

                pricingContainer.appendChild(card);
            });

            // Update Reviews Section
            const reviewsContainer = document.querySelector(".reviews-container");
            reviewsContainer.innerHTML = "";
            data.reviews.forEach(review => {
                const reviewCard = document.createElement("div");
                reviewCard.className = "review-card";

                const header = document.createElement("div");
                header.className = "review-header";

                const avatar = document.createElement("img");
                avatar.src = review.avatar;
                avatar.alt = review.name;
                avatar.className = "review-avatar";

                const info = document.createElement("div");
                info.className = "review-info";
                const name = document.createElement("h3");
                name.textContent = review.name;
                const location = document.createElement("p");
                location.textContent = review.location;
                info.appendChild(name);
                info.appendChild(location);

                const rating = document.createElement("div");
                rating.className = "review-rating";
                rating.textContent = `⭐ ${review.rating}`;

                header.appendChild(avatar);
                header.appendChild(info);
                header.appendChild(rating);

                const text = document.createElement("p");
                text.className = "review-text";
                text.textContent = review.text;

                reviewCard.appendChild(header);
                reviewCard.appendChild(text);

                reviewsContainer.appendChild(reviewCard);
            });
        })
        .catch(error => console.error("Error loading JSON data:", error));

    // Operating Hours Display
    const hoursDisplay = document.querySelector('.hours');
    const currentTime = new Date();
    const openHour = 12;
    const closeHour = 23;
    const currentHour = currentTime.getHours();

    if (currentHour >= openHour && currentHour < closeHour) {
        hoursDisplay.innerHTML += `<div style="color: green;">We are currently <strong>Open</strong>.</div>`;
    } else {
        hoursDisplay.innerHTML += `<div style="color: red;">We are currently <strong>Closed</strong>.</div>`;
    }

    // Login Button Redirect
    document.querySelector('.login-btn').addEventListener('click', () => {
        location.href = 'login.html';
    });
});
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }
});
document.querySelector('.Location-btn').addEventListener('click', () => {
    location.href = 'location.html';
});
