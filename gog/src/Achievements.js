Candy.Achievements = function(game) {
	// buttonContinue = null;
	// state = null;
};
Candy.Achievements.prototype = {
	create: function() {
		// this.showStory();
		this.add.sprite(0, 0, 'screen-achievements');
		backButton = this.add.button((640-358)/2, 960-133-10, 'button-back', function(){this.game.state.start('MainMenu')}, this, 1, 0, 2);

		var totalscore = storageAPI.get('totalscore');
		this.game.add.text(200, 20, "LOGROS", { font: "60px ComicBook", fill: "#FFCC00" });
		this.game.add.text(22, 100, "Conteo:  ", { font: "40px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(275, 95, totalscore, { font: "40px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(330, 100, "      votos", { font: "40px ComicBook", fill: "#FFFFFF" });

		this.game.add.text(30, 150, "Alcanza cierta cantidad de votos", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(40, 180, "para sumar apoyo de otros candidatos", { font: "28px ComicBook", fill: "#FFFFFF" });

		this.game.add.text(30, 250, "50: Voto Unico (vale 1 voto)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 300, "100: Bea-Sanchez (vale 2 votos)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 350, "200: Ominami (vale 3 votos)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 400, "500: Navarro (vale 4 votos)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 450, "1000: Artes (vale 5 votos)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 520, "Randon: Kultrun Mapuche (vale 30 votos)", { font: "28px ComicBook", fill: "#FFFFFF" });
		//this.game.add.text(30, 640, "5000: Obten el apoyo de todos (votos x3)", { font: "28px ComicBook", fill: "#FFFFFF" });
		this.game.add.text(30, 690, "    3000 votos de una:", { font: "45px ComicBook", fill: "#FFFFFF" });
        this.game.add.text(30, 740, "     PRESIDENTE", { font: "60px ComicBook", fill: "#FFFFFF" });
	}
};