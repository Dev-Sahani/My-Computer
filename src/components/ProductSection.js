import Image from "next/image";
import { products } from "@/constants/products";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function ProductSection({ className }) {
  return (
    <div className={cn("bg-white relative border z-10", className)}>
      <h1 className="w-full text-center py-6 md:py-8 font-bold text-5xl text-gray-900">
        Our Products
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {
          products?.map((prod, indx) => <Card key={indx} product={prod} />)
        }
      </div>
    </div>
  );
}

const Card = ({ product }) => {
  return (
    <div className="radial-gradient-bg">
    <div className="w-full p-2 md:p-4 lg:p-8 bg-gray/10 border border-white/20 backdrop-blur-md shadow-lg rounded-lg">
      <Image src={product.image} alt={product.name} width={80} height={100} />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold leading-4">{product.name}</h1>
        <p className="text-little text-gray-500">{product.description}</p>
      </div>

      <BorderBeam
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-300 via-blue-500 to-transparent"
      />
    </div>
    </div>
  );
};
