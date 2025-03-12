import {
    updateTask,
    getTasks,
    useQuery,
} from 'wasp/client/operations'

export const TodoList = () => {
    const { data: tasks, isLoading, error } = useQuery(getTasks)

    return (
        <div>
            {tasks && <TasksList tasks={tasks} />}

            {isLoading && 'Loading...'}
            {error && 'Error: ' + error}
        </div>
    )
}

const TaskView = ({ task }) => {
    const handleIsDoneChange = async (event) => {
        try {
            await updateTask({
                id: task.id,
                isDone: event.target.checked,
            })
        } catch (error) {
            window.alert('Error while updating task: ' + error.message)
        }
    }

    return (
        <div>
            <input type="checkbox" id={String(task.id)} checked={task.isDone} onChange={handleIsDoneChange} />
            {task.description}
        </div>
    )
}

const TasksList = ({ tasks }) => {
    if (!tasks?.length) return <div>No Tasks! ;)</div>

    return (
        <div>
            {tasks.map((task, idx) => (
                <TaskView task={task} key={idx} />
            ))}
        </div>
    )
}