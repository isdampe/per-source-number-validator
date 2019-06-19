/**
 * Validates a given pet exchange register source number based on the
 * requirements description published on https://per.animalwelfare.vic.gov.au/search/
 * on June 19 2019 3:00pm AEST.
 *
 * "Source number not found. The format should be two letters followed by six 
 * 	numbers with no spaces. If an invalid source number is being used to 
 * 	advertise a dog or cat for sale in Victoria, report the advertisement here."
 *
 * 	@param {String} sourceNumber The source number string to validate.
 * 	@param {Boolean} verbose Log errors to stderr.
 * 	@return {Boolean}
 */
const validate = function(sourceNumber, verbose) {
	if (typeof verbose === "undefined")
		verbose = false;

	if (sourceNumber.length !== 8) {
		if (verbose)
			console.error("Source number length must be 8.");
		return false;	
	}

	const prefix = sourceNumber.substr(0, 2);
	const suffix = sourceNumber.substr(2);
	
	if (/[^a-zA-Z]/g.test(prefix)) {
		if (verbose)
			console.error("The first two characters should be letters (a-z, A-Z)");
		return false;
	}

	if (/[^0-9]/g.test(suffix)) {
		if (verbose)
			console.error("The last six characters should be numerical only (0-9)");
		return false;
	}

	return true;
};

module.exports = validate;
