const Error = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col bg-neutral-300 hover:cursor-default">
        <h1 className="text-red-600 text-8xl font-bold tracking-tight mb-6">404</h1>
        <p className="text-red-400 font-bold tracking-tight text-xl">The page you are looking for dosen't exist or an error occurred</p>
    </div>
  )
}

export default Error