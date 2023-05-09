import Head from "next/head";
import { Header } from "/src/components/Header";
import { getDatabase } from "/src/lib/notion";
import { CalendarWeek } from "/src/components/CalendarWeek"

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
        <div className="relative items-center w-full  mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-6">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl px-5 py-12 
                font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  3 good things 
                </h1>
                <p className="text-left">３GoodThingsとは、毎日自分が経験した３つの良いことを挙げる習慣です。心理学的な研究により、この習慣がストレスや不安を減らし、幸福感を高めることが示されています。</p>
                <p className="text-left">３この習慣を始めるためには、毎日同じ時間帯に自分の好きな方法で３つの良いことを挙げます。例えば、美味しい食事をした、友達と話した、好きな本を読んだなど、小さなことでも良いので、自分にとってポジティブな出来事を思い出し、感謝することが大切です。</p>
                <p className="text-left">３GoodThingsを継続的に行うことで、ポジティブな思考が身につき、ストレスや不安に対する耐性が上がります。また、自分自身の良い面に気づくことができ、自信を持つことができるようになります。</p>
                <p className="text-left">毎日続けることが大切ですが、やりすぎないように注意しましょう。また、他人と比べることなく、自分のペースで取り入れていくことが大切です。</p>
                <p className="text-left">３GoodThingsを始めて、幸福感を高めてみませんか？</p>
                <CalendarWeek posts={posts_local} targetdate={targetdate} weeknumber={weeknumber}/>
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
