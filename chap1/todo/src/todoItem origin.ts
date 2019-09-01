/*
 * @Description: This file is made for
 * @Date: 2019-08-31 14:31:19
 * @LastEditTime: 2019-09-01 22:36:01
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */
export class TodoItem {
  public id: number;
  public task: string;
  public complete: boolean = false;

  public constructor(id: number, task: string, complete: boolean = false) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }
  public printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`
    );
  }
}
