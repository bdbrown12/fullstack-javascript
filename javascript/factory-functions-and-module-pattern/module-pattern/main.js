const SomeModule = (function() {})();

//module with a private function inside
const Formatter = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUpperCase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
    }
})();

// If we tried to use the log function it will return undefined
// because our module doesn't return anything even though the 
// code will execute.
Formatter.log("Hello");