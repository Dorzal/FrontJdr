import Sort from './Sort'
import CategorieHistorique from './CategorieHistorique';

export default class Classe {
    id: number;
    nom: string;
    icone: string;
    description: string;
    sorts: Sort[];
    categorieshistorique : CategorieHistorique[];
}