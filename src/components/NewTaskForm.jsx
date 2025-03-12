import {
    createTask,
} from 'wasp/client/operations'

// ... MainPage, TaskView, TaskList ...

const NewTaskForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const target = event.target
            const description = target.description.value
            target.reset()
            await createTask({ description })
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-row space-x-8'>
            <input name="description" type="text" defaultValue="" className='text-black' />
            <input type="submit" value="Create task" className='right-1 top-1 z-10 select-none rounded bg-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none' />
        </form>
    )
}

export default NewTaskForm;