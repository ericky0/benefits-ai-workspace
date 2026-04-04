import { Employee } from 'src/employee/entities/employee.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  employeeId: string

  @Column({ unique: true })
  token: string

  @Column({ type: 'timestamp' })
  expiresAt: Date

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee

  @CreateDateColumn()
  createdAt: Date
}
