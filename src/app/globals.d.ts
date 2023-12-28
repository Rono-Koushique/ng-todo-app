type Task = {
    id: number;
    title: string;
    status: 'completed' | 'pending';
    createdAt: Date;
};

type WriteTask = Omit<Task, 'id'>;
