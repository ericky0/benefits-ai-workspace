import { CompanyPlan } from 'src/company-plan/entities/company-plan.entity'
import { Employee } from 'src/employee/entities/employee.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  employeeId: string

  @Column()
  companyPlanId: string

  @Column({ type: 'enum', enum: ['pending', 'active', 'cancelled'] })
  status: string

  @Column({
    type: 'enum',
    enum: ['individual', 'individual_spouse', 'individual_children', 'family'],
  })
  coverageTier: string

  @Column({ type: 'date' })
  effectiveDate: Date

  @Column({ type: 'date' })
  enrollmentDate: Date

  @Column({ type: 'date', nullable: true })
  terminationDate: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee

  @ManyToOne(() => CompanyPlan)
  @JoinColumn({ name: 'companyPlanId' })
  companyPlan: CompanyPlan
}
