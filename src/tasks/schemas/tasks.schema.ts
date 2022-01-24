import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type taskDocument = Task & Document;

export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
