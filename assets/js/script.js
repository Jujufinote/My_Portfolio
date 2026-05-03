/* ----------------------------------------------------------- */
/* -------------------------- ROOT --------------------------- */
/* ----------------------------------------------------------- */
const root = document.documentElement;
const styles = getComputedStyle(root);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/* ----------------------------------------------------------- */
/* ------------------------- HEADER -------------------------- */
/* ----------------------------------------------------------- */

/* -------------------------------------------------- Navbar */
/* ---------------------------------------------- Scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation__links a");

const observer = new IntersectionObserver(entries =>
{
	entries.forEach(entry =>
	{
		if (entry.isIntersecting)
		{
			navLinks.forEach(link =>
				link.classList.remove("active")
			);

			const activeLink = document.querySelector(`.navigation__links a[href="#${entry.target.id}"]`);
			if (entry.target.id !== "title")
				changePage(activeLink);
		}
	});
},
{
	threshold: 0.4
});

sections.forEach(section =>
{
	observer.observe(section);
});

let page = document.querySelector(".page");
function changePage(btn)
{
	if (btn === null)
		return;
	
	btn.classList.add(`page`);
	if (btn !== page)
		page.classList.remove(`page`);

	page = btn;
	
	return;
}
/* ------------------------------------------ Scroll end */

/* ----------------------------------------------- Stars */
const cv_button = document.querySelector("a.cv button");


const star1 = document.createElement("div");
star1.classList.add("star");
star1.style.setProperty("--size", 2);
star1.style.setProperty("--x", -10 / 1 + "px");
star1.style.setProperty("--y", 5 / 1 + "px");
cv_button.append(star1);

const star2 = document.createElement("div");
star2.classList.add("star");
star2.style.setProperty("--size", 2);
star2.style.setProperty("--x", 7 / 1 + "px");
star2.style.setProperty("--y", -3 / 1 + "px");
cv_button.append(star2);

const star3 = document.createElement("div");
star3.classList.add("star");
star3.style.setProperty("--size", 3);
star3.style.setProperty("--x", 30 / 2 + "px");
star3.style.setProperty("--y", 2 / 2 + "px");
cv_button.append(star3);

const star4 = document.createElement("div");
star4.classList.add("star");
star4.style.setProperty("--size", 4);
star4.style.setProperty("--x", -17 / 3 + "px");
star4.style.setProperty("--y", -8 / 3 + "px");
cv_button.append(star4);

const star5 = document.createElement("div");
star5.classList.add("star");
star5.style.setProperty("--size", 5);
star5.style.setProperty("--x", 45 / 4 + "px");
star5.style.setProperty("--y", -5 / 4 + "px");
cv_button.append(star5);

const star6 = document.createElement("div");
star6.classList.add("star");
star6.style.setProperty("--size", 5);
star6.style.setProperty("--x", -40 / 4 + "px");
star6.style.setProperty("--y", 2 / 4 + "px");
cv_button.append(star6);


cv_button.addEventListener("click", () => mouveStars());

const cv = document.querySelector("a.cv");
function mouveStars()
{
	cv_button.classList.add("move");
	cv_button.disabled = true;

	cv.tabindex = "-1"; // disable tab focus
	cv.style.pointerEvents = "none"; // enable click

	star1.classList.add("move");
	star2.classList.add("move");
	star3.classList.add("move");
	star4.classList.add("move");
	star5.classList.add("move");
	star6.classList.add("move");
	setTimeout(() => {
		cv_button.disabled = false;
		cv_button.classList.remove("move");

		cv.tabindex = "0"; // enable tab focus
		cv.style.pointerEvents = "auto"; // enable click

		star1.classList.remove("move");
		star2.classList.remove("move");
		star3.classList.remove("move");
		star4.classList.remove("move");
		star5.classList.remove("move");
		star6.classList.remove("move");
	}, 1200);

	return ;
};
/* ------------------------------------------- Stars end */

/* ------------------------------------------------ Mode */
const mode_img = document.querySelector("#mode > img");
const mode_btn = document.querySelector("#mode > button");

let dark = true;

mode_btn.addEventListener("click", () => changeMode());

function changeMode()
{
	if (dark === true)
	{
		mode_img.src = "assets/img/soleil.svg";
		mode_btn.classList.add("light");
		mode_btn.classList.remove("dark");

		root.style.setProperty("--bg-img", "url(../img/bg_w.jpg)");
		root.style.setProperty("--bg-color", styles.getPropertyValue("--white"));
		root.style.setProperty("--txt-color", styles.getPropertyValue("--black"));
		dark = false;
	}
	else
	{
		mode_img.src = "assets/img/paillettes.svg";
		mode_btn.classList.add("dark");
		mode_btn.classList.remove("light");

		root.style.setProperty("--bg-img", "url(../img/bg_b.jpg)");
		root.style.setProperty("--bg-color", styles.getPropertyValue("--black"));
		root.style.setProperty("--txt-color", styles.getPropertyValue("--white"));
		dark = true;
	}

	// shadows
	const temp = styles.getPropertyValue("--shadow-white");
	root.style.setProperty("--shadow-white", styles.getPropertyValue("--shadow-black"));
	root.style.setProperty("--shadow-black", temp);
	
	return ;
}
/* -------------------------------------------- Mode end */

/* ---------------------------------------------- Burger */
const burger = document.getElementById("burger");
const nav_background = document.querySelector(".navigation__background");
const nav_elements = document.querySelectorAll(".navigation__visible_element");
const reverse_nav_elements = [...nav_elements].reverse();

burger.addEventListener("click", () => expandNav());

let is_open = false;
async function expandNav()
{
	if (is_open === false)
	{
		nav_background.classList.remove("close");
		void nav_background.offsetWidth; // force reset animation
		nav_background.classList.add("open");

		burger.disabled = true;
		burger.style.cursor = "not-allowed";
		setTimeout(() => {
			burger.style.cursor = "pointer";
			burger.disabled = false;
		}, 600);

		await sleep(600 * 0.2);
		for (const element of reverse_nav_elements)
		{
			element.classList.add("open");
			await sleep((600 - 600 * 0.2) / nav_elements.length);
   		}

		is_open = true;
	}
	else
	{
		burger.disabled = true;
		burger.style.cursor = "not-allowed";
		
		for (const element of nav_elements)
		{
			element.classList.remove("open");
			await sleep((600 - 600 * 0.2) / nav_elements.length);
		}

		nav_background.classList.remove("open");
		void nav_background.offsetWidth; // force reset animation
		nav_background.classList.add("close");

		setTimeout(() => {
			burger.style.cursor = "pointer";
			burger.disabled = false;
		}, 600);

		is_open = false;
	}
	return ;
}
/* ------------------------------------------ Burger end */
/* ---------------------------------------------- Navbar end */


/* ----------------------------------------------------------- */
/* ------------------------- PROJECTS ------------------------ */
/* ----------------------------------------------------------- */

let cards = [];
let divs = [];

for (let i = 1; i < 5; i++) {
    cards.push(document.getElementById(i));
    divs.push(document.getElementById(i * 10 + 1));
    cards[i - 1].addEventListener("click", () => changeDisplay(divs[i - 1]));
}

const close_btn = document.getElementById("close");
let dspl = null;

function changeDisplay(div)
{
    div.style.display = "block";
    if (dspl)
	{
		dspl.style.display = "none";
	}

    dspl = div;
	close_btn.style.display = "block";
}

close_btn.addEventListener("click", () =>
{
	for (let div of divs)
	{
		div.style.display = "none";
	}

	dspl = null;
	close_btn.style.display = "none";
});
