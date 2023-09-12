import Footer from "../components/Footer";
import Intorduction from "../components/Introduction";
import ProjectList from "../components/ProjectList";
import ToolsList from "../components/ToolsList";

export default function LandingPage() {
  return (
    <>
      <div className="w-full h-full bg-gray-900 pb-14 sm:px-20 md:px-8 lg:px-32 dark:bg-slate-300">
        <Intorduction />
        <ProjectList />
        <ToolsList />
        <Footer />
        <div className="w-full text-white dark:text-gray-900 text-xs lg:text-sm flex justify-center text-center pt-14 px-10">
          Designed & coded by Mochammad Sinatriyya Suryanegara @ 2023
        </div>
      </div>
    </>
  );
}
