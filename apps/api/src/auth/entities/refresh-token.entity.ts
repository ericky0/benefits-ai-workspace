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

  employeeId: string

  @Column({ unique: true })
  token: string

  @Column({ type: 'timestamp' })
  expiresAt: Date

  @ManyToOne(() => Employee)
  @JoinColumn()
  employee: Employee

  @CreateDateColumn()
  createdAt: Date
}
