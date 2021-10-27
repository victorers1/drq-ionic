export class StringUtils {
    static capilatize(s: string): string {
        return s.charAt(0).toUpperCase() + s.substring(1);
    }


    static pad(n: number | string): string {
        if (typeof (n) == 'number') {
            const str = n.toString();
            return n < 10 ? '0' + str : str;

        } else if (typeof (n) == 'string') {
            return this.pad(parseInt(n));
        }
    }

    static search(str: string, subStr: string) {
        return str.toLowerCase().includes(subStr.toLowerCase());
    }
}