/**\
 * Creating an Entity
 * Step 1: Create an entity file, and create a class in it that lists all the properties that your entity will have
 */
// Entity, Column, PrimaryGeneratedColumn  => decorator
// Get logs after insert, update, delete with Hooks
import { Entity, AfterInsert, AfterUpdate, AfterRemove, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    // Using hooks to get logs after performing any api actions
    @AfterInsert()
    logInsert() {
        console.log(`inserted data for id ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`Updated a user with id ${this.id}`);
    }

    @AfterRemove()
    logDelete() {
        console.log(`Deleted a user of Id ${this.id}`);
    }
}