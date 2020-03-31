//images to hide under cards
// a duplicate from someones repo. using for inspiration for my game
// three or four card montana
var pics = [
	'/img/ace-hearts.png',
	'/img/king-clubs.png',
	'/img/king-spades.png',
	'/img/back.jpg'
];

var indices = [0, 1, 2];

var images = document.getElementsByTagName('img');

var counter = document.getElementById('counter');

let count = 0;

var btn = document.querySelector('.btn');
var btn2 = document.querySelector('.btn2');


var overlay = document.querySelector('.reveal')

//shuffle the array numbers randomly
function shuffleIds(arr) {
    for (var i = arr.length - 1; i > 0; i--) {    // pre (- -) (i > 0)
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//user clicks on a card to turn it over.
function turnCards() {
	shuffleIds(indices);
	var i = 0
	var src = '';
	for (i = 0; i < indices.length; i++) {
		this.setAttribute('src' , pics[indices[i]]);
		images[i].removeEventListener('click' , turnCards);
	}
	src = this.getAttribute('src');
	if (src === '/img/ace-hearts.png' || '/img/king-clubs.png') {
		count ++
		showCards();
	}
	indices.pop(i);
	updateCounter();

}

function updateCounter() {
	    if (count === 1) {
			counter.innerHTML = count + ' time';
		} else {
			counter.innerHTML = count + ' times';
		}
}

function showCards() {
	overlay.style = "display: block";
	timeShow = window.setTimeout(function() {
	 overlay.style = "display: none";
	 }, 1000);

}

//user clicks "Try Again" button to reset the card images and unshuffle the indices array.
function tryAgain() {
	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute('src' , pics[3]);
		images[i].addEventListener('click' , turnCards);
	}
	indices = [0, 1, 2];
}

//bind functions to cards and Try Again button
for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click' , turnCards);
}

//bind function to "Try Again" button
btn.addEventListener('click', play);
btn2.addEventListener ('click', function() {
  alert('House wins! Pay UP!');
});
