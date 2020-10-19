<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chitarrarte</title>
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/typography.css" />

    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script src="js/bootstrap.js"></script>
    <script
      src="https://kit.fontawesome.com/43437046ca.js"
      crossorigin="anonymous"
    ></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  </head>

  <body>
    <nav
      id="nav"
      class="sticky-top navbar-light shadow navbar navbar-expand-lg d-flex justify-content-center py-0"
    >
      <div class="col-11 p-0 d-flex justify-content-between align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <h3 class="logo">Chitarr</h3>
        <h3 class="logo red">Arte</h3>
        <h3 class="logo">.it</h3>
        <ul
          class="list-group collapse navbar-collapse flex-row justify-content-end"
        >
          <li class="px-0 list-group-item dropdown position-static">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ARRANGEMENTS
            </a>
            <div
              class="dropdown-menu mega-menu"
              aria-labelledby="navbarDropdown"
            >
              <a
                class="dropdown-item"
                id="free_arrangements-link"
                href="free_arrangements.html"
                >Free Guitar Arrangements</a
              >
              <a
                class="dropdown-item"
                id="other_arrangements-link"
                href="other-arrangements.html"
                >Other Arrangements Available</a
              >
              <a
                class="dropdown-item"
                id="free_scores-link"
                href="free_scores.html"
                >Free Guitar Scores</a
              >
              <a
                class="dropdown-item"
                href="http://www.chitarrarte.it/PARTITURE%20pdf/quattro_studi_facili.pdf"
                >"Quattro Studi Facili - 4 Easy Studies" (Free)</a
              >
            </div>
          </li>
          <li class="px-0 list-group-item dropdown position-static">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              BIOGRAPHY
            </a>
            <div
              class="dropdown-menu mega-menu"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="bio.html">Biography</a>
              <a class="dropdown-item" href="reviews.html">Reviews</a>
            </div>
          </li>

          <li class="px-0 list-group-item dropdown position-static">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              WORK
            </a>
            <div
              class="dropdown-menu mega-menu"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="my_cd.html">Free CD</a>
              <a
                class="dropdown-item"
                href="https://dobermaneditions.com/nos-artistes/torrisi-giuseppe?lg=en_US"
                target="_blank"
                >My Compositions</a
              >
              <a
                class="dropdown-item"
                href="http://www.chitarrarte.it/PARTITURE%20pdf/quattro_studi_facili.pdf"
                target="_blank"
                >"Quattro Studi Facili - 4 Easy Studies" (Free)</a
              >
            </div>
          </li>
          <li class="px-0 list-group-item dropdown position-static">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              CONTACT
            </a>
            <div
              class="dropdown-menu mega-menu"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" id="mandolin-link" href="mandolin.html"
                >Mandolin Corner</a
              >
              <a class="dropdown-item" id="beginner-link" href="#"
                >Beginner' s Corner</a
              >
              <a class="dropdown-item" id="musical-link" href="#"
                >Musical Links</a
              >
              <a class="dropdown-item" href="#">MP3/Videos</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <div class="container bg-warning" id="arr_cont"></div>
    <script>var files = <?php $out = array();
foreach (glob('pdf/*.pdf') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out);
?>;
let cont = document.getElementById("arr_cont")
files.map((file) =>{
  let link = document.createElement("A")
  link.innerText = file
  cont.appendChild(link)
} )
</script>
    </section>
    <script src="js/navbar.js"></script>
    <script src="dir.php"></script>

    <script src="js/parse_arrangements.js"></script>
  </body>
</html>
