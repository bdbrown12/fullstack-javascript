const SomeModule = (function() {})();

//module with a private function inside
const Formatter = (function() {
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => {
        log("Setting times run");
        ++timesRun;
    }

    const makeUpperCase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
    }

    return {
        makeUpperCase : makeUpperCase,
        timesRun,
    }
})();

// If we tried to use the log function it will return undefined
// because our module doesn't return anything even though the 
// code will execute.
// Formatter.log("Hello");

console.log(Formatter.makeUpperCase("tomek"));
console.log(Formatter.timesRun)