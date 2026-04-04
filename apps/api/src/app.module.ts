import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { CompanyModule } from './company/company.module'
import { EmployeeModule } from './employee/employee.module'
import { PlanModule } from './plan/plan.module'
import { CompanyPlanModule } from './company-plan/company-plan.module'
import { EnrollmentModule } from './enrollment/enrollment.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306'),
      username: process.env.DB_USERNAME ?? 'root',
      password: process.env.DB_PASSWORD ?? 'root',
      database: process.env.DB_DATABASE ?? 'benefits_ai',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    EmployeeModule,
    PlanModule,
    CompanyPlanModule,
    EnrollmentModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
