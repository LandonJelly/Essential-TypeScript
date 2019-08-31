/*
 * @Description: Using More Concise Code in the todoItem.ts File in the src Folder
 * @Date: 2019-08-31 14:31:19
 * @LastEditTime: 2019-08-31 14:52:03
 * @Author: LeongD
 * @LastEditors: LeongD
 */
export class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    // no statements required
  }
  printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`
    );
  }
}
