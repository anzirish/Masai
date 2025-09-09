import type { Priority } from "./App";

export interface Task {
  id: number;
  desc: string;
  priority: Priority;
  completion: boolean;
}
