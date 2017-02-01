class GuessingGame {
    constructor() {
		this.min=0;
		this.max=0;
		this.enter=0;
	}

    setRange(min, max) {
		this.min=min;
		this.max=max;
		
		return this;
    }

    guess() {
		this.enter=Math.ceil((this.max+this.min)/2);
		
		return this.enter;
    }

    lower() {
		this.max=Math.ceil((this.max+this.min)/2);
		
		return this;
    }

    greater() {
		this.min=Math.ceil((this.max+this.min)/2);
		
		return this;
    }
	
};

module.exports = GuessingGame;
