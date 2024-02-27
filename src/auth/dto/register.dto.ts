import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class registerDTO {
  @IsString({ message: 'نام کاربری را به صورت صحیح وارد کنید' })
  @IsNotEmpty({ message: 'وارد کردن نام کاربری الزامی است' })
  @Length(3, 20, { message: 'طول نام کاربری باید بین 3 تا 20 باشد' })
  username: string;

  @IsEmail({}, { message: 'ایمیل را به صورت صحیح وارد کنید' })
  @IsNotEmpty({ message: 'وارد کردن ایمیل الزامی است' })
  email: string;

  @IsString({ message: 'رمز عبور مشکل دارد' })
  @IsNotEmpty({ message: 'وارد کردن رمز عبور اجباری است' })
  password: string;
}
