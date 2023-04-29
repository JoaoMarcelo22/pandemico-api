import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    sex: string

    @Column()
    city: string

    @Column()
    permission: boolean

    @Column()
    age: number

    @Column()
    password: string

    @Column()
    createdat: Date

    @Column()
    updatedat: Date

}
