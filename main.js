document.addEventListener("DOMContentLoaded", () => {
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  const typeParty = document.getElementById("type");
  const typePartyLiNodes = typeParty.parentNode.querySelectorAll("ul li");
  const toggleTypeParty = document.getElementById("toggle-type-party");
  const inputBanner = document.getElementById("banner");
  const fileName = document.querySelector(".wrapper-banner .text");
  const inputTerms = document.querySelectorAll(".wrapper-checks input");
  const form = document.querySelector(".content__form");
  const inputPhone = document.getElementById("contact-phone");
  const inputEmail = document.getElementById("contact-email");

  // Handle mask phone input
  inputPhone.addEventListener("input", (e) => {
    e.target.value = maskPhone(e.target.value);
  });

  // Handle themes input to toggle active class
  themeRadios.forEach((radio) => {
    radio.checked ? radio.parentNode.classList.add("active") : false;
  });
  themeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      themeRadios.forEach((r) => {
        r.parentElement.classList.remove("active");
      });

      e.target.parentElement.classList.add("active");
    });
  });

  // Handle main color input to toggle active class
  if (!typeParty.checked) {
    typePartyLiNodes[0].classList.add("active");
  }
  typeParty.addEventListener("change", function () {
    if (typeParty.checked) {
      typePartyLiNodes[0].classList.remove("active");
      typePartyLiNodes[1].classList.add("active");
    } else {
      typePartyLiNodes[1].classList.remove("active");
      typePartyLiNodes[0].classList.add("active");
    }
  });

  // Handle text type input
  if (toggleTypeParty.checked) {
    toggleTypeParty.parentNode.querySelector("p").textContent = "Claro";
  }
  toggleTypeParty.addEventListener("change", function () {
    if (toggleTypeParty.checked) {
      toggleTypeParty.parentNode.querySelector("p").textContent = "Claro";
    } else {
      toggleTypeParty.parentNode.querySelector("p").textContent = "Escuro";
    }
  });

  // Handle banner input to show file name
  inputBanner.addEventListener("change", () => {
    if (inputBanner.files.length) {
      fileName.textContent = inputBanner.files[0].name;
      fileName.classList.add("selected");
    } else {
      fileName.textContent = "Nenhum arquivo selecionado";
      fileName.classList.remove("selected");
    }
  });

  inputTerms.forEach((input) => {
    input.addEventListener("change", function () {
      if (input.checked) {
        input.parentNode.classList.add("selected");
      } else {
        input.parentNode.classList.remove("selected");
      }
    });
  });

  function validateForm() {
    const requiredFields = form.querySelectorAll("[data-required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (field.type === "checkbox") {
        if (!field.checked) {
          isValid = false;
          field.parentNode.classList.add("error");
        } else {
          field.parentNode.classList.remove("error");
        }
      } else if (!field.value.trim()) {
        isValid = false;
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });

    return isValid;
  }

  function clearErrorsByInput() {
    const errorFields = form.querySelectorAll(".error");
    errorFields.forEach((field) => {
      field.querySelector("input").addEventListener("input", () => {
        field.classList.remove("error");
      });
    });
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function maskPhone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Formulário enviado com sucesso!");
    } else {
        form.querySelectorAll(".error")[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (isValidEmail(inputEmail.value)) {
      inputEmail.parentNode.classList.remove("error");
    }
    clearErrorsByInput();
  });
});
