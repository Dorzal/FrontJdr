import Classe from './Classe';
import Compte from './Compte';
import Inventaire from './Inventaire';

export default class Personnage {
    id: number;
    nom: string;
    force: number;
    dexterite: number;
    intelligence: number;
    charisme: number;
    constitution: number;
    description: string;
    avatar: string;
    vitalite: number;
    classe: Classe[];
    attaque: number;
    defense: number;
    sagesse: number;
    sauvegarde: number;
    niveau: number;
    compte: Compte[];
    inventaire: Inventaire;
    mort: boolean;
}