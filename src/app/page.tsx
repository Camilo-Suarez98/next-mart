import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center h-full p-8 pb-10 sm:p-4">
      <main className="flex flex-col items-center sm:items-start">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              src="/next-mart.png"
              alt="Next.js logo"
              width={100}
              height={100}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
