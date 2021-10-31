export class StringUtils {
  static capilatize(s: string): string {
    if (s.length == 0) return '';
    let result = s[0].toUpperCase();
    if (s.length > 1) result += s.substring(1);
    return result;
  }

  static pad(n: number | string): string {
    if (typeof n == 'number') {
      const str = n.toString();
      return n < 10 ? '0' + str : str;
    } else if (typeof n == 'string') {
      return this.pad(parseInt(n));
    }
  }

  static search(str: string, subStr: string) {
    return str.toLowerCase().includes(subStr.toLowerCase());
  }
}
