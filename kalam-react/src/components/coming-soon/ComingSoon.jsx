import { useEffect, useState } from "react";

function ComingSoon() {
  const [text, setText] = useState(null);

  useEffect(() => {
    getText();
  }, []);

  async function getText() {
    //TODO: Why is container host name not getting resolved here ?
    // -> http://kalam-kalam-blogs-1:8998
    const response = await fetch("http://localhost:8998/");
    const json = await response.json();

    setText(json.message);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1604093882750-3ed498f3178b')]"></div>
      <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">
        Coming Soon
      </h1>
      {text && <p className="text-white text-xl md:text-2xl">{text}</p>}
    </div>
  );
}

export default ComingSoon;
