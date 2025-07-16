import Image from 'next/image';

export default function FlippingProductCard({ product }) {
    return (
        <div className="group h-96 w-full [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl object-center"
                    />
                    <div className="absolute inset-0 rounded-xl bg-black/60 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold">{product.title}</h3>
                        <p className="text-yellow-400 text-sm mt-1">View Specifications</p>
                    </div>
                </div>

                <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-900 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col justify-between h-full p-6">
                        <div>
                            <h4 className="text-yellow-500 text-2xl font-bold mb-3">Specifications</h4>
                            <div className="space-y-2 text-sm">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-gray-700 pb-1">
                                        <span className="font-semibold text-gray-200">{key}</span>
                                        <span className="text-gray-400">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="#" className="mt-4 text-center bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                            Request Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}