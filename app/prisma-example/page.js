import prisma from "@/utils/db"


const prismaHandlers = async () => {
    console.log("prisma examples")
    // await prisma.task.create({
    //     data: {
    //         content: 'wake up'
    //     }
    // });

    const allTask = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    })

    return allTask;
}

const PrismaExamplePage = async () => {
    const tasks = await prismaHandlers();

    if (tasks.length == 0 ) {
        return <h2 className="mt-8 font-medium text-lg"> No task to be show</h2>
      }
    
   
    return (
        <div>

            <h1 className="text-7xl"> Prisma Example</h1>
            {tasks.map((task) => {
               return ( 
               <div key={task.id} className="text-xl py-2">
                    {task.content}
                </div>
                )
            })}
        </div>
    )
}

export default PrismaExamplePage