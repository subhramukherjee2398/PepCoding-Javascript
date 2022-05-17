

function TestTorF(val){

    return val ? console.log("True") : console.log("False");

}

TestTorF(false);
TestTorF('');
TestTorF(0);
TestTorF(-4);
TestTorF(null);
TestTorF(NaN);
TestTorF(undefined);
TestTorF({});
TestTorF([]);
TestTorF(new Boolean(false));




