import EduExpContent from "./eduexp/page";

export default function Home() {
  return (
    <div className="text-white">
      
      <p className="text-gray-400 mb-3 text-lg">
        Lets Work <span className="text-orange-500">Together !</span>
      </p>

      <h1 className="text-4xl font-bold leading-snug mb-6">
        Hi From <span className="text-orange-500">Woraprat</span>, <br />
        Interactive Designer & Fullstack <br />
        Web Developer
      </h1>

      <p className="text-gray-500 max-w-[500px] mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem enim voluptatum pariatur! Animi quia saepe enim nam reprehenderit facere eum?
      </p>

      <div className="flex gap-16">
        <div>
          <h2 className="text-3xl text-orange-500 font-bold">3+</h2>
          <p className="text-gray-500 text-sm">Years of Experience</p>
        </div>

        <div>
          <h2 className="text-3xl text-orange-500 font-bold">10+</h2>
          <p className="text-gray-500 text-sm">Projects Completed</p>
        </div>
      </div>

    </div>
  )
}