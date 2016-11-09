export declare class Recitr {
    static fromStatements: (statements: string[]) => Recitr;
    static fromFile: (statementsPath: string) => Promise<Recitr>;
    say: () => string;
    private constructor(statements);
}
