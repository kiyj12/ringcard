import axios from "axios";
import React, { useEffect, useState } from "react";
import TwitterLogin from "react-twitter-login";
import { Client } from "twitter-api-sdk";
import { TwitterApi } from 'twitter-api-v2';
import { createHmac } from "crypto";
const Oauth2=()=>{


  const CONSUMER_KEY=process.env.REACT_APP_CONSUMER_KEY;
  const CONSUMER_SECRET=process.env.REACT_APP_CONSUMER_SECRET;
  const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
	const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET;
	const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;
	const ACCESS_TOKEN_SECRET=process.env.REACT_APP_ACCESS_TOKEN_SECRET;
	const CALLBACK_URL=process.env.REACT_APP_CALLBACK_URL;
	const BEARER_TOKEN=process.env.REACT_APP_BEARER_TOKEN;

  useEffect(() => {
    const oauthTest = async () => {
  if(CONSUMER_KEY&&CONSUMER_SECRET&&ACCESS_TOKEN&&ACCESS_TOKEN_SECRET){
    // OAuth 1.0a (User context)
  const client = new TwitterApi({
    appKey: CONSUMER_KEY,
    appSecret: CONSUMER_SECRET,
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    accessToken: ACCESS_TOKEN,
    accessSecret: ACCESS_TOKEN_SECRET,
  });
  // const hello= client.v2;
  // console.log(hello);
  // const { data: createdTweet } = await client.v2.tweet('twitter-api-v2 is awesome!', {
  // poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] },
  // });
  
  // console.log('Tweet', createdTweet.id, ':', createdTweet.text);

  const createdTweet = await client.v1.tweet('twitter-api-v2 is awesome!', {
  lat: 1.23,
  long: -13.392,
  });
  console.log('Tweet', createdTweet.id_str, ':', createdTweet.full_text);

  }
   };
		oauthTest();
	}, []);


  

  // const authHandler = (err:any, data:any) => {
  //   console.log(err, data);
  // };

  // const [user, setUser] = useState<any>([]);
  
  // useEffect(() => {
	// 	axios
	// 		.get("/oauth2")
	// 		.then((res) => {
	// 			setUser(res.data);
	// 			console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.config);
	// 			console.log(err.response.data);
	// 		});
	// }, []);


  // const client = new TwitterApi({ appKey: "S0FVySANFNnlISMw5D1vSE8P0", appSecret: "KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X" });

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

  // const CONSUMER_KEY=process.env.REACT_APP_CONSUMER_KEY;
  // const CONSUMER_SECRET=process.env.REACT_APP_CONSUMER_SECRET;
  // function TestOauth(){
  //   if(CONSUMER_KEY&&CONSUMER_SECRET){return(<TwitterLogin
  //     authCallback={authHandler}
  //     consumerKey={CONSUMER_KEY}
  //     consumerSecret={CONSUMER_SECRET}
  //   />)}
  //   else{
  //     return(<div></div>)
  //   }
  // }
  // return (<p>1<GettingATweet/></p>)

  const authHandler = (err:any, data:any) => {
    console.log(err, data);
  };

  return (
    // <TestOauth/>
    <TwitterLogin
          authCallback={authHandler}
          consumerKey={"S0FVySANFNnlISMw5D1vSE8P0"}
          consumerSecret={"KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X"}
          callbackUrl={"https://alexandrtovmach.github.io/react-twitter-login/"}
          buttonTheme={"dark"}
        	/>
  );
}

export default Oauth2;