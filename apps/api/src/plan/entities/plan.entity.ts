import { CompanyPlan } from 'src/company-plan/entities/company-plan.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ type: 'enum', enum: ['health', 'dental', 'vision', 'life'] })
  type: string

  @Column({ type: 'simple-array' })
  availableTiers: string[]

  @Column({ nullable: true })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => CompanyPlan, (companyPlan) => companyPlan.plan)
  companyPlans: CompanyPlan[]
}
