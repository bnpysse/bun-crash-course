// 好像还是尽量不使用命名空间，因为命名空间的定义是全局的，不好管理
// 使用命名空间主要还是为了兼容旧代码，比如之前的函数名叫做add，现在改成了Geometry.add
// export function add(a: number, b: number): number {
//     return a + b;
// }
namespace Geometry {
    export function area(width: number, height: number): number {
        return width * height;
    }
    export function perimeter(width: number, height: number): number {
        return 2 * (width + height);
    }
}