import Head from "next/head";
import { Header } from "/src/components/Header.js";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  

      <main>
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
          <h1 className="text-3xl font-bold underline">
            Hello Tailwind CSS!
          </h1>
          <p className="m-0 text-gray-400">Tailwind CSSです</p>
          <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
        </div>
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
          <h1 className="text-3xl text-gray-500  underline">Wellcome Css</h1>
        </div>

      </main>

      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="p-6 border-l-4 border-red-500 rounded-r-xl bg-red-50">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div class="ml-3">
          <div class="text-sm text-red-600">
            <p>Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

