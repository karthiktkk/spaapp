/**
 * 
 */

	
function Ninja() {
	    var swordState = true;
	    this.swingSword = function () {
	        return swordState;
	    };
	    this.setSword = function (b) {
	        swordState = b;
	    };
	}

	// Should return false, but will be overridden
	Ninja.prototype.swingSword = function () {
	    return false;
	};

	var ninja = new Ninja();
	console.log(ninja.swingSword(), "Calling the instance method, not the prototype method.");
	ninja.setSword(false);
	console.log(ninja.swingSword()); // returns false
