import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const RecentTweets = () => {
    return (
      <div>
        <h2>these are my tweets</h2>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'germani_blake',
          }}
          options={{
            height: '400',
          }}
        />
      </div>
    );
  };
  
export default RecentTweets;
