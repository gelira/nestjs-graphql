import { Args, Query, Resolver } from '@nestjs/graphql';
import { PessoaGQL } from '../models/pessoa-gql.model';
import { PessoaService } from '../services/pessoa.service';

@Resolver(() => PessoaGQL)
export class PessoaResolver {
  constructor(private pessoaService: PessoaService) {}

  @Query(() => [PessoaGQL])
  pessoas() {
    return this.pessoaService.findAll();
  }

  @Query(() => PessoaGQL, { nullable: true })
  pessoa(@Args('id') id: string) {
    return this.pessoaService.findOneById(id);
  }
}
