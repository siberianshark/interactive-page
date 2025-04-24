import { TodoBoard } from './TodoBoard';

import { DrawingBoard } from './DrawingBoard';
import { TextEditor } from './TextEditor';

export const InfoBoards = () => {
  return (
    <section className="p-4">
      <div className="flex justify-between p-4 space-x-4">
      <div className="flex-1 max-w-[33%]">
        <TodoBoard />
      </div>
      <div className="flex-1 max-w-[33%]">
        <DrawingBoard />
      </div>
        <div className="flex-1 max-w-[33%]">
        <TextEditor />
      </div>
      </div>
    </section>
  );
};
