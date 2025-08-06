async function loadDynamicForm() {
  try {
    const response = await fetch("/api/forms/get-structure");
    const formData = await response.json();
    if (!response.ok) {
      throw new Error(formData.error || "Failed to load form");
    }
    const formHTML = generateFormHTML(formData);
    document.getElementById("form-container").innerHTML = formHTML;
    document.getElementById("loading").style.display = "none";
    document.getElementById("form-container").style.display = "block";
    setupFormSubmission();
  } catch (error) {
    console.error("Error loading form:", error);
    document.getElementById("loading").innerHTML = `
          <div class="error">
            <strong>Error loading form:</strong> ${error.message}
          </div>
        `;
  }
}
function generateFormHTML(formData) {
  const { info, items } = formData;
  let html = `
        <h1 class="form-title">${info.title}</h1>
        <p class="form-description">${info.description}</p>
        <form id="dynamic-form">
      `;
  items.forEach((item) => {
    const question = item.questionItem?.question;
    if (!question) return;
    const isRequired = question.required;
    const title = item.title;
    const questionId = question.questionId;
    html += `<div class="form-group">`;
    html += `<label class="form-label">
          ${title}
          ${isRequired ? '<span class="required">*</span>' : ""}
        </label>`;
    if (question.textQuestion) {
      html += `<input 
            type="text" 
            class="form-input" 
            data-question-id="${questionId}"
            ${isRequired ? "required" : ""}
            placeholder="Your answer"
          />`;
    } else if (question.choiceQuestion) {
      const isCheckbox = question.choiceQuestion.type === "CHECKBOX";
      const options = question.choiceQuestion.options || [];
      html += `<div class="checkbox-group">`;
      options.forEach((option) => {
        const inputType = isCheckbox ? "checkbox" : "radio";
        const name = `question_${questionId}`;
        html += `
              <label class="checkbox-item">
                <input 
                  type="${inputType}" 
                  name="${name}"
                  value="${option.value}"
                  class="form-checkbox"
                  data-question-id="${questionId}"
                />
                <span>${option.value}</span>
              </label>
            `;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });
  html += `
        <button type="submit" class="submit-btn">
          Submit Application
        </button>
        </form>
      `;
  return html;
}
function setupFormSubmission() {
  const form = document.getElementById("dynamic-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    try {
      const formData = collectFormData(form);
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        window.location.href = "/thank-you";
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Application";
    }
  });
}
function collectFormData(form) {
  const data = {};
  const inputs = form.querySelectorAll("[data-question-id]");
  inputs.forEach((input) => {
    const questionId = input.dataset.questionId;
    if (input.type === "checkbox") {
      if (input.checked) {
        if (!data[questionId]) data[questionId] = [];
        data[questionId].push(input.value);
      }
    } else if (input.type === "radio") {
      if (input.checked) {
        data[questionId] = input.value;
      }
    } else {
      data[questionId] = input.value;
    }
  });
  return {
    name: data["2e479368"] || "",
    email: data["7f606ef0"] || "",
    phone: data["7ce06e66"] || "",
    interests: data["569d1903"] || [],
    smsConsent: data["16386da6"] || null
  };
}
loadDynamicForm();
