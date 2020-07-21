const message = require("../../lib/message.js");

test("Проверка приёма сообщений", () => {

    expect(message("!hello")).toBe("Команда:hello Аргументы:");
    expect(message("!hello 1")).toBe("Команда:hello Аргументы:1");
    expect(message("!hello 1 2 3 4")).toBe("Команда:hello Аргументы:1,2,3,4");
    expect(message("!hello 1 2 3 4")).toBe("Команда:hello Аргументы:1,2,3,4");

});

test("Проверка разделения аргументов - символом", () => {

    expect(message("!hello 1-2")).toBe("Команда:hello Аргументы:1,2");

});

