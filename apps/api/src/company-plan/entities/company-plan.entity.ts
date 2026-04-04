import { Company } from 'src/company/entities/company.entity'
import { Enrollment } from 'src/enrollment/entities/enrollment.entity'
import { Plan } from 'src/plan/entities/plan.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class CompanyPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  companyId: string

  @Column()
  planId: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'companyId' })
  company: Company

  @ManyToOne(() => Plan)
  @JoinColumn({ name: 'planId' })
  plan: Plan

  @OneToMany(() => Enrollment, (enrollment) => enrollment.companyPlan)
  enrollments: Enrollment[]
}
