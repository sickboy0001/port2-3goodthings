import Head from "next/head";
import { Header } from "/src/components/Header.js";
import { getDatabase } from "/src/lib/notion";
import {WeekCalender} from "/src/components/WeekCalender"



export const database3GTId = process.env.NOTION_DATABASE_3GT_ID;




export default function Goodthings({ posts }) {

  const posts_local = posts.filter(post =>
     post.properties.Thing.title.length>0
   );
  const weeknumber = 3;
  const targetdate = '2023-05-07';
  
  // console.log(posts)
  return (
    <div>
      <Head>
        <title>3goodthings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  

      <main>
<section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
            3 good things 
          </h1>
          <WeekCalender posts={posts_local} targetdate={targetdate} weeknumber={weeknumber}/>

        </div>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>

  );
}


export const getStaticProps = async () => {
  const database = await getDatabase(database3GTId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
