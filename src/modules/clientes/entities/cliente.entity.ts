import { User } from "src/modules/auth/entities/user.entity";
import { Profile } from "src/modules/profile/entities/profile.entity";
import { BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryColumn()
    nif: string;

    @Column('text', { unique: true} )
    nombre: string;

    @Column('text', { unique: true })
    apellidos: string;

    @Column('text', { nullable: true })
    direccion: string;

    @Column('text', { nullable: true })
    ciudad: string;

    @Column('text',{ nullable: true })
    localidad: string;

    // @OneToOne(
    //     (type) => User,
    //     (user) => user.cliente,
    //     { cascade: false }
    // )
    // user?: User;

    // @OneToMany(
    //     () => Libro,
    //     (Libro) => Libro.cliente,
    //     { cascade: false, eager: false  }

    //     // { cascade: false, eager: true  }
    // )
    // libros?: Libro[];



    // @BeforeInsert()
    // checkGithub(){
    //     if (!this.github.includes('https://github.com/')){
    //         this.github = `https://github.com/${this.github}`
    //     }
    // }

   
}