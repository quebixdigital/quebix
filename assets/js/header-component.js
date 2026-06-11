const headerTemplate = `
        <!-- Header -->
        <header class="tf-header header2">
            <div class="header-inner">
                <a href="index.html" class="logo-site">
            <img src="assets/quebix-logo.png" alt="">
                </a>
                <div class="box-navigation">
                    <ul class="nav-menu-main">
                        <li class="menu-item has-child">
                            <a href="index.html" class="item-link link1">Home</a>
                        </li>
                        <li class="menu-item">
                            <a href="about.html" class="item-link link1">About</a>
                        </li>
                        <li class="menu-item has-child">
                            <a href="service.html" class="item-link link1">Services</a>
                        </li>
                        <li class="menu-item has-child">
                            <a href="work.html" class="item-link link1">Works</a>
                        </li>
                        <li class="menu-item">
                            <a href="contact.html" class="item-link link1">Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="contact.html" class="tf-btn d-lg-flex d-none">
                    Start a Project
                </a>
                <a href="#" class="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
                    <i class="icon icon-grip-lines-solid"></i>
                </a>
            </div>
        </header>
        <!-- /Header -->

        <!-- Mobile Menu -->
        <div class="offcanvas-menu">
            <div class="offcanvas-content">
                <div class="container h-100">
                    <div class="offcanvas-content_wrapin">
                        <div class="canvas_head">
                            <a href="index.html" class="logo-site">
                                <img src="assets/quebix-logo.png" alt="">
                            </a>
                            <div class="btn-mobile-menu close-mb-menu text-caption link">
                                <i class="icon icon-close"></i> CLOSE
                            </div>
                        </div>
                        <div class="canvas_center">
                            <ul class="nav-ul-mb" id="mobile-menu">
                                <li>
                                    <div class="item">
                                        <a href="index.html" class="mb-menu-link text-display-1">
                                            <span class="text">Home</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <a href="about.html" class="mb-menu-link text-display-1">
                                            <span class="text">About</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <a href="work.html" class="mb-menu-link text-display-1">
                                            <span class="text">Works</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <a href="service.html" class="mb-menu-link text-display-1">
                                            <span class="text">Services</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <a href="contact.html" class="mb-menu-link text-display-1">
                                            <span class="text">Contact</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="canvas_foot">
                            <div class="left">
                                <a href="mailto:quebixofficial@gmail.com" class="text-caption text-neutral-200">quebixofficial@gmail.com</a>
                                <p class="text-caption text-neutral-200">
                                    CUP <span class="clock"></span>
                                </p>
                            </div>
                            <div class="right">
                                <a href="https://www.instagram.com/" target="_blank" class="tf-link-icon text-caption text-neutral-200">
                                    <i class="icon icon-arrow-top-right"></i>
                                    INSTAGRAM
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" class="tf-link-icon text-caption text-neutral-200">
                                    <i class="icon icon-arrow-top-right"></i>
                                    LINKEDIN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Mobile Menu -->
`;

document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;

    // Auto-highlight active nav items
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(
      ".item-link, .sub-nav-link, .mb-menu-link",
    );

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("active");

        // For desktop sub-menus: set parent link to active if child is active
        let parentMenu = link.closest(".has-child");
        if (parentMenu) {
          const parentLink = parentMenu.querySelector(".item-link");
          if (parentLink) parentLink.classList.add("active");
        }
      }
    });

    // Re-bind Mobile Menu Toggles
    if (window.jQuery) {
      const $ = window.jQuery;

      // Sticky Header
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
          $("header").addClass("header-sticky");
        } else {
          $("header").removeClass("header-sticky");
        }
      });

      $(document).on("click", ".open-mb-menu", function (e) {
        e.preventDefault();
        $(".offcanvas-menu").addClass("show");
        $("body").addClass("overflow-hidden");
      });

      $(document).on("click", ".close-mb-menu", function (e) {
        e.preventDefault();
        $(".offcanvas-menu").removeClass("show");
        $("body").removeClass("overflow-hidden");
      });
    }
  }
});
