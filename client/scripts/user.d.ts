declare namespace core {
    class User {
        private _displayName;
        private _emailAddress;
        private _username;
        private _password;
        constructor(displayName?: string, emailAddress?: string, username?: string, password?: string);
        get displayName(): string;
        set displayName(value: string);
        get emailAddress(): string;
        set emailAddress(value: string);
        get username(): string;
        set username(value: string);
        get password(): string;
        set password(value: string);
        toString(): string;
        serialize(): string | null;
        deserialize(data: string): void;
        toJSON(): {
            Username: string;
            DisplayName: string;
            EmailAddress: string;
        };
        fromJSON(data: User): void;
    }
}
