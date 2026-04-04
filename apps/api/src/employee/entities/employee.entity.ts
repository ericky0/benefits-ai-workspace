import { Company } from 'src/company/entities/company.entity'
import { Enrollment } from 'src/enrollment/entities/enrollment.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ type: 'enum', enum: ['company_admin', 'employee'] })
  role: string

  companyId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Company)
  @JoinColumn()
  company: Company

  @OneToMany(() => Enrollment, (enrollment) => enrollment.employee)
  enrollments: Enrollment[]
}
