import Head from 'next/head';
import { FC } from 'react';
import { Item } from '../components/Item';
import { ItemProps } from '../components/Item/Item';

function fetchItem(id: number, stories) {
  return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
    .then((response) => response.json())
    .then((result) => stories.push(result));
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = await res.json();
  const topStoryIds = storyIds.slice(0, 100);

  let storyPromises = [];
  let stories = [];

  topStoryIds.map((id: number) => {
    storyPromises.push(fetchItem(id, stories));
  });

  // dispatch all storyId requests asynchronously, but wait for the responses before returning
  await Promise.all(storyPromises);

  return {
    props: {
      stories
    }
  };
}

interface HomeProps {
  stories: Array<object>
}

const Home: FC<HomeProps> = ({ stories }) => {
  return (
    <>
      <Head>
        <title>HN</title>
      </Head>
      <main className="">
        {stories.map((story: ItemProps) => {
          return <Item {...story}></Item>;
        })}
      </main>
    </>
  );
};

export default Home;
