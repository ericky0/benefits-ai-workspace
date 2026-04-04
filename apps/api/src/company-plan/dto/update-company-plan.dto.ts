import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyPlanDto } from './create-company-plan.dto';

export class UpdateCompanyPlanDto extends PartialType(CreateCompanyPlanDto) {}
