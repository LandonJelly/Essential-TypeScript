"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: This file is made for
 * @Date: 2019-08-31 14:31:19
 * @LastEditTime: 2019-09-01 22:36:01
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */
class TodoItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
