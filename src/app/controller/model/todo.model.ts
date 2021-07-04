import {Conge} from './conge.model';
import {User} from './user.model';

export class Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  public  user=new User();

}
