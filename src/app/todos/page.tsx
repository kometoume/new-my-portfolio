// src/app/todos/page.tsx

import TodoApp from '../../components/todos/TodoApp';

export default function TodosPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-3">筋トレTodoリスト</h1>
      <TodoApp />
    </main>
  );
}