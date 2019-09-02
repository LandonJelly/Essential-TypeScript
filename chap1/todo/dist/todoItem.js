"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: Using More Concise Code in the todoItem.ts File in the src Folder
 * @Date: 2019-08-31 14:31:19
 * @LastEditTime: 2019-08-31 14:52:03
 * @Author: LeongD
 * @LastEditors: LeongD
 */
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements required
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
