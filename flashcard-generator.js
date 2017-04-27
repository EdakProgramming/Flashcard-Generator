// Create a BasicCard constructor. It should accept front and back arguments.

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}//End of BasicCard

// Create a ClozeCard constructor. It should accept text and cloze arguments.
function ClozeCard(text, cloze, partial) {
// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
	this.text = text;
// ClozeCard should have a property or method that contains or returns only the partial text.
	this.cloze = cloze;
// ClozeCard should have a property or method that contains or returns only the full text.
	this.partial = partial;
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
	this.noCloze = function(error){console.log("This is an error. You suck!!!")};
}// End of ClozeCard


// This variable creates a flash card with information for the front and the back
var whichLanguage = new BasicCard("Which language will I learn after this course?", "Python");
// The logs below are for testing purposes only
// console.log(whichLanguage.front);
// console.log(whichLanguage.back);

var whichLanguageCloze = new ClozeCard("I will learn Python after this course.", "Python", "I will learn _______ after this course.");

console.log("This is the text: " + whichLanguageCloze.text);
console.log("This is the cloze: " + whichLanguageCloze.cloze);
console.log("This is the partial: " + whichLanguageCloze.partial);
whichLanguageCloze.noCloze();



// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 
