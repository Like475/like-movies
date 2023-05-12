export default function Movie({ poster, title, type, year }) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <div className='flex flex-col justify-between rounded-3xl bg-zinc-900 hover:scale-105 hover:drop-shadow-2xl'>
            <img
                src={
                    poster === 'N/A'
                        ? `https://placekitten.com/${getRandomInt(
                              250,
                              350
                          )}/${getRandomInt(350, 450)}`
                        : poster
                }
                alt={title}
                className='max-h-[28rem] w-full rounded-t-3xl object-cover'
            />
            <div className='h-24 overflow-hidden p-3.5'>
                <span className='-mb-0.5 inline-block h-10 w-full truncate text-2xl font-bold'>
                    {title}
                </span>
                <div className='flex justify-between font-semibold'>
                    <span>{type}</span>
                    <span>{year}</span>
                </div>
            </div>
        </div>
    );
}
