"use strict";
/*
 * @Description: This file is made for
 * @Date: 2019-08-31 12:32:41
 * @LastEditTime: 2019-09-02 21:07:34
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
// let  todos  = [
//     new TodoItem(1,'Buy Flowers'),new TodoItem(2,'Get Shoes'),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection('Adam', todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem));
// todoItem.printDetails();
collection.getTodoItems(true).forEach(item => item.printDetails());
// type error 
// collection.addTodo(todoItem);
