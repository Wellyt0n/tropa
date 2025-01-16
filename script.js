// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Modal functionality
const modal = document.getElementById("paymentModal");
const closeButton = document.querySelector(".close-button");
let selectedPlan = "";

// Add click handlers for CTA buttons
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPlan = button
      .closest(".pricing-card")
      .querySelector("h3").textContent;
    modal.style.display = "block";
  });
});

// Close modal when clicking the close button
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form validation and submission
const paymentForm = document.getElementById("paymentForm");
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  cpf: document.getElementById("cpf"),
};

// Input masks
function maskCPF(value) {
  return value
    .replace(/\D/g, "")
    .replace(/([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, "$1.$2.$3-$4")
    .substr(0, 14);
}

function maskPhone(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(^\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{4,5})(\d{4}$)/g, "$1-$2");
}

// Apply masks to inputs
inputs.cpf.addEventListener("input", (e) => {
  e.target.value = maskCPF(e.target.value);
});

inputs.phone.addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);
});

// Form submission
paymentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    plan: selectedPlan,
    name: inputs.name.value,
    email: inputs.email.value,
    phone: inputs.phone.value,
    cpf: inputs.cpf.value,
    paymentMethod: document.querySelector('input[name="payment"]:checked')
      .value,
  };

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    Swal.fire({
      icon: "error",
      title: "Email inválido",
      text: "Por favor, insira um email válido",
    });
    return;
  }

  // Validate CPF (basic validation)
  if (formData.cpf.replace(/\D/g, "").length !== 11) {
    Swal.fire({
      icon: "error",
      title: "CPF inválido",
      text: "Por favor, insira um CPF válido",
    });
    return;
  }

  // Simulate API call
  try {
    // Here you would normally make an API call to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    Swal.fire({
      icon: "success",
      title: "Pedido realizado com sucesso!",
      text: "Você receberá um email com as instruções de pagamento.",
      confirmButtonColor: "#2b5c0f",
    }).then(() => {
      modal.style.display = "none";
      paymentForm.reset();
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Erro ao processar pedido",
      text: "Por favor, tente novamente mais tarde",
    });
  }
});

// Add intersection observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll(
  ".pricing-card, .benefit-card",
);
animatedElements.forEach((element) => {
  observer.observe(element);
});

// Add responsive menu toggle
const createMobileMenu = () => {
  const header = document.querySelector(".header-content");
  const nav = document.querySelector(".nav-menu");

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-toggle");
  menuButton.innerHTML = "☰";
  menuButton.style.display = "none";

  header.insertBefore(menuButton, nav);

  menuButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      menuButton.style.display = "block";
      nav.style.display = "none";
    } else {
      menuButton.style.display = "none";
      nav.style.display = "flex";
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
};

// Initialize mobile menu
createMobileMenu();
