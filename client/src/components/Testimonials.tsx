import { Star, StarHalf } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The grid transformation tool has completely changed how I approach my portrait paintings. I can now easily convert reference photos into perfectly proportioned grids.",
      author: "Rebecca Johnson",
      role: "Portrait Artist",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      text: "As an art teacher, the line art conversion tool has been invaluable for creating examples for my students. It helps them understand the fundamentals of drawing.",
      author: "Michael Torres",
      role: "Art Educator",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      text: "I use the sketch transformation feature to quickly convert my travel photos into drawing references. The quality is exceptional and saves me hours of preparation time.",
      author: "Aisha Patel",
      role: "Illustrator",
      rating: 4.5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Artists Say About Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
