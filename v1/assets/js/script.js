const home = {
	btn:document.getElementById("home-btn"),
	section:document.getElementById("home")
};
const project = {
	btn:document.getElementById("project-btn"),
	section: document.getElementById("project")
};
const about = {
	btn:document.getElementById("about-btn"),
	section:document.getElementById("about")
};
const contact = {
	btn:document.getElementById("contact-btn"),
	section:document.getElementById("contact")
};

let page = home;

home.btn.addEventListener("click", () => changePage(home));
project.btn.addEventListener("click", () => changePage(project));
about.btn.addEventListener("click", () => changePage(about));
contact.btn.addEventListener("click", () => changePage(contact));

function changePage(btn)
{
	btn.btn.disabled = true;
	btn.btn.classList.add(`page`);
	btn.section.style.display = `block`;

	page.btn.disabled = false;
	page.btn.classList.remove(`page`);
	page.section.style.display = `none`;

	page = btn;
}

// -------- STARS --------

const cv = document.querySelector("nav button.cv");


let star1 = document.createElement("div");
star1.classList.add("star");
star1.style.setProperty("--size", 1);
star1.style.setProperty("--x", -10 / 1 + "px");
star1.style.setProperty("--y", 5 / 1 + "px");
cv.append(star1);

let star2 = document.createElement("div");
star2.classList.add("star");
star2.style.setProperty("--size", 1);
star2.style.setProperty("--x", 7 / 1 + "px");
star2.style.setProperty("--y", -3 / 1 + "px");
cv.append(star2);

let star3 = document.createElement("div");
star3.classList.add("star");
star3.style.setProperty("--size", 2);
star3.style.setProperty("--x", 30 / 2 + "px");
star3.style.setProperty("--y", 2 / 2 + "px");
cv.append(star3);

let star4 = document.createElement("div");
star4.classList.add("star");
star4.style.setProperty("--size", 3);
star4.style.setProperty("--x", -17 / 3 + "px");
star4.style.setProperty("--y", -8 / 3 + "px");
cv.append(star4);

let star5 = document.createElement("div");
star5.classList.add("star");
star5.style.setProperty("--size", 4);
star5.style.setProperty("--x", 45 / 4 + "px");
star5.style.setProperty("--y", -5 / 4 + "px");
cv.append(star5);

let star6 = document.createElement("div");
star6.classList.add("star");
star6.style.setProperty("--size", 4);
star6.style.setProperty("--x", -40 / 4 + "px");
star6.style.setProperty("--y", 2 / 4 + "px");
cv.append(star6);


cv.addEventListener("click", () => mouveStars());

function mouveStars()
{
	cv.classList.add("move");
	cv.disabled = true;
	star1.classList.add("move");
	star2.classList.add("move");
	star3.classList.add("move");
	star4.classList.add("move");
	star5.classList.add("move");
	star6.classList.add("move");
	setTimeout(() => {
		cv.disabled = false;
		cv.classList.remove("move");
		star1.classList.remove("move");
		star2.classList.remove("move");
		star3.classList.remove("move");
		star4.classList.remove("move");
		star5.classList.remove("move");
		star6.classList.remove("move");
	}, 1200);
};
