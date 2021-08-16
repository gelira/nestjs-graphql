import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pessoa, PessoaSchema } from './schemas/pessoa.schema';
import { PessoaService } from './services/pessoa.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pessoa.name,
        schema: PessoaSchema,
      },
    ]),
  ],
  providers: [PessoaService],
})
export class CoreModule {}
