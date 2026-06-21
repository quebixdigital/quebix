const footerTemplate = `
        <!-- footer -->
        <footer>
            <div class="container">
                <div class="footer-content">
                    <a href="index.html" class="footer-logo">
                        <img src="assets/quebix-logo.png" alt="">
                    </a>
                    <div class="title h6 fw-semibold">Get connected <br> with Quebix Digital on social</div>
                    <div class="text">Don’t miss our new updates!</div>
                    <div class="tf-social-1 justify-content-center">
                        <a href="https://www.instagram.com/quebixdigital.in/" target="_blank" class="text-body-1 fw-semibold">
                            Instagram
                            <div class="social-item">
                                <i class="icon icon-instagram"></i>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/quebixdigital" target="_blank" class="text-body-1 fw-semibold">
                            Linkedin
                            <div class="social-item">
                                <i class="icon icon-linkedin-in"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <ul class="footer-links d-flex gap-24 align-items-center">
                        <li>
                            <a href="index.html" class="fw-semibold link-underline link1">Home</a>
                        </li>
                        <li>
                            <a href="about.html" class="fw-semibold link-underline link1">About</a>
                        </li>
                        <li>
                            <a href="service.html" class="fw-semibold link-underline link1">Services</a>
                        </li>
                        <li>
                            <a href="work.html" class="fw-semibold link-underline link1">Works</a>
                        </li>
                        <li>
                            <a href="contact.html" class="fw-semibold link-underline link1">Contact</a>
                        </li>
                    </ul>
                    <p class="text-secondary coppy-rights text-center">© 2026 Quebix Digital. All Rights Reserved.</p>
                    <a href="#" class="action-go-top d-flex gap-8 align-items-center justify-content-end link1">
                        <span class="fw-semibold">Back to top</span>
                        <i class="icon icon-long-arrow-alt-up-solid fs-20"></i>
                    </a>
                </div>
            </div>
        </footer>
`;

document.addEventListener("DOMContentLoaded", function () {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }
});
