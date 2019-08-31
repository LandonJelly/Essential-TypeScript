/*
 * @Description: This file is made for
 * @Date: 2019-08-31 14:57:27
 * @LastEditTime: 2019-08-31 16:09:17
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    // no statements required
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.todoItems.find(item => item.id === id);
  }
  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

// Checking the Basic Data Model Features
// page10
