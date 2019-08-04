$(document).ready(function() {



	var crystalPick = Math.floor(Math.random() * 60) + 2; 
		
		$(".randomNumber").html(crystalPick); 

	

	var crystalOne = Math.floor(Math.random() * 12) + 1; 
		
		$("#img1").html("<img src=" + "assets/images/crystal1.png" + " value=" + crystalOne + ">"); 

	var crystalTwo = Math.floor(Math.random() * 12) + 1; 
		
		$("#img2").html("<img src=" + "assets/images/crystal5.png" + " value=" + crystalTwo + ">"); 

	var crytalThree = Math.floor(Math.random() * 12) + 1; 
		 
		$("#img3").html("<img src=" + "assets/images/Crystal_cosmic.png" + " value=" + crytalThree + ">");
	
	var crystalFour = Math.floor(Math.random() * 12) + 1; 
		 
		$("#img4").html("<img src=" + "assets/images/Crystal_quest.png" + " value=" + crystalFour + ">");
		
		var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score);

	function reset () {
		crystalPick = Math.floor(Math.random() * 102) + 19; 
			
		$(".randomNumber").html(crystalPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		crystalOne = Math.floor(Math.random() * 12) + 1;  
			
		$("#img1").html("<img src=" + "assets/images/crystal1.png" + " value=" + crystalOne + ">"); 

		crystalTwo = Math.floor(Math.random() * 12) + 1; 
			
		$("#img2").html("<img src=" + "assets/images/crystal5.png" + " value=" + crystalTwo + ">"); 

		crystalThree = Math.floor(Math.random() * 12) + 1; 
			 
		$("#img3").html("<img src=" + "assets/images/Crystal_cosmic.png" + " value=" + crytalThree + ">");
	
		crystalFour = Math.floor(Math.random() * 12) + 1; 
			
		$("#img4").html("<img src=" + "assets/images/Crystal_quest.png" + " value=" + crystalFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				 
			$(".scoreDisplay").html(newScore); 

			if(newScore === crystalPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					
					reset(); 
			
			} 

			else if(newScore > crystalPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === crystalPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > crystalPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 





