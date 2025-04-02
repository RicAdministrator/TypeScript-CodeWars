// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/typescript

export function greet(language: string): string {
    interface LanguageGreeting {
        language: string,
        greeting: string
    }

    const greetings: readonly LanguageGreeting[] = [
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