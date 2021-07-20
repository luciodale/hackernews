import React, { FC } from 'react';
import { capitalize, extractHostname } from '../utils';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export interface ItemProps {
  id: number;
  kids: Array<number>;
  title: string;
  url: string;
  by: string;
  score: number;
  time: number;
}

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

const parsePosted = (date: number) => {
  return timeAgo.format(new Date(date * 1000));
};

export const Item: FC<ItemProps> = (props) => {
  return (
    <a className="cursor-pointer block item mb-2">
      {console.log(props)}
      <div className="rounded-md shadow-sm p-4 bg-white">
        <div className="flex items-baseline">
          <h2 className="">{capitalize(props.title)}</h2>
          <p className="text-gray-300 text-sm ml-auto w-28 overflow-ellipsis overflow-hidden">
            {extractHostname(props.url)}
          </p>
        </div>
        <div className="flex items-baseline text-sm mt-1 text-gray-400">
          <span>{props.score || 0} points</span>
          <span>&nbsp;by&nbsp;</span>
          <span>{props.by}</span>
          <span>&nbsp;</span>
          <span>{parsePosted(props.time)}</span>
          <span>&nbsp;|&nbsp;</span>
          <span>{props.kids?.length || 0} comments</span>
        </div>
      </div>
    </a>
  );
};
