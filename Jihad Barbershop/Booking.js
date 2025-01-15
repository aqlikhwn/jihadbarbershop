document.addEventListener("DOMContentLoaded", () => {
    fetch("content.json")
        .then(response => response.json())
        .then(data => {
            const serviceOptions = document.querySelector(".service-options");
            const barberOptions = document.querySelector(".barber-options");
            const reviewDetails = document.getElementById("review-details");

            data.services.forEach(service => {
                const btn = document.createElement("button");
                btn.textContent = `${service.title} - ${service.price}`;
                btn.dataset.service = service.title;
                btn.dataset.price = service.price;
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".service-options button").forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                });
                serviceOptions.appendChild(btn);
            });

            const barbers = ["John Doe", "Jane Smith", "Robert Brown"];
            barbers.forEach(barber => {
                const btn = document.createElement("button");
                btn.textContent = barber;
                btn.dataset.barber = barber;
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".barber-options button").forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                });
                barberOptions.appendChild(btn);
            });

            document.querySelectorAll(".next-btn, .prev-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const currentStep = document.querySelector(".booking-step:not([style='display: none;'])");
                    const nextStep = document.getElementById(btn.dataset.next || btn.dataset.prev);
                    currentStep.style.display = "none";
                    nextStep.style.display = "block";
                });
            });

            document.getElementById("pay-online-btn").addEventListener("click", () => {
                alert("Redirecting to online payment...");
            });

            document.getElementById("pay-at-shop-btn").addEventListener("click", () => {
                alert("Booking confirmed! Pay at the shop.");
            });

            document.querySelector(".next-btn[data-next='step-4']").addEventListener("click", () => {
                const selectedService = document.querySelector(".service-options button.selected");
                const selectedDate = document.getElementById("appointment-date").value;
                const selectedTime = document.getElementById("appointment-time").value;
                const selectedBarber = document.querySelector(".barber-options button.selected");

                if (selectedService && selectedDate && selectedTime && selectedBarber) {
                    reviewDetails.innerHTML = `
                        <strong>Service:</strong> ${selectedService.dataset.service}<br>
                        <strong>Date:</strong> ${selectedDate}<br>
                        <strong>Time:</strong> ${selectedTime}<br>
                        <strong>Barber:</strong> ${selectedBarber.dataset.barber}<br>
                        <strong>Total:</strong> ${selectedService.dataset.price}
                    `;
                } else {
                    alert("Please complete all steps before proceeding.");
                }
            });
        });
});
