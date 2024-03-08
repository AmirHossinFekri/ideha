import { IsNotEmpty, IsString } from 'class-validator';
import { IsImageFile } from 'src/decorators/is-image.decorator';

export class PhotoDto {
  @IsImageFile({ message: 'عکس مورد نظر تایپ صحیحی ندارد' })
  @IsNotEmpty({ message: 'عکسی برای انتشار وجود ندارد' })
  url: string;

  @IsString({ message: 'توضیحات معتبر نیست ' })
  @IsNotEmpty({ message: 'توضیحات الزامی است' })
  description: string;

  @IsString({ message: 'تگ ها معتبر نیستند' })
  tags: string;
}
