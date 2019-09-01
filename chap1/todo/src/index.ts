/*
 * @Description: This file is made for
 * @Date: 2019-08-31 12:32:41
 * @LastEditTime: 2019-09-01 23:20:16
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */


import { TodoItem } from "./todoItem";
import { TodoCollection } from './todoCollection';
import { TodoItem } from './todoItem origin';


// let  todos  = [
//     new TodoItem(1,'Buy Flowers'),new TodoItem(2,'Get Shoes'),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];


let collection: TodoCollection = new TodoCollection('Adam', todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);


let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));

todoItem.printDetails();

// type error 
// collection.addTodo(todoItem);