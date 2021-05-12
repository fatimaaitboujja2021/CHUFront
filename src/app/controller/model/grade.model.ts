import {Fonctionnaire} from './fonctionnaire.model';

export class Grade {
  public  id:number;
  public  ref:string;
  public  gradenom:string;
  public  dTGrade:string;
  public   fonctionnaire=new Array<Fonctionnaire>();
}
