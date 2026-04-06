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
