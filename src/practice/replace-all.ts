// ReplaceAll<S, From, To>
// ReplaceAll<"demo item demo", "demo", "item"> => "item item item"
type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends ""
        ? S
        : S extends `${infer Start}${From}${infer Rest}`
        ? `${Start}${To}${ReplaceAll<Rest, From, To>}`
        : S;

type Replaced = ReplaceAll<"demo item demo", "demo", "item">;
// "demo item demo"
// Start: ""
// From: "demo"
// Rest: " item demo"

/*
1. ReplaceAll là một kiểu dữ liệu có tham số generics, nó có ba tham số là S, From và To. S là chuỗi ban đầu, From là chuỗi con mà bạn muốn thay thế và To là chuỗi con mà bạn muốn thay thế From bằng.

2. Kiểu dữ liệu có điều kiện: Đoạn mã sử dụng các điều kiện để xác định cách thực hiện thay thế chuỗi.
a. Nếu From là chuỗi rỗng (''), điều này có nghĩa là không có gì để thay thế. Trong trường hợp này, kiểu ReplaceAll trả về chuỗi ban đầu S.
b. Nếu From không rỗng, chúng ta sẽ tìm kiếm sự xuất hiện đầu tiên của From trong chuỗi S. Chúng ta sử dụng template literal type để chia chuỗi S thành hai phần: Start là phần trước khi chuỗi From xuất hiện và Rest là phần sau khi chuỗi From xuất hiện.
c. Sau đó, chúng ta kết hợp Start, To và sự đệ quy của ReplaceAll trên Rest. Điều này sẽ thay thế sự xuất hiện đầu tiên của From bằng To, và tiếp tục thực hiện thay thế trong phần còn lại của chuỗi.
d. Việc đệ quy này sẽ tiếp tục cho đến khi không còn sự xuất hiện nào của From trong chuỗi S. Khi đó, kiểu ReplaceAll sẽ trả về chuỗi đã được thay thế hoàn toàn.

3. Cuối cùng, chúng ta sử dụng kiểu ReplaceAll để thay thế chuỗi "demo item demo" trong ví dụ và chuyển "demo" thành "item". Kết quả của việc này là kiểu "item item item".
*/