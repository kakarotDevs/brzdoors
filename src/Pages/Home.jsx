import React from 'react';

function Home() {
  return (
    <div className="flex flex-col  items-start pt-10">
      <main className="flex-1 p-6 md:p-12 max-w-[800px] mx-auto">
    <h1 className="text-4xl">Page Title</h1>
    <p className="text-lg leading-relaxed mt-4">
      This is your content area. Keep it spacious and readable.
    </p>
  </main>
    </div>
  );
}

export default Home;