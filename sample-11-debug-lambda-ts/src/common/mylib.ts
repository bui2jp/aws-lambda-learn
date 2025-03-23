export class MyLib {
    /**
     * 名前をフォーマットしてメッセージを返す
     * @param name - 名前
     * @returns フォーマットされたメッセージ
     */
    static formatMessage(name: string): string {
        return `Hello, ${name}!`;
    }

    /**
     * 現在のタイムスタンプを取得する
     * @returns 現在のタイムスタンプ
     */
    static getCurrentTimestamp(): string {
        return new Date().toISOString();
    }
}