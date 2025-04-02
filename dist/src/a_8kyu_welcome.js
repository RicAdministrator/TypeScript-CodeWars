"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(language) {
    const greetings = [
        { language: "english", greeting: "Welcome" },
        { language: "czech", greeting: "Vitejte" },
        { language: "danish", greeting: "Velkomst" },
        { language: "dutch", greeting: "Welkom" },
        { language: "estonian", greeting: "Tere tulemast" },
        { language: "finnish", greeting: "Tervetuloa" },
        { language: "flemish", greeting: "Welgekomen" },
        { language: "french", greeting: "Bienvenue" },
        { language: "german", greeting: "Willkommen" },
        { language: "irish", greeting: "Failte" },
        { language: "italian", greeting: "Benvenuto" },
        { language: "latvian", greeting: "Gaidits" },
        { language: "lithuanian", greeting: "Laukiamas" },
        { language: "polish", greeting: "Witamy" },
        { language: "spanish", greeting: "Bienvenido" },
        { language: "swedish", greeting: "Valkommen" },
        { language: "welsh", greeting: "Croeso" }
    ];
    const languageGreeting = greetings.find((obj) => obj.language === language);
    return languageGreeting ? languageGreeting.greeting : "Welcome";
}
exports.greet = greet;
//# sourceMappingURL=a_8kyu_welcome.js.map