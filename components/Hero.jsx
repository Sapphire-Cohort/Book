import Image from "next/image"
import Button from "./Button"


const Hero = () => {
    return (
        <main className="flex justify-between items-center p-8 bg-gray-100 min-h-screen">
            <div>
                <h1 className="text-3xl font-bold ">Welcome to Our Bookstore</h1>
                <p>Discover your next great read!</p>
                <div className="flex gap-4 mt-4">
                    <Button label="Explore Books" className="bg-blue-500 text-white hover:bg-blue-600" />
                    <Button label="Learn More" className="border border-blue-500 text-blue-500 hover:bg-blue-100" />
                </div>

            </div>
            <div>
                <Image src="https://www.google.com/googlebooks/about/images/hero_books_2019.png" alt="Books" width="400" height="400" />
                {/* <Image src="/reading.png" alt="Books" width={400} height={400} /> */}
            </div>
        </main>
    )
}
export default Hero