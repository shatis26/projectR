import React from 'react'

function Card({username = "Manish", post ="Engineer"}) {
    // console.log(props);
  return (
    <div>
        {/*
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?
        fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW5
        8MHx8MHx8fDA%3D" alt="" />
        <h1 className='text-3xl bg-purple-500 p-3 rounded'>This an beautiful image</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum odio minus
             excepturi laboriosam, voluptas vitae iusto nobis, alias aperiam repudiandae 
             esse aut nam ducimus officiis illo. Animi, soluta ipsam?</p>
             */}

        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username }
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure> 
    </div>
    )
}

export default Card
