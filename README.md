# Simple-password-generator
simple and tiny, but useful password generator. try it!


to use it, just import this file to your project, and call a default function! (it could even works without ane additional parameters!)

if you want to full control of your future password, see instructions below:

this simple and quick example can show you all aditional parameters, thst you can add.


RU(ru)
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
//         userSymbols: " " // тип string. если передана, то включает символы из строки (исключая пробелы) в Ваш будущий пароль 
//     }
// )

EN(us)
PasswordGenerator(
//     15,  // password length. optional parameter. default value is 8
//     true,  // simplify your password with adding dashes each 3 chars. each char includes in password length. optional parameter. it's turned off by default.
//     {
//         symbols: true,  // this option enables lower case latin letters in your password
//         upperCaseSymbols: true,  // this option enables upper case latin letters in your password
//         numbers: true,  // this option includes numbers in your password
//         specialSymbols: true,  // this option includes this symbols in your password: ( ! @ $ % ^ & * ( ) _ + )
//         ruSymbols: false,  // danger! this option enables lower case cyrillic letters in your password. if you haven't got cyrillic keyboard, it could cause some problems in futuree to manual password entering!
//         upperCaseRuSymbols: false,  // danger! this option enables upper case cyrillic letters in your password. see warning message abowe
//         userSymbols: in this optional parameter you can pass a string with unique(or not) characters, which will be added to your new password. spaces are not counted.
// )
