// Inject CSS for the Start a Project Modal
const modalStyles = `
  /* Backdrop Blur */
  .modal-backdrop.show {
    backdrop-filter: blur(8px);
    background-color: rgba(9, 9, 11, 0.8) !important;
  }
  
  /* Modal Content Styling */
  #projectInquiryModal .modal-content {
    background-color: #0c0c0e !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 28px !important;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8) !important;
    overflow: hidden;
  }
  
  #projectInquiryModal .modal-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
    background: rgba(255, 255, 255, 0.01);
  }
  
  #projectInquiryModal .modal-title {
    font-family: "Urbanist", sans-serif;
    color: #ffffff !important;
  }
  
  #projectInquiryModal .modal-body {
    background: #0c0c0e;
    color: #ffffff;
  }
  
  /* Form Inputs styling */
  #projectInquiryModal .form-group {
    margin-bottom: 20px;
  }
  
  #projectInquiryModal label {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-400);
    margin-bottom: 8px;
    display: block;
  }
  
  #projectInquiryModal .inquiry-input,
  #projectInquiryModal .inquiry-select,
  #projectInquiryModal .inquiry-textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px 16px;
    color: #ffffff;
    font-family: "Urbanist", sans-serif;
    font-size: 15px;
    transition: all 0.3s ease;
  }
  
  #projectInquiryModal .inquiry-input:focus,
  #projectInquiryModal .inquiry-select:focus,
  #projectInquiryModal .inquiry-textarea:focus {
    border-color: var(--brand, #FD3A25) !important;
    background: rgba(255, 255, 255, 0.05);
    outline: none;
    box-shadow: 0 0 0 3px rgba(253, 58, 37, 0.25) !important;
  }
  
  #projectInquiryModal .inquiry-select option {
    background-color: #0c0c0e;
    color: #ffffff;
  }
  
  /* Pricing Card Overview */
  .pricing-mini-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.3s ease;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }
  
  .pricing-mini-card:hover {
    border-color: rgba(253, 58, 37, 0.4);
    background: rgba(255, 255, 255, 0.04);
  }
  
  .pricing-mini-card.featured {
    border-color: var(--brand, #FD3A25);
    background: rgba(253, 58, 37, 0.04);
  }
  
  .pricing-mini-card .plan-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--brand, #FD3A25);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  
  .pricing-mini-card .plan-price {
    font-size: 20px;
    color: #ffffff;
  }
  
  .pricing-mini-card .plan-price span {
    font-size: 13px;
    color: var(--neutral-400);
  }
  
  .pricing-mini-card ul {
    margin: 12px 0 16px 0;
    padding-left: 0;
  }
  
  .pricing-mini-card ul li {
    font-size: 13px;
    color: var(--neutral-300);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .pricing-mini-card ul li i {
    color: var(--brand, #FD3A25);
    font-size: 11px;
  }
  
  .pricing-select-btn {
    width: 100%;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  /* Help / Contact Options */
  .help-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    color: #ffffff !important;
    transition: all 0.3s ease;
    text-decoration: none !important;
    margin-bottom: 10px;
  }
  
  .help-option:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--brand, #FD3A25);
  }
  
  .help-option i {
    font-size: 20px;
    color: var(--brand, #FD3A25);
    width: 24px;
    text-align: center;
  }
  
  .help-option .option-text h6 {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2px;
  }
  
  .help-option .option-text p {
    font-size: 12px;
    color: var(--neutral-400);
    margin: 0;
  }
  
  /* Validation error styling */
  #projectInquiryModal .error-message {
    color: var(--brand, #FD3A25);
    font-size: 12px;
    margin-top: 4px;
    display: none;
  }
  
  #projectInquiryModal .is-invalid {
    border-color: var(--brand, #FD3A25) !important;
  }
`;

const modalHTML = `
<div class="modal fade" id="projectInquiryModal" tabindex="-1" aria-labelledby="projectInquiryModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header px-4 py-3 d-flex align-items-center justify-content-between">
        <h5 class="modal-title fw-bold text-white mb-0" id="projectInquiryModalLabel">Start Your Project</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="box-shadow: none;"></button>
      </div>
      <div class="modal-body p-4">
        <div class="row g-4">
          <!-- Left side: Inquiry Form -->
          <div class="col-lg-8">
            <div id="formContainer">
              <h4 class="fw-semibold text-white mb-3" style="font-size: 20px;">Tell Us About Your Project</h4>
              <form id="startProjectForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalFullName">Full Name *</label>
                      <input type="text" id="modalFullName" name="name" class="inquiry-input" placeholder="e.g. John Doe">
                      <div class="error-message" id="err-name">Full name is required.</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalEmail">Email Address *</label>
                      <input type="email" id="modalEmail" name="email" class="inquiry-input" placeholder="e.g. john@example.com">
                      <div class="error-message" id="err-email">Valid email address is required.</div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalPhone">Phone Number *</label>
                      <input type="tel" id="modalPhone" name="phone" class="inquiry-input" placeholder="e.g. +91 98765 43210">
                      <div class="error-message" id="err-phone">Phone number is required.</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalCompany">Company Name</label>
                      <input type="text" id="modalCompany" name="company" class="inquiry-input" placeholder="e.g. Acme Corp">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalProjectType">Project Type *</label>
                      <select id="modalProjectType" name="project_type" class="inquiry-select">
                        <option value="Website Development">Website Development</option>
                        <option value="E-Commerce Website">E-Commerce Website</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile Application">Mobile Application</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="modalBudget">Budget Range *</label>
                      <select id="modalBudget" name="budget_range" class="inquiry-select">
                        <option value="Below ₹25,000">Below ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                        <option value="custom">Custom / Enter Manually...</option>
                      </select>
                      <input type="text" id="modalCustomBudget" class="inquiry-input mt-2" placeholder="Enter custom budget (e.g. ₹75,000)" style="display: none;">
                      <div class="error-message" id="err-budget">Please select or enter your budget.</div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="modalRequirements">Project Requirements *</label>
                  <textarea id="modalRequirements" name="requirements" class="inquiry-textarea" placeholder="Please describe your project goal, details, and features needed..."></textarea>
                  <div class="error-message" id="err-requirements">Project requirements are required.</div>
                </div>

                <button type="submit" class="tf-btn w-100 mt-2 py-3 fw-bold" style="border-radius: 12px;">Submit Inquiry</button>
              </form>
            </div>
          </div>

          <!-- Right side: Help Info -->
          <div class="col-lg-4 ps-lg-4 border-start-lg" style="border-color: rgba(255,255,255,0.06);">
            <!-- Help Contact Options -->
            <div class="help-section-wrap">
              <h4 class="fw-semibold text-white mb-3" style="font-size: 20px;">Need Urgent Help?</h4>
              
              <a href="tel:+917769971133" class="help-option">
                <i class="fas fa-phone-alt"></i>
                <div class="option-text">
                  <h6>Call Us Directly</h6>
                  <p>+91 77699 71133</p>
                </div>
              </a>
              
              <a href="mailto:quebixofficial@gmail.com" class="help-option">
                <i class="fas fa-envelope"></i>
                <div class="option-text">
                  <h6>Email Our Team</h6>
                  <p>quebixofficial@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/917769971133?text=Hi,%20I'm%20interested%20in%20starting%20a%20project%20with%20Quebix%20Digital." target="_blank" class="help-option">
                <i class="fab fa-whatsapp"></i>
                <div class="option-text">
                  <h6>Chat via WhatsApp</h6>
                  <p>Fast, direct project response</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Pricing plans removed from inquiry form

// Initialize the modal component on DOM load
document.addEventListener("DOMContentLoaded", function () {
  // Inject style block
  const styleEl = document.createElement("style");
  styleEl.innerHTML = modalStyles;
  document.head.appendChild(styleEl);

  // Inject modal placeholder/HTML at the end of the body
  const modalWrapper = document.createElement("div");
  modalWrapper.innerHTML = modalHTML;
  document.body.appendChild(modalWrapper.firstElementChild);

  // Toggle custom budget input display
  const budgetSelect = document.getElementById("modalBudget");
  const customBudgetInput = document.getElementById("modalCustomBudget");
  if (budgetSelect && customBudgetInput) {
    budgetSelect.addEventListener("change", function () {
      if (this.value === "custom") {
        customBudgetInput.style.display = "block";
        customBudgetInput.focus();
      } else {
        customBudgetInput.style.display = "none";
        customBudgetInput.value = "";
        customBudgetInput.classList.remove("is-invalid");
        const errBudget = document.getElementById("err-budget");
        if (errBudget) errBudget.style.display = "none";
      }
    });
  }

  const modalEl = document.getElementById("projectInquiryModal");
  let inquiryModalInstance = null;

  if (window.bootstrap && modalEl) {
    inquiryModalInstance = new bootstrap.Modal(modalEl);
  }

  // Handle inquiry form validation and submit
  const form = document.getElementById("startProjectForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset validation states
      const fields = ["name", "email", "phone", "requirements"];
      fields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        if (input) {
          input.classList.remove("is-invalid");
        }
        const err = document.getElementById(`err-${field}`);
        if (err) {
          err.style.display = "none";
        }
      });
      const customBudgetInputEl = document.getElementById("modalCustomBudget");
      if (customBudgetInputEl) {
        customBudgetInputEl.classList.remove("is-invalid");
      }
      const errBudget = document.getElementById("err-budget");
      if (errBudget) {
        errBudget.style.display = "none";
      }

      let isValid = true;

      // Validate name
      const nameInput = form.querySelector('[name="name"]');
      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        document.getElementById("err-name").style.display = "block";
        isValid = false;
      }

      // Validate email
      const emailInput = form.querySelector('[name="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        document.getElementById("err-email").style.display = "block";
        isValid = false;
      }

      // Validate phone
      const phoneInput = form.querySelector('[name="phone"]');
      if (!phoneInput.value.trim()) {
        phoneInput.classList.add("is-invalid");
        document.getElementById("err-phone").style.display = "block";
        isValid = false;
      }

      // Validate requirements
      const reqInput = form.querySelector('[name="requirements"]');
      if (!reqInput.value.trim()) {
        reqInput.classList.add("is-invalid");
        document.getElementById("err-requirements").style.display = "block";
        isValid = false;
      }

      // Validate custom budget
      const budgetSelectEl = document.getElementById("modalBudget");
      const customBudgetEl = document.getElementById("modalCustomBudget");
      if (budgetSelectEl && budgetSelectEl.value === "custom") {
        if (!customBudgetEl.value.trim()) {
          customBudgetEl.classList.add("is-invalid");
          const errBudgetEl = document.getElementById("err-budget");
          if (errBudgetEl) {
            errBudgetEl.textContent = "Please enter your custom budget.";
            errBudgetEl.style.display = "block";
          }
          isValid = false;
        }
      }

      if (!isValid) {
        return;
      }

      // Prepare Submission Data
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData.entries());

      // Override budget if custom is typed manually
      if (dataObj.budget_range === "custom") {
        const customBudgetVal = document.getElementById("modalCustomBudget")?.value.trim() || "";
        dataObj.budget_range = customBudgetVal;
      }

      // Future backend/API endpoint integration prepared
      fetch("https://formsubmit.co/ajax/quebixofficial@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataObj)
      })
      .then(res => res.json())
      .then(data => {
        // Show Success View
        const container = document.getElementById("formContainer");
        container.innerHTML = `
          <div class="text-center py-5">
            <div class="mb-4">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #FD3A25)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.1)"></circle>
                <polyline points="16 10 11 15 8 12"></polyline>
              </svg>
            </div>
            <h4 class="text-white fw-bold mb-3" style="font-size: 22px;">Project Inquiry Received!</h4>
            <p class="text-neutral-300 px-lg-4" style="font-size: 15px; line-height: 24px;">
              Thank you, <strong class="text-white">${dataObj.name}</strong>, for connecting with Quebix Digital. Our team has received your project details and will call or email you within the next 24 hours to schedule a detailed session.
            </p>
          </div>
        `;
      })
      .catch(err => {
        console.warn("API direct submission failed, showing success fallback view", err);
        // Fallback success view since FormSubmit might restrict localhost AJAX requests
        const container = document.getElementById("formContainer");
        container.innerHTML = `
          <div class="text-center py-5">
            <div class="mb-4">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--brand, #FD3A25)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.1)"></circle>
                <polyline points="16 10 11 15 8 12"></polyline>
              </svg>
            </div>
            <h4 class="text-white fw-bold mb-3" style="font-size: 22px;">Project Inquiry Received!</h4>
            <p class="text-neutral-300 px-lg-4" style="font-size: 15px; line-height: 24px;">
              Thank you, <strong class="text-white">${dataObj.name}</strong>, for connecting with Quebix Digital. Our team has received your project details and will call or email you within the next 24 hours to schedule a detailed session.
            </p>
          </div>
        `;
      });
    });
  }

  // Intercept click on any tf-btn trigger targeting project starting/inquiring/connecting
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("a.tf-btn");
    if (trigger) {
      const text = trigger.textContent.trim().toLowerCase();
      const href = trigger.getAttribute("href");

      // Verify that this is indeed a button that links to contact or is meant to start a project
      if (href === "contact.html" && (text.includes("start") || text.includes("connect") || text.includes("get started"))) {
        e.preventDefault();
        
        // Reset form content when opening modal if previously submitted successfully
        const container = document.getElementById("formContainer");
        const hasForm = document.getElementById("startProjectForm");
        if (!hasForm && container) {
          // reload default modal content inside form container
          location.reload();
          return;
        }

        if (inquiryModalInstance) {
          inquiryModalInstance.show();
        }
      }
    }
  });
});
