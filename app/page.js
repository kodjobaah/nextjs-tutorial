import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">Nextjs Tutorial</h1>
        <Link href='/client' className='btn btn-accent'>Get Started</Link>
      </div>
    </>
  )
}

export default HomePage;
