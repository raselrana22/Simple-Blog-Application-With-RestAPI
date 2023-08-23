import AboutPage from "@/app/components/about";
import AbutBlog from "@/app/components/aboutBlog";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full pr-2 md:w-1/2 bg-slate-200 shadow-lg mb-2 md:mb-0 md:mr-2 text-justify">
                <div className="p-2">
                    <AboutPage />
                </div>
            </div>
            <div className="w-full pr-2 md:w-1/2 bg-slate-200 shadow-lg text-justify">
                <div className="p-2">
                    <AbutBlog />
                </div>
            </div>
        </div>
    );
}

