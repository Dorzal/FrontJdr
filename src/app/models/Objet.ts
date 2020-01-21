import InventaireItem from './InventaireItems';

export default class Objet {
    id: number;
    nom: string;
    description: string;
    logo: string;
    prixPo: number;
    prixPa: number;
    prixPc: number;
    prixPoRural: number;
    prixPaRural: number;
    prixPcRural: number;
    inventaireItems : InventaireItem[];
}