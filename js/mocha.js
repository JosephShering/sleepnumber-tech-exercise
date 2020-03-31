
function setupMocha() {
    mocha.setup('bdd');
}

function runMocha() {
    mocha.checkLeaks();
    mocha.run();
}