import { useState } from 'react'
import CardRent from '../../../components/CardRent/CardRent';

const cardData = [
    {
        id: 1,
        title: 'Título 1',
        description: 'Descripción de la tarjeta 1...',
        imageUrl: 'https://images.unsplash.com/photo-1501623021299-5a9e5f95960b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdvJTIwYWlycGxhbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 2,
        title: 'Título 2',
        description: 'Descripción de la tarjeta 2...',
        imageUrl: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycGxhbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 3,
        title: 'Título 3',
        description: 'Descripción de la tarjeta 3...',
        imageUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBsYW5lfGVufDB8fDB8fHww',
    },
    {
        id: 4,
        title: 'Título 4',
        description: 'Descripción de la tarjeta 4...',
        imageUrl: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlycGxhbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 5,
        title: 'Título 5',
        description: 'Descripción de la tarjeta 5...',
        imageUrl: 'https://images.unsplash.com/photo-1524592714635-d77511a4834d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb3B1ZXJ0b3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 6,
        title: 'Título 6',
        description: 'Descripción de la tarjeta 6...',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682142204345-c47cd387001a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWVyb3B1ZXJ0b3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 7,
        title: 'Título 7',
        description: 'Descripción de la tarjeta 7...',
        imageUrl: 'https://images.unsplash.com/photo-1585484930098-0c978ecd8a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcmNyYWZ0fGVufDB8fDB8fHww',
    },
    {
        id: 8,
        title: 'Título 8',
        description: 'Descripción de la tarjeta 8...',
        imageUrl: 'https://images.unsplash.com/photo-1615317779547-2078d82c549a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2aW9ufGVufDB8fDB8fHww',
    },
    {
        id: 9,
        title: 'Título 9',
        description: 'Descripción de la tarjeta 9...',
        imageUrl: 'https://images.unsplash.com/photo-1517341392804-5f6daad2d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw2NDY5NjU2fHxlbnwwfHx8fHw%3D',
    },
    {
        id: 10,
        title: 'Título 10',
        description: 'Descripción de la tarjeta 10...',
        imageUrl: 'https://images.unsplash.com/photo-1551285635-d4c3b889e2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2NDY5NjU2fHxlbnwwfHx8fHw%3D',
    },
    {
        id: 11,
        title: 'Título 11',
        description: 'Descripción de la tarjeta 11...',
        imageUrl: 'https://images.unsplash.com/photo-1557501874-46389131378a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w2NDY5NjU2fHxlbnwwfHx8fHw%3D',
    },
    {
        id: 12,
        title: 'Título 12',
        description: 'Descripción de la tarjeta 12...',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1674343001705-40a1a7b80e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGF2aW9ufGVufDB8fDB8fHww',
    },
];

const ListAircraft = () => {
    
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ]

    return (
        <div className='mx-4'>
            <div className='flex-grow flex flex-col'>
                <div className='flex flex-col mb-8 mt-8  sm:flex-row sm:justify-between '>
                    <span className='text-white ml-4'>All Aircraft</span>
                    <div className='mt-4 sm:mt-0'>
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="py-3 px-4 mr-[1rem] block text-white text-sm shadow-sm bg-[#2C2C2C] rounded-full"
                        >
                            <option value="" disabled hidden>
                                Filter by company or owner
                            </option >
                            {options.map((option) => (
                                <option className='text-white' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cardData.map((card) => (
                        <CardRent key={card.id} title={card.title} content={card.description} imageUrl={card.imageUrl} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ListAircraft