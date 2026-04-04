import { CompanyPlan } from 'src/company-plan/entities/company-plan.entity'
import { Employee } from 'src/employee/entities/employee.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  ein: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[]

  @OneToMany(() => CompanyPlan, (companyPlan) => companyPlan.company)
  companyPlans: CompanyPlan[]
}
