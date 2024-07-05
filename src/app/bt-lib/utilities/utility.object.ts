export class Ps_UtilObjectService {
    //hàm kiểm tra giá trị
    public static hasValue(value: any): boolean {
      return !(value === undefined || value === null);
    }
    //hàm kiểm tra giá trị mảng
    public static hasListValue(value: any): boolean {
      return !(value === undefined || value === null || value == <any>[] || value.length === 0);
    }
    //hàm kiểm tra giá trị chuỗi
    public static hasValueString(value: any): boolean {
      return !(value === undefined || value === null || value === "" || value.length === 0 ||
        (typeof value === 'string' && (value.trim() === "" || value.trim().length === 0)));
    }
}
