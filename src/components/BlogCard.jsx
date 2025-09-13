import avatar from "../assets/image-avatar.webp";
import ilustratioArticle from "../assets/illustration-article.svg";

export default function BlogCard() {
  return (
    
    <div className="w-md bg-white rounded-3xl flex flex-col items-start justify-center border-2 shadow-blog-Gray-950 shadow-blog-shadow-Gray-950">
        <div className="px-8 pt-8 w-full ">
          <img className="rounded-xl w-full" src={ilustratioArticle} alt="Ilustration article" />
        </div>
        <button className="m-8 mb-8 p-2 px-4 rounded-sm font-bold text-blog-Gray-950 bg-blog-Yellow">Learning</button>
        <p className="px-8 font-mono text-blog-Gray-950">
            Published 21 Dec 2023
        </p>
        <h1 className="p-8 font-bold text-xl text-blog-Gray-950">
          HTML & CSS foundations
        </h1>
        <p className="px-8 text-blog-Gray-500">
          These langueges are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="flex items-center gap-4 p-8 ">
          <img src={avatar} alt="Avatar image" />
          <p className="font-bold">
            Greeg Hooper
          </p>
        </div>

        
    </div>
  );
}
