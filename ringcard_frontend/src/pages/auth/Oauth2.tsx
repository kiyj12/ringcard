import axios from "axios";
import React, { useEffect, useRef } from "react";
import html2canvas from 'html2canvas';

const Oauth2=()=>{
  const { Client, auth } = require("twitter-api-sdk");
  
  const CONSUMER_KEY=process.env.REACT_APP_CONSUMER_KEY;
  const CONSUMER_SECRET=process.env.REACT_APP_CONSUMER_SECRET;
  const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
	const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET;
	const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;
	const ACCESS_TOKEN_SECRET=process.env.REACT_APP_ACCESS_TOKEN_SECRET;
	const CALLBACK_URL=process.env.REACT_APP_CALLBACK_URL;
	const BEARER_TOKEN=process.env.REACT_APP_BEARER_TOKEN;

  const authClient = new auth.OAuth2User({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    callback: "http://localhost:3000/login/oauth2/code/twitter",
    scopes: ["tweet.read", "users.read", "tweet.write"],
  });

  const client = new Client(authClient);
  const STATE = "my-state";

  //Get authorization
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge: "challenge",
  });








  // const TWITTER_STATE = "twitter-increaser-state";
  const TWITTER_STATE = "state";
  const TWITTER_CODE_CHALLENGE = "challenge";
  const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";
  const TWITTER_SCOPE = ["tweet.read", "users.read"].join(" ");
  // const TWITTER_SCOPE = ["tweet.read", "users.read", "offline.access"].join(" ");

  
  useEffect(() => {
  console.log(authUrl);
  
  //   const getURLWithQueryParams = (
  //   baseUrl: string,
  //   params: Record<string, any>
  // ) => {
  //   const query = Object.entries(params)
  //     .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  //     .join("&")

  //   return `${baseUrl}?${query}`
  // }
  // const getTwitterOAuthUrl = (redirectUri: string) =>
  // getURLWithQueryParams(TWITTER_AUTH_URL, {
  //   response_type: "code",
  //   client_id: CLIENT_ID,
  //   redirect_uri: redirectUri,
  //   scope: TWITTER_SCOPE,
  //   state: TWITTER_STATE,
  //   code_challenge: TWITTER_CODE_CHALLENGE,
  //   code_challenge_method: "plain",
  // })
  //   console.log(getTwitterOAuthUrl("https://localhost:8000/login/oauth2/code/twitter"));
  //   window.location.href=getTwitterOAuthUrl("https://localhost:8000/login/oauth2/code/twitter");
    
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

  // const authHandler = (err:any, data:any) => {
  //   console.log(err, data);
  // };


  function BtnToTwitterLogin(){
		function handleClick(e: any){
	const getURLWithQueryParams = (
    baseUrl: string,
    params: Record<string, any>
  ) => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&")

    return `${baseUrl}?${query}`
  }
  const getTwitterOAuthUrl = (redirectUri: string) =>
  getURLWithQueryParams(TWITTER_AUTH_URL, {
    response_type: "code",
    client_id: CLIENT_ID,
    redirect_uri: redirectUri,
    scope: TWITTER_SCOPE,
    state: TWITTER_STATE,
    code_challenge: TWITTER_CODE_CHALLENGE,
    code_challenge_method: "plain",
  })

  // window.location.href=getTwitterOAuthUrl("http://localhost:3000/login/oauth2/code/twitter");
  window.location.href=authUrl;
    
		}
		return (
			<button onClick={handleClick}>
			</button>
		);
	}

  
  const printRef = useRef<HTMLInputElement>(null);

  const handleDownloadImage = async () => {
    const element:any = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    // <TestOauth/>
    // <TwitterLogin
    //       authCallback={authHandler}
    //       consumerKey={"S0FVySANFNnlISMw5D1vSE8P0"}
    //       consumerSecret={"KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X"}
    //       callbackUrl={"https://alexandrtovmach.github.io/react-twitter-login/"}
    //       buttonTheme={"dark"}
    //     	/>
    <div>
    <BtnToTwitterLogin/>

    	<div>
				<button type="button" onClick={handleDownloadImage}>
					Download as Image
				</button>

				<div>I will not be in the image.</div>
				<div ref={printRef}>I will be in the image.</div>
    	</div>
    </div>
  );
}

export default Oauth2;