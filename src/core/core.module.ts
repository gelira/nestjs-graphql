import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pessoa, PessoaSchema } from './schemas/pessoa.schema';
import { PessoaService } from './services/pessoa.service';
import { PessoaResolver } from './resolvers/pessoa.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pessoa.name,
        schema: PessoaSchema,
      },
    ]),
  ],
  providers: [PessoaService, PessoaResolver],
})
export class CoreModule {}
