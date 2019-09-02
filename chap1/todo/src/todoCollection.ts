/*
 * @Description: This file is made for
 * @Date: 2019-08-31 14:57:27
 * @LastEditTime: 2019-09-02 21:56:30
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */
import { TodoItem } from "./todoItem";

type ItemCounts = {
  total :number,
  incomplete:number
}

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    // no statements required
    todoItems.forEach(item => this.itemMap.set(item.id, item))
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()]
      .filter(item => includeComplete || !item.complete)
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }


  removeComplete() {
    this.itemMap.forEach(item => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    })
  }
  
  getItemCounts():ItemCounts {
    return {
      total:this.itemMap.size,
      incomplete:this.getTodoItems(false).length
    };
  }
}

// Checking the Basic Data Model Features
// Adding Features to the Collection Class

// page-13
