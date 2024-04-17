let LOCAL = false;

let HostName, URI;

if(LOCAL) {
    let URI = "mongodb://localhost/contacts";
    HostName = "localhost"
}else{
    HostName = "Mongo DB Atlas";

    URI = "mongodb+srv://inft2202_admin:<password>@inft2202.kxtkviv.mongodb.net/"
}

export { HostName, URI }
export const SessionSecret = "INFT2202SessionSecret";


//password Atlas DB: EidW5kaQhYRkmcBL


