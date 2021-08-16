import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
  versionKey: false,
})
export class Pessoa {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    min: 0,
    required: true,
  })
  idade: number;

  @Prop({
    required: false,
  })
  email: string;
}

export type PessoaDocument = Pessoa & Document;

export const PessoaSchema = SchemaFactory.createForClass(Pessoa);
