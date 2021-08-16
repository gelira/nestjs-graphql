import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PessoaGQL {
  @Field()
  id: string;

  @Field()
  nome: string;

  @Field(() => Int)
  idade: number;

  @Field({ nullable: true })
  email?: string;
}
