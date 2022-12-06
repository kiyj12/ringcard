import axios from "axios";
import React, { useEffect, useState } from "react";
import { Client } from "twitter-api-sdk";


const Oauth2=()=>{

  const [user, setUser] = useState<any>([]);
  
  useEffect(() => {
		axios
			.get("/oauth2")
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.config);
				console.log(err.response.data);
			});
	}, []);

  // const BEARER_TOKEN=process.env.REACT_APP_BEARER_TOKEN;

  // Consuming a Stream
  // if(BEARER_TOKEN){
  //   const client = new Client(BEARER_TOKEN);

  //   async function OauthTwitter() {
  //     const stream = client.tweets.sampleStream({
  //       "tweet.fields": ["author_id"],
  //     });
  //     for await (const tweet of stream) {
  //       console.log(tweet.data?.author_id);
  //     }
      
  //     return(null);
  //   }
  //   return(<div><OauthTwitter/></div>)
  // }


  // Getting a Tweet
  // if(BEARER_TOKEN){
  //   const client = new Client(BEARER_TOKEN);

  //   async function GettingATweet() {
  //     const tweet = await client.tweets.findTweetById("20");
  //     // console.log(tweet.data.text);
  //     console.log(tweet);
  //   }
      
  //     return(null);
  // }


  // oauth2-bearer.ts 
  // if(BEARER_TOKEN){
  //   async function Oauth2Bearer() {
  //     const client = new Client(BEARER_TOKEN);
  //     const { data } = await client.users.findUserByUsername("TwitterDev");
  //     if (!data) throw new Error("Couldn't find user");
  //     let count = 0;
  //     for await (const followers of client.users.usersIdFollowers(data.id)) {
  //       console.log(followers);
  //       if (++count === 3) {
  //         break;
  //       }
  //     }
  //     return (<div></div>);
  //   }
  // }

  // if(BEARER_TOKEN){
  //     const client = new Client(BEARER_TOKEN);
  //     const { data } = await client.users.findUserByUsername("TwitterDev");
  //     if (!data) throw new Error("Couldn't find user");
  //     let count = 0;
  //     for await (const followers of client.users.usersIdFollowers(data.id)) {
  //       console.log(followers);
  //       if (++count === 3) {
  //         break;
  //       }
  //     }
  //     return (<div></div>);
  // }

  // return (<p>1<GettingATweet/></p>)
  return (<div>1ewrwerewrwerwer</div>)
  
  
}

export default Oauth2;