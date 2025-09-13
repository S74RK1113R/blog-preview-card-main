import avatar from "../assets/image-avatar.webp";
import ilustratioArticle from "../assets/illustration-article.svg";

export default function BlogCard() {
  return (
    
    <div className="w-[375px] bg-white rounded-3xl flex flex-col items-start justify-center border-2 shadow-blog-Gray-950 shadow-blog-shadow-Gray-950">
        <div className="px-4 pt-4 w-full ">
          <img className="rounded-xl w-full" src={ilustratioArticle} alt="Ilustration article" />
        </div>
        <button className="m-4 mb-4 p-2 px-4 rounded-sm font-bold text-blog-Gray-950 bg-blog-Yellow">Learning</button>
        <p className="px-4 font-mono text-blog-Gray-950">
            Published 21 Dec 2023
        </p>
        <h1 className="p-4 font-bold text-xl text-blog-Gray-950">
          HTML & CSS foundations
        </h1>
        <p className="px-4 text-blog-Gray-500">
          These langueges are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="flex items-center gap-4 p-4 ">
          <img src={avatar} alt="Avatar image" />
          <p className="font-bold">
            Greeg Hooper
          </p>
        </div>

        
    </div>
  );
}
