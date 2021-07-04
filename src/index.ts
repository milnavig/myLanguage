import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `сумма РАВНО 5 МИНУС 9;
    суммадва РАВНО 0 МИНУС 6;
    КОНСОЛЬ сумма;
    КОНСОЛЬ суммадва;
    `

const lexer = new Lexer(code);

lexer.lexAnalysis();
//console.log(lexer.tokenList);

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);