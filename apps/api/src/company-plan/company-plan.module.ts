import { Module } from '@nestjs/common'
import { CompanyPlanService } from './company-plan.service'
import { CompanyPlanController } from './company-plan.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CompanyPlan } from './entities/company-plan.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CompanyPlan])],
  controllers: [CompanyPlanController],
  providers: [CompanyPlanService],
})
export class CompanyPlanModule {}
