import {Fonctionnaire} from './fonctionnaire.model';

export class IndemniteAstreinte {

  public id:number;
  public  nbrAstree :number;
  public nbrHAstree :number;
  public  ref:string;
  public  Presence :boolean;
  public  Trim:number;
  public  Nbr_JrsFeries:number ;
  public  Nbr_H_Regl :number;
  public  Nbr_H_Supp :number;
  public  Nbr_unite :number;
  public  Unite :number;
  public  Rlqt_reported :number;
  public  Mnt_Brut :number;
  public  Impot :number;
  public  Mnt_Net :number;
  public  Rlqt_A_reported :number;
  public fonctionnaires =new Array<Fonctionnaire>();


}
