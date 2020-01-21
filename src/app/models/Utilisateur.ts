import Personnage from './Personnage';

export default class Utilisateur {
    id: number;
    pseudo: string;
    roles: [
        string
    ];
    password: string;
    personnages: Personnage[];
    salon: [
        string
    ];
    token?: string;
}