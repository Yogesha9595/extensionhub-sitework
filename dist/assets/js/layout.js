document.addEventListener("DOMContentLoaded", function () {

  // HEADER
  document.querySelectorAll("#site-header").forEach(el => {
    el.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold" href="/index.html">ExtensionHub</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="/index.html">Explore</a></li>
              <li class="nav-item"><a class="nav-link" href="/categories/productivity.html">Productivity</a></li>
              <li class="nav-item"><a class="nav-link" href="/categories/privacy.html">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="/categories/developer-tools.html">Developer Tools</a></li>
              <li class="nav-item"><a class="nav-link" href="/submit.html">Submit</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div style="height:70px"></div>
    `;
  });

  // FOOTER
  document.querySelectorAll("#site-footer").forEach(el => {
    el.innerHTML = `
      <footer class="footer mt-5 pt-5 pb-4 bg-white border-top">
        <div class="container text-center">
          <h5 class="fw-bold mb-3">ExtensionHub</h5>
          <p class="text-muted small">
            Discover, compare and choose the best Chrome extensions for productivity, privacy and developers.
          </p>
          <div class="mt-3 small">
            © 2026 ExtensionHub ·
            <a href="#">Privacy</a> ·
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    `;
  });

});
