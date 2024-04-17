let LOCAL = false;

let HostName, URI;

if(LOCAL) {
    let URI = "mongodb://localhost/contacts";
    HostName = "localhost"
}else{
    HostName = "Mongo DB Atlas";

    URI = "mongodb+srv://osvaldoguerrerocastaneda:EidW5kaQhYRkmcBL@cluster0.lyki0mn.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0"
}

export { HostName, URI }
export const SessionSecret = "INFT2202SessionSecret";


//password Atlas DB: EidW5kaQhYRkmcBL


