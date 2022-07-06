import spinner from './assets/spinner1.gif'

function Spinner () {
    return (
        <div className='w-100 mt-20'>
            <img src={spinner} className="text-center mx-auto" width={180} alt='Loading ...' />
        </div>
    )
}

export default Spinner