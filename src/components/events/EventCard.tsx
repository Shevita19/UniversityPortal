import Image from 'next/image'
import { FaCalendar, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    venue: string
    image: string
    description: string
    isUpcoming: boolean
    highlights?: string[]
  }
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date)
  const isPast = eventDate < new Date()

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        {/* Event Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          isPast ? 'bg-gray-600 text-white' : 'bg-blue-600 text-white'
        }`}>
          {isPast ? 'Past Event' : 'Upcoming'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {event.description}
        </p>
        
        {/* Event Details */}
        <div className="space-y-2 mb-4 border-t border-gray-100 pt-4">
          <div className="flex items-center text-gray-500">
            <FaCalendar className="w-4 h-4 mr-2 text-blue-600" />
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center text-gray-500">
            <FaClock className="w-4 h-4 mr-2 text-blue-600" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-500">
            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-600" />
            {event.venue}
          </div>
        </div>

        {/* Event Highlights */}
        {event.highlights && (
          <div className="border-t border-gray-100 pt-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <FaInfoCircle className="w-4 h-4 mr-2 text-blue-600" />
              Highlights
            </h4>
            <ul className="space-y-1">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventCard 