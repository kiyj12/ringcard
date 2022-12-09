import React from "react";
import { useNavigate } from "react-router-dom";
import { TwitterApi } from 'twitter-api-v2';

const Oauth= ()=>{

  const CONSUMER_KEY=process.env.REACT_APP_CONSUMER_KEY;
  const CONSUMER_SECRET=process.env.REACT_APP_CONSUMER_SECRET;
  const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
	const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET;
	const CALLBACK_URL=process.env.REACT_APP_CALLBACK_URL;
	const navigate = useNavigate();


  // 일단 oauth1.0a로 해보자.
  // const client = new TwitterApi({ appKey: CONSUMER_KEY, appSecret: CONSUMER_SECRET });

  // OAuth 1.0a (User context)
  const userClient = new TwitterApi({
    // appKey: 'consumerAppKey',
    appKey: 'S0FVySANFNnlISMw5D1vSE8P0',
    // appSecret: 'consumerAppSecret',
    appSecret: 'KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X',
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    // accessToken: 'accessOAuthToken',
    accessToken: '1516353113430851586-Qhjz3YpRRL1yFqSa5PYcyjf5gmJhU1',
    // accessSecret: 'accessOAuthSecret',
    accessSecret: 'accdPvdajDmTYtMybqbj9mOMnTIvbE9SnOuJY8h9uRQjRxlnessOAuthSecret',
  });
  async function Oauth1a(){
    if(CONSUMER_KEY && CONSUMER_SECRET){
      const clientA = new TwitterApi({ appKey: CONSUMER_KEY, appSecret: CONSUMER_SECRET });

      const authLink = await clientA.generateAuthLink(CALLBACK_URL);

    // By default, oauth/authenticate are used for auth links, you can change with linkMode
    // property in second parameter to 'authorize' to use oauth/authorize
    // const authLink = await client.generateAuthLink(CALLBACK_URL, { linkMode: 'authorize' });

    // Use URL generated
    const a = authLink.url;
    const oauth_token = authLink.oauth_token;
    const oauth_token_secret = authLink.oauth_token_secret;
    // console.log(a);

    // Obtain the persistent tokens
  // Create a client from temporary tokens
    const client = new TwitterApi({
    appKey: CONSUMER_KEY,
    appSecret: CONSUMER_SECRET,
    accessToken: oauth_token, // oauth token from previous step (link generation)
    accessSecret: oauth_token_secret, // oauth token secret from previous step (link generation)
  });

// Give the PIN to client.login()
// const { client: loggedClient, accessToken, accessSecret } = await client.login(GIVEN_USER_PIN);
// loggedClient is an authenticated client in behalf of some user
// Store accessToken & accessSecret somewhere
    }
  }

  function ButtonToUserInfoEdit() {
		function handleClick(e: any) {
      Oauth1a();
    }
		return (
			<button className="user-btn userInfo-btn" onClick={handleClick}>
				<div className="user-btn-text">프로필 변경하기</div>
			</button>
		);
	}



//   // OAuth2 (app-only or user context)
//   // Create a client with an already known bearer token
//   const appOnlyClient = new TwitterApi('bearerToken');
//   // OR - you can also create a app-only client from your consumer keys -
//   const appOnlyClientFromConsumer = await userClient.appLogin();

//   // Oauth2
// 	// if로 undefined 처리)
// 	if (CLIENT_ID && CLIENT_SECRET && CALLBACK_URL){
// 		const client = new TwitterApi({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET });

// 		// Don't forget to specify 'offline.access' in scope list if you want to refresh your token later
// 		const { url, codeVerifier, state } = client.generateOAuth2AuthLink(CALLBACK_URL, { scope: ['tweet.read', 'users.read', 'offline.access'] });

// 		// Redirect your user to {url}, store {state} and {codeVerifier} into a DB/Redis/memory after user redirection
    
//     // const a = url;
//     // console.log(a);
// 		// client.generateAuthLink();
// 		navigate(url);
//     // console.log(url);
// 		// console.log(url);

//   app.get('/callback', (req:any, res:any) => {
//   // Extract state and code from query string
//   const { state, code } = req.query;
//   // Get the saved codeVerifier from session
//   const { codeVerifier, state: sessionState } = req.session;

//   if (!codeVerifier || !state || !sessionState || !code) {
//     return res.status(400).send('You denied the app or your session expired!');
//   }
//   if (state !== sessionState) {
//     return res.status(400).send('Stored tokens didnt match!');
//   }

//   // Obtain access token
//   const client = new TwitterApi({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET });

//   client.loginWithOAuth2({ code, codeVerifier, redirectUri: CALLBACK_URL })
//     .then(async ({ client: loggedClient, accessToken, refreshToken, expiresIn }) => {
//       // {loggedClient} is an authenticated client in behalf of some user
//       // Store {accessToken} somewhere, it will be valid until {expiresIn} is hit.
//       // If you want to refresh your token later, store {refreshToken} (it is present if 'offline.access' has been given as scope)

//       // Example request
//       const { data: userObject } = await loggedClient.v2.me();
//     })
//     .catch(() => res.status(403).send('Invalid verifier or access tokens!'));
// });
	// }

  return(<ButtonToUserInfoEdit />);

}

export default Oauth;