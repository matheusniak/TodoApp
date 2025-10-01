import React, { useState, useEffect } from "react";
import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(loadFromStorage());
  }, []);

  function refreshFiltered(desc = "") {
    const all = loadFromStorage()
      .slice()
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    if (!desc) return setList(all);
    const filtered = all.filter((t) =>
      t.description.toLowerCase().includes(desc.toLowerCase())
    );
    setList(filtered);
  }

  function handleChange(e) {
    setDescription(e.target.value);
  }
  function handleSearch() {
    refreshFiltered(description);
  }
  function handleAdd() {
    if (!description.trim()) return;
    const newTodo = {
      _id: makeId(),
      description: description.trim(),
      done: false,
      createdAt: Date.now(),
    };
    const all = [newTodo, ...loadFromStorage()];
    saveToStorage(all);
    setDescription("");
    setList(all);
  }

  const STORAGE_KEY = "todos_react_portfolio_v1";

  function makeId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID)
      return crypto.randomUUID();
    return String(Date.now()) + Math.random().toString(36).slice(2, 9);
  }

  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  function saveToStorage(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }
  }

  function handleRemove(todo) {
    const all = loadFromStorage().filter((t) => t._id !== todo._id);
    saveToStorage(all);
    setList(all);
  }
  function handleMarkAsDone(todo) {
    const all = loadFromStorage().map((t) =>
      t._id === todo._id ? { ...t, done: true } : t
    );
    saveToStorage(all);
    setList(all);
  }
  function handleMarkAsPending(todo) {
    const all = loadFromStorage().map((t) =>
      t._id === todo._id ? { ...t, done: false } : t
    );
    saveToStorage(all);
    setList(all);
  }
  function handleClear() {
    setDescription("");
    refreshFiltered("");
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm
        description={description}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <TodoList
        list={list}
        handleRemove={handleRemove}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending}
      />
    </div>
  );
}
