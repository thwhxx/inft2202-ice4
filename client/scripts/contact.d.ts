declare namespace core {
    class Contact {
        private _fullName;
        private _contactNumber;
        private _emailAddress;
        constructor(fullName?: string, contactNumber?: string, emailAddress?: string);
        get fullName(): string;
        set fullName(value: string);
        get contactNumber(): string;
        set contactNumber(value: string);
        get emailAddress(): string;
        set emailAddress(value: string);
        toString(): string;
        serialize(): string | null;
        deserialize(data: string): void;
    }
}
