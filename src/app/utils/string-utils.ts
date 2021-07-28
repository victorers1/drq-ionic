export class StringUtils {
    static capilatize(s: string): string {
        return s.charAt(0).toUpperCase() + s.substring(1);
    }
}