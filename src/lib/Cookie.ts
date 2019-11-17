// the Cookie class
class Cookie {
    // Private map object, which maps strings to strings
    private _map: Map<string, string> = new Map();
    // When this is created, run the parse function
    constructor() {
        this.parse();
    }
    /**
     * @description sets a cookie name with the given value, expiration date, and path.
     * @param name the name of the cookie -- case sensitive
     * @param value the value the cookie will have
     * @param expires When does the cookie epxire?
     * @param path what is the path the cookie should be available for
     */
    public set(name: string, value: string, expires?: string | Date, path?: string): void {
        // encode the value portion of the uri
        let cookieValue = [name, encodeURIComponent(value)].join('=');
        // Create an array of modifiers
        const modifiers = [];
        // If we have an expires value, run the next bit of code
        if (expires) {

            if (typeof expires === 'string') {
                // If it is a string, then we simply add in the expires=[expires string]
                modifiers.push('expires=' + expires);
            } else {
                // Otherwise we call the toUTCString() method.
                modifiers.push('expires=' + expires.toUTCString());
            }
        }
        // If the path is set, add it to the modifers array.
        if (path) {
            modifiers.push('path=' + path);
        }
        // If the modifiers has a non-zero length, add them to the cookie value
        if (modifiers.length) {
            cookieValue += ';' + modifiers.join(';');
        }
        // Set the cookie.
        document.cookie = cookieValue;
        // Set the value in the map for easier retrieval.
        this._map.set(name, value);
    }
    /**
     * @description get's the value of a cookie, or returns undefined
     * @param name the name of the cookie to look up
     */
    public get(name: string): string | undefined {
        return this._map.get(name);
    }
    /**
     * @description Parses out the document.cookie string into a Map object.
     */
    public parse(): void {
        /*
          1. Split the cookie by semicolons
          2. loop over each cookie
         */
        document.cookie.split(/;\s?/).forEach((cookie) => {
            // For each cookie, we're going to split it by the equal sign, trim it down, and decode it.
            const [cName, cValue] = cookie.split('=').map((part) => decodeURIComponent(part.trim()));
            // After that, we simply set the map value.
            this._map.set(cName, cValue);
        });
    }
}

export default (new Cookie());
