// STEPS: When require typeORM for repository
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { error } from 'console';

@Injectable()
export class UsersService {
    // private repo: Repository<User>  ==> repo is instace of typeOrm repository that deals with the instances of the users
    // @InjectRepository  ==> Inject repository with user
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    //create a new method
    create(email: string, password: string) {
        const user = this.repo.create({ email, password });
        return this.repo.save(user);
    }

    // run query return first record that matching search criteria
    // always return 1 recors or null
    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    // run query and return list of entities
    // return a array of all record that matches search criteria
    find(email: string) {
        return this.repo.find({ where: {email} });
    }

    /**
     *  attr = if we update id is require BUT the argument list may vary so we need to provide 
     *         a mechanism that will handle that
     *  attr: Partial<User>
     */
    async update(id: number, attrs: Partial<User>) {
        //attmpt to find a user with given id
        const user = await this.findOne(id);
        if(!user){
            throw new error('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number) {
        const user = await  this.findOne(id);
        if(!user) { 
            throw new Error('user not found');
        }
        return this.repo.remove(user);
    }
}
