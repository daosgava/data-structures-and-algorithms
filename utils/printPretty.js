/*
    This utility is for printing a function, its parameters and its returned value
*/

const cleanParams = (params) => {
	const stringParams = JSON.stringify(params);
	const cleanParams = stringParams
		.substring(1)
		.substring(0, stringParams.length - 2);

	return cleanParams;
};

const printPretty = (funct, ...parameters) => {
	const cleanedParams = cleanParams(parameters);
	const cleanedRes = JSON.stringify(funct(...parameters));

	console.log(`
        ### ${funct.name} ###
        function call: ${funct.name}(${cleanedParams});
        result: ${cleanedRes}
    `);
};

module.exports = printPretty;
