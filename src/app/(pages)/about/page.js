import AboutPage from "@/app/components/about";
import AbutBlog from "@/app/components/aboutBlog";

export default function About() {
    return (
        <div className="flex p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-1/2 bg-slate-200 shadow-lg mr-2 text-justify">
                <div className="mr-2">
                    <AboutPage />
                </div>
            </div>
            <div className="w-1/2 bg-slate-200 shadow-lg ml-1 text-justify">
                <div>
                    <AbutBlog />
                </div>
            </div>
        </div>
    );
}
