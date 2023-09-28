import React from 'react'

const EventExample = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Searched!");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        console.log(`Post ${id} has been deleted!`);
    }

    return (
        <div>
            <form className="flex w-[500px] items-center gap-5">
                <input type="text" placeholder="Search for anything..." onChange={handleChange} className="w-full p-3 border border-slate-400" />
                <button onClick={handleClick} className="px-5 py-3 bg-green-600 text-white font-medium">Search</button>
            </form>
            <form className="post mt-4">
                <h1 className="text-xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel aspernatur corrupti, quibusdam impedit deserunt ad aliquid iste eveniet porro ut adipisci nam eos? Nulla libero nobis vero culpa placeat.
                </p>
                <button className="py-1 px-2 text-white bg-red-500" onClick={(e) => handleDelete(e, 1)}>Delete</button>
            </form>
            <form className="post mt-4">
                <h1 className="text-xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel aspernatur corrupti, quibusdam impedit deserunt ad aliquid iste eveniet porro ut adipisci nam eos? Nulla libero nobis vero culpa placeat.
                </p>
                <button className="py-1 px-2 text-white bg-red-500" onClick={(e) => handleDelete(e, 2)}>Delete</button>
            </form>
        </div>
    )
}

export default EventExample