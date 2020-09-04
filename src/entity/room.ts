import Database from "../utils/database";
import Result from "../models/result";
import { v4 as uuid4} from 'uuid';
import { Entity, PrimaryGeneratedColumn, Index, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity('rooms')
export default class User{
    @PrimaryGeneratedColumn()
    rid: number;

    @Index({ unique: true})
    @Column({ length: 50, unique: true, nullable: false})
    timeSets: any;

    constructor() {
        this.timeSets = [
            {timeStart: 11, timeEnd: 12, booked: false},
            {timeStart: 13, timeEnd:14, booked: false},
            {timeStart: 15, timeEnd: 16, booked: false},
            {timeStart: 17, timeEnd: 18, booked: false},
            {timeStart: 19, timeEnd: 20, booked: false},
        ];


    }
}
