$(document).ready(function () {
$(".start").click(Quiz);
$(".reset").click(function() {
	location.reload(true);
});

function Quiz() {
var scoreArr = [];
var curScore = 0;
var showMain = 0;
var questions = [{ 

  prompt: "Which hero emotes I'm ready when swinging with\
  their weapon?",
  answer : ['Magni Bronzebeard',
             'Jaina Proudmoore',
             "Gul'dan",
             "Anduin Wrynn",
             "Tyrande Whisperwind"],
   solution: "Jaina Proudmoore" },
   {
   prompt: "Which player won the first Hearthstone championship at Blizzcon?",
  answer : ['Firebat',
             'Chakki',
             "Kripparrian",
             "Reynad",
             "Forsen"],
   solution: "Firebat" },
   {
   prompt: "Cairne Bloodhoof says 'For Honor'\
   much like when this minion enters the field",
  answer : ['Deathlord',
             'Mana Wyrm',
             "Stormwind Knight",
             "Warsong Commander",
             "Blood Knight"],
   solution: "Stormwind Knight" },
   {
   prompt: "What is the minimum amount of rare of greater\
   cards that you are allowed to pick in arena?",
  answer : ['0',
             '1',
             "2",
             "3",
             "4"],
   solution: "3" },
   {
   prompt: "What logic determines the order that deathrattles\
   will trigger? ",
  answer : ['Randomness',
             'Smaller health total triggers first(RNG is a tiebreaker)',
             "Larger health total triggers first(RNG is a tiebreaker)",
             "Last minion to first",
             "First come first serve"],
   solution: "First come first serve" },
   {
   prompt: "This player is known for exclusively playing Priest",
  answer : ['Chakki',
             'Hafu',
             "Eloise",
             "Zetalot",
             "Gaara"],
   solution: "Zetalot" },
   {
   prompt: "Unlike the Cabal shadow priest, instead of saying 'No!', this minion says 'Yes!' when he dies",
  answer : ['Acolyte of Pain',
             'Yogg-Saron',
             "Water Elemental",
             "Bluegill Warrior ",
             "Coldlight Oracle"],
   solution: "Acolyte of Pain" },
   {
   prompt: "Best known as the 'Prince of Miracoli'\
   , this player popularized a deck archetype known as\
   miracle rogue ",
  answer : ['Firebat',
             'Chakki',
             "Kripparrian",
             "Reynad",
             "Forsen"],
   solution: "Forsen" },
   {
   prompt: "Hearthstone is a game of tug of war,\
    and this dragon gives rope burn",
  answer : ['Azure Drake',
             'Nefarian',
             "Nozdormu",
             "Ysera",
             "Deathwing"],
   solution: "Nozdormu" },
   {
   prompt: "This is the total gold you earn\
   from quests 'Total Dominance' and 'Destroy Them all!'",
  answer : ['150',
             '140',
             "160",
             "200",
             "190"],
   solution: "140"
   			}];
var counter = questions.length;
   	function createQuestion(questions) {
            for (var i = 0; i < questions.length; i++) {
            	$(".start").hide();
 				getScore();
                $("#container").append('<form id="' + i + '" class="center-text"><p>Question '
                 + (i + 1) + ' of ' + questions.length + 
                 '</p><h3 class="question">' + questions[i].prompt + 
                 '</h3>' + generateAnswers(questions[i].answer, i) + 
                 '<button type="submit" class="next">NEXT &#8594;</button></p></form>');
            }
            //This hides all except the first question:
            for (var k = questions.length - 1; k > 0; k--) {
                $('#' + k).hide();
            }
        }
function getScore() {
	return curScore;
}

   	function generateAnswers (ary, qNum) {
            var answers = [];
            for (i = 0; i < ary.length; i++) {
                answers.push('<label><input type="radio" name="' + qNum + 
                	'" value="' + ary[i] + '">' + ary[i] + '</label>');
            }
            return answers.join(" ");
        }


function checkAnswer (input, qNum, questions) {
	if (input == questions[qNum].solution) {
		curScore++;
	}
}

createQuestion(questions);

$(".next").click(function(event) {
event.preventDefault();
var qNum = $(this).closest("form").attr("id");
var playerInput = $('input[name=' + qNum + ']:radio:checked').val();
if (counter > 1 && $('input[name=' + qNum + ']:checked').length > 0) {
checkAnswer(playerInput,qNum,questions);
if (playerInput == questions[qNum].solution) {

$('#feedback').html('<p>' + "Legendary! You got it correct."
	+ '<p>');
 }
 if (playerInput != questions[qNum].solution) {
$('#feedback').html('<p>' + "That wasn't right... It was "  
	+ questions[qNum].solution + '</p>');
 }

$('#results').html("You've answered " + curScore + " of " +
			questions.length + " questions correctly.");
$("#" + qNum).hide();
 $("#" + qNum).next().show();
 counter--;
 
}
else if (counter ==1) {
checkAnswer(playerInput, qNum, questions);
  $("#container").find("form").remove();
  $('#feedback').empty();
  $('#results').empty();
  $('#results').html("The innkeeper thanks you for taking the quiz. You answered " + curScore + " questions correctly." +
  	"Press Restart if you'd like to take another shot at becoming legendary.");
}
else {
	return false;
}
});
}

});


