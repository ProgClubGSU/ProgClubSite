console.log("🚀 Form script loading...");
window.addEventListener("error", function(e) {
  console.error("JavaScript Error:", e.error, e.filename, e.lineno, e.colno);
  console.error("Error details:", e.error?.stack);
});
console.log("📝 Error handler added");
function initializeForm() {
  console.log("🔄 Attempting form initialization...");
  try {
    let showError2 = function(input, message) {
      const errorDiv = document.getElementById(input.id + "-error");
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add("show");
      }
      input.classList.remove("success");
      input.classList.add("error");
    }, hideError2 = function(input) {
      const errorDiv = document.getElementById(input.id + "-error");
      if (errorDiv) {
        errorDiv.classList.remove("show");
      }
      input.classList.remove("error");
    }, showSuccess2 = function(input) {
      input.classList.remove("error");
      input.classList.add("success");
    }, showCheckboxGroupError2 = function(message) {
      const errorDiv = document.getElementById("interests-error");
      const group = document.getElementById("interests-group");
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add("show");
      }
      if (group) {
        group.classList.remove("success");
        group.classList.add("error");
      }
    }, hideCheckboxGroupError2 = function() {
      const errorDiv = document.getElementById("interests-error");
      const group = document.getElementById("interests-group");
      if (errorDiv) {
        errorDiv.classList.remove("show");
      }
      if (group) {
        group.classList.remove("error");
      }
    }, showCheckboxGroupSuccess2 = function() {
      const group = document.getElementById("interests-group");
      if (group) {
        group.classList.remove("error");
        group.classList.add("success");
      }
    }, showGroupError2 = function(group, message) {
      const errorDiv = group.parentElement.querySelector(".error-message");
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add("show");
      }
      group.classList.remove("success");
      group.classList.add("error");
    }, hideGroupError2 = function(group) {
      const errorDiv = group.parentElement.querySelector(".error-message");
      if (errorDiv) {
        errorDiv.classList.remove("show");
      }
      group.classList.remove("error");
    }, showGroupSuccess2 = function(group) {
      group.classList.remove("error");
      group.classList.add("success");
    }, validateField2 = function(input) {
      const validationType = input.dataset.validate;
      const value = input.value;
      if (!validationType) return true;
      const validator = validators[validationType];
      if (!validator) return true;
      const error = validator(value);
      if (error) {
        showError2(input, error);
        return false;
      } else {
        hideError2(input);
        if (value.trim()) {
          showSuccess2(input);
        }
        return true;
      }
    };
    var showError = showError2, hideError = hideError2, showSuccess = showSuccess2, showCheckboxGroupError = showCheckboxGroupError2, hideCheckboxGroupError = hideCheckboxGroupError2, showCheckboxGroupSuccess = showCheckboxGroupSuccess2, showGroupError = showGroupError2, hideGroupError = hideGroupError2, showGroupSuccess = showGroupSuccess2, validateField = validateField2;
    console.log("🔍 Looking for form elements...");
    const form = document.getElementById("join-form");
    const submitBtn = document.getElementById("submit-btn");
    console.log("Form element:", form);
    console.log("Submit button:", submitBtn);
    if (!form || !submitBtn) {
      console.error("Form or button not found!");
      console.error("Available form elements:", document.querySelectorAll("form"));
      console.error("Available buttons:", document.querySelectorAll("button"));
      console.log("⏳ Retrying form initialization in 200ms...");
      setTimeout(initializeForm, 200);
      return false;
    }
    console.log("✅ Form and button found");
    const debugDiv = document.createElement("div");
    debugDiv.id = "form-debug-indicator";
    debugDiv.style.cssText = "position:fixed;top:10px;right:10px;background:green;color:white;padding:5px;z-index:9999;font-size:11px;border-radius:3px;";
    debugDiv.innerHTML = "FORM READY";
    const existingDebug = document.getElementById("form-debug-indicator");
    if (existingDebug) {
      existingDebug.remove();
    }
    document.body.appendChild(debugDiv);
    console.log("🎯 Starting validation setup...");
    const validators = {
      required: (value) => {
        return value.trim().length > 0 ? null : "This field is required";
      },
      email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return null;
      },
      phone: (value) => {
        if (!value.trim()) return null;
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length < 7 || cleaned.length > 15) {
          return "Please enter a valid phone number (7-15 digits)";
        }
        return null;
      }
    };
    console.log("✅ Validators defined");
    console.log("✅ Error display functions defined");
    console.log("✅ Checkbox functions defined");
    console.log("✅ validateField function defined");
    console.log("🔧 Setting up input validation...");
    const inputs = form.querySelectorAll("input[data-validate]");
    console.log("Found inputs with validation:", inputs.length);
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        validateField2(input);
      });
      input.addEventListener("input", () => {
        if (input.classList.contains("error")) {
          validateField2(input);
        }
      });
    });
    console.log("✅ Input validation setup complete");
    console.log("🔧 Setting up checkbox validation...");
    const checkboxes = form.querySelectorAll('input[name="entry.1453136131"]');
    console.log("Found checkboxes:", checkboxes.length);
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const checkedBoxes = form.querySelectorAll('input[name="entry.1453136131"]:checked');
        if (checkedBoxes.length > 0) {
          hideCheckboxGroupError2();
          showCheckboxGroupSuccess2();
        } else {
          const group = document.getElementById("interests-group");
          if (group.classList.contains("error") || group.classList.contains("success")) {
            showCheckboxGroupError2("Please select at least one event interest");
          }
        }
      });
    });
    console.log("✅ Checkbox validation setup complete");
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
    const currentSubmitBtn = document.getElementById("submit-btn");
    console.log("🔧 Setting up form submission...");
    currentSubmitBtn.addEventListener("click", function(e) {
      console.log("🔥 Submit button clicked");
      e.preventDefault();
      e.stopPropagation();
      try {
        handleFormSubmission();
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error submitting the form. Please try again.");
        currentSubmitBtn.disabled = false;
        currentSubmitBtn.querySelector(".btn-text").textContent = "Submit Application";
      }
    });
    console.log("✅ Click handler added");
    async function handleFormSubmission() {
      console.log("Starting form validation...");
      let isValid = true;
      const inputs2 = form.querySelectorAll("input[data-validate]");
      inputs2.forEach((input) => {
        const fieldValid = validateField2(input);
        if (!fieldValid) {
          isValid = false;
        }
      });
      const checkboxGroups = form.querySelectorAll(".checkbox-group, .radio-group");
      checkboxGroups.forEach((group) => {
        const groupInputs = group.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        const isRequired = group.closest(".form-group").querySelector(".form-label").textContent.includes("*");
        if (isRequired) {
          const checkedInputs = group.querySelectorAll("input:checked");
          if (checkedInputs.length === 0) {
            showGroupError2(group, "Please make a selection");
            isValid = false;
          } else {
            hideGroupError2(group);
            showGroupSuccess2(group);
          }
        }
      });
      if (!isValid) {
        console.log("Validation failed");
        const firstError = form.querySelector(".error");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }
      console.log("✅ Validation passed - submitting form");
      currentSubmitBtn.disabled = true;
      currentSubmitBtn.querySelector(".btn-text").textContent = "Submitting...";
      try {
        const formData = {};
        const inputs3 = form.querySelectorAll("[data-question-id]");
        inputs3.forEach((input) => {
          const questionId = input.dataset.questionId;
          if (input.type === "checkbox") {
            if (input.checked) {
              if (!formData[questionId]) formData[questionId] = [];
              formData[questionId].push(input.value);
            }
          } else if (input.type === "radio") {
            if (input.checked) {
              formData[questionId] = input.value;
            }
          } else {
            let value = input.value;
            if (input.type === "tel") {
              value = value.replace(/\D/g, "");
            }
            formData[questionId] = value;
          }
        });
        const apiData = {
          name: formData["2e479368"] || "",
          email: formData["7f606ef0"] || "",
          phone: formData["7ce06e66"] || "",
          interests: formData["569d1903"] || [],
          smsConsent: formData["16386da6"] || null
        };
        console.log("📤 Submitting to API:", apiData);
        const response = await fetch("/api/forms/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiData)
        });
        const result = await response.json();
        if (result.success) {
          console.log("✅ Form submitted successfully");
          window.location.href = "/thank-you";
        } else {
          console.error("Form submission failed:", result.error);
          alert("There was an error submitting the form. Please try again.");
          currentSubmitBtn.disabled = false;
          currentSubmitBtn.querySelector(".btn-text").textContent = "Submit Application";
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("There was a network error. Please check your connection and try again.");
        currentSubmitBtn.disabled = false;
        currentSubmitBtn.querySelector(".btn-text").textContent = "Submit Application";
      }
    }
    console.log("✅ Form initialization complete");
    return true;
  } catch (error) {
    console.error("Setup error:", error);
    console.error("Error stack:", error.stack);
    return false;
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeForm);
} else {
  initializeForm();
}
document.addEventListener("astro:page-load", () => {
  console.log("🔄 Astro page-load event detected, re-initializing form...");
  initializeForm();
});
document.addEventListener("astro:after-swap", () => {
  console.log("🔄 Astro after-swap event detected, re-initializing form...");
  initializeForm();
});
setTimeout(() => {
  if (!document.getElementById("form-debug-indicator")) {
    console.log("🔄 Backup initialization triggered...");
    initializeForm();
  }
}, 1e3);
console.log("✅ Script setup complete");
