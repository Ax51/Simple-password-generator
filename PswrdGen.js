// PasswordGenerator(
//     15,  // длина пароля
//     true,  // опция деления пароля на группы по 3 символа через тире ('-')
//     {
//         symbols: true,  // опция использования латинских символов
//         upperCaseSymbols: true,  // опция использования заглавных латинских букв
//         numbers: true,  // опция использования чисел
//         specialSymbols: true,  // опция использования специальных символов ( ! @ $ % ^ & * ( ) _ + )
//         ruSymbols: false,  // опция использования кириллицы
//         upperCaseRuSymbols: false,  // опция использования заглавных букв кириллицы
//         userSymbols: "Очень длинная и непонятная строка символов, которые могли бы использоваться"
//     }
// )


'use strict'
export default function PasswordGenerator(
    passwordLength = 8,  //длина пароля по умолчанию
    easyPassword = false,  // функция деления пароля на группы по 3 символа через тире ('-')
    optionsArray = {  // набор опций. если обьект не передается, то используется этот в качестве значения по умолчанию
        symbols: true,
        upperCaseSymbols: true,
        numbers: true,
        specialSymbols: true,
        ruSymbols: false,
        upperCaseRuSymbols: false,
        userSymbols: null // предполагается ввод в качестве строки
    }) {

    const { symbols = false,
        upperCaseSymbols = false,
        numbers = false,
        specialSymbols = false,
        ruSymbols = false,
        upperCaseRuSymbols = false,
        userSymbols } = optionsArray;

    const sysEnSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        sysUpperCaseEnSymbols = sysEnSymbols.map(i => i.toUpperCase()),
        sysRuSymbols = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],
        sysUpperCaseRuSymbols = sysRuSymbols.map(i => i.toUpperCase()),
        sysNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        sysSpecialSymbols = ['!', '@', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
        sysMinUniqueChar = 4;

    let generatedPassword = '',
        usedSymbols = [
            numbers ? [...sysNums] : [],
            specialSymbols ? [...sysSpecialSymbols] : [],
            userSymbols && typeof userSymbols === "string" ? Array.from(new Set([...userSymbols.split('').filter(i => i !== ' ')])) : [] // преобразуем строку в массив и исключаем из него пробелы(как бесполезные для генерации пароля), далее с помощью набора убираем дубликаты введенных символов и возвращаем массив
        ].flat();

    if (ruSymbols || upperCaseRuSymbols) { // если имеется флаг Кириллицы, то латиница не будет применяться в генерации пароля
        usedSymbols = [
            usedSymbols,
            ruSymbols ? [...sysRuSymbols] : [],
            upperCaseRuSymbols ? [...sysUpperCaseRuSymbols] : [],
        ].flat();
    } else if (symbols || upperCaseSymbols) { // если не стоит ни одного флага символов, то никакие символы не применяются в генерации
        usedSymbols = [
            usedSymbols,
            symbols ? [...sysEnSymbols] : [],
            upperCaseSymbols ? [...sysUpperCaseEnSymbols] : []
        ].flat();
    }

    function randomValue(maxValue = 10) {
        return Math.floor(Math.random() * maxValue);
    }

    if (usedSymbols.length > sysMinUniqueChar) { // если уникальных символов меньше указанного числа, то пароль генерироваться не будет.
        for (let i = 0; i < passwordLength; i++) {
            generatedPassword = generatedPassword + usedSymbols[randomValue(usedSymbols.length)]
        }

        if (generatedPassword.length > 3 && easyPassword) {
            for (let i = 3; i <= generatedPassword.length; i = i + 4) { // длина пароля увеличивается на количество тире; итерация = итерация + 1(знак тире)
                generatedPassword = generatedPassword.slice(0, i) + '-' + generatedPassword.slice(i) // врезаем на каждой итерации тире
            }
            generatedPassword = generatedPassword.slice(0, passwordLength)
            if (generatedPassword[generatedPassword.length - 1] === '-') {
                generatedPassword = generatedPassword.slice(0, generatedPassword.length - 1) + usedSymbols[randomValue(usedSymbols.length)]
            }
        }
    } else {
        generatedPassword = "Ошибка! слишком мало символов для генерации пароля!"
    }

    return generatedPassword;
}