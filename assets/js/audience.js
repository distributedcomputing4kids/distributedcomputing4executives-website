/**
 * On the distributedcomputing4executives.com domain, lead with Executives.
 */
(function () {
  if (!/executives/i.test(window.location.hostname)) return;

  var line = document.getElementById("audience-line");
  if (line) line.innerHTML = "4 Executives &amp; Kids";
  var friendsLine = document.getElementById("friends-line");
    if (friendsLine) friendsLine.innerHTML = "employees (or friends)";

  var logo = document.querySelector(".logo-text");
  if (logo) logo.innerHTML = 'DC<span class="logo-accent">4</span>Execs<span class="logo-amp"> &amp; </span>Kids';
})();
