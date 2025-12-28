import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Business Owner',
    rating: 5,
    comment: 'Excellent service! They helped us set up our entire office network. Very professional and knowledgeable.',
    avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'IT Manager',
    rating: 5,
    comment: 'Best computer store in town! Great prices for wholesale orders and exceptional customer support.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Freelancer',
    rating: 4,
    comment: 'Fast repair service and reasonable prices. They recovered all my data after a hard drive failure!',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=3b82f6&color=fff'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Student',
    rating: 5,
    comment: 'Helped me find the perfect laptop within my budget. Staff is friendly and very helpful.',
    avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=3b82f6&color=fff'
  },
  {
    id: 5,
    name: 'Robert Wilson',
    role: 'Entrepreneur',
    rating: 5,
    comment: 'Outstanding wholesale prices and quality products. Been buying from them for 3 years now!',
    avatar: 'https://ui-avatars.com/api/?name=Robert+Wilson&background=3b82f6&color=fff'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Office Manager',
    rating: 4,
    comment: 'Great experience! They provided excellent IT consultation for our growing business.',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=3b82f6&color=fff'
  }
]


export default function FeedbackSection({ className }) {
  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Feedback</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our satisfied customers have to say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-blue-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={feedback.avatar} 
                    alt={feedback.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{feedback.name}</h4>
                    <p className="text-sm text-gray-600">{feedback.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < feedback.rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{feedback.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// function CarouselDemo() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
