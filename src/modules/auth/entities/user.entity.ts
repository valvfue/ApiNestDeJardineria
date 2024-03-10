import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    fullName: string;
    
   
    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['administrador']
    })
    roles: string[];

    // @OneToOne(
    //     () => Cliente,
    //     (cliente) => cliente.user
    // )
    // @JoinColumn()
    // cliente?: Cliente

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.checkFieldsBeforeInsert()
    }
}
