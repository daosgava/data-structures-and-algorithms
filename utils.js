const printPretty = (funct, ...parameters) => {
    const stringParams = JSON.stringify(parameters);
    const cleanParams = stringParams.substring(1).substring(0, stringParams.length-2);

    console.log(`
      ### ${funct.name} ###
      ${funct.name}(${cleanParams});
      result: ${JSON.stringify(funct(...parameters))}
    `);
};

module.exports = {
    printPretty,
};
