export default interface PersonalData{
    address: string;
    email: string;
    phone: string;
    socialNetworks: SocialNetworks[]
}

interface SocialNetworks{
    nombre: string;
    link: string;
}