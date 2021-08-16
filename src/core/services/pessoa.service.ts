import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pessoa, PessoaDocument } from '../schemas/pessoa.schema';

@Injectable()
export class PessoaService {
  constructor(
    @InjectModel(Pessoa.name) private pessoaModel: Model<PessoaDocument>,
  ) {}

  findAll(): Promise<Pessoa[]> {
    return this.pessoaModel.find().exec();
  }

  findOneById(id: string): Promise<Pessoa> {
    return this.pessoaModel.findById(id).exec();
  }
}
