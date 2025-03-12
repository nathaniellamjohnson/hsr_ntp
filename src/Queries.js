export const getTasks = async (args, context) => {
    return context.entities.Task.findMany({
        where: { isDone: false },
        orderBy: { id: 'asc' },
    })
}