import { cn } from "@/lib/utils";

export default function FeedbackSection({ className }) {
  return (
    <section className={cn("py-6 md:py-8", className)}>
      <h2 className="text-lg font-semibold">Feedback</h2>
      <p className="mt-2 text-gray-600">
        We value your feedback! Please let us know your thoughts about our
        products and services.
      </p>
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
