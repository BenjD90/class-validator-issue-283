import { Allow, IsISO8601, IsString, MinLength } from 'class-validator';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class Message {
    @IsString()
    @Allow()
    @Expose()
	public body: string;
}
