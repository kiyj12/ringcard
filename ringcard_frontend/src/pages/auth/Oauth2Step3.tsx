import axios from "axios";
import React, {  useState } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
// import { setCookie } from "./Cookie";

const Oauth2Step3=()=>{

  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  
  type ResponseList = {
		loginFirstTwitter: boolean;
    usernameTwitter: String;
	};
	const [response, setResponse] = useState<ResponseList>({
		loginFirstTwitter: false,
    usernameTwitter: "",
	});

  const { Client, auth } = require("twitter-api-sdk");

  const [accessToken, setAccessToken] = useState();
  const [userMe, setUserMe] = useState<any>([]);

  const CONSUMER_KEY=process.env.REACT_APP_CONSUMER_KEY;
  const CONSUMER_SECRET=process.env.REACT_APP_CONSUMER_SECRET;
  const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
	const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET;
	const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;
	const ACCESS_TOKEN_SECRET=process.env.REACT_APP_ACCESS_TOKEN_SECRET;
	const CALLBACK_URL=process.env.REACT_APP_CALLBACK_URL;
	const BEARER_TOKEN=process.env.REACT_APP_BEARER_TOKEN;

  
  // const TWITTER_STATE = "twitter-increaser-state";
  const TWITTER_STATE = "state";
  const TWITTER_CODE_CHALLENGE = "challenge";
  const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";
  const TWITTER_SCOPE = ["tweet.read", "users.read","tweet.write"].join(" ");
  // const TWITTER_SCOPE = ["tweet.read", "users.read", "offline.access"].join(" ");

  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  
  const authClient = new auth.OAuth2User({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    callback: "http://localhost:3000/login/oauth2/code/twitter",
    scopes: ["tweet.read", "users.read", "tweet.write"],
  });

  const client = new Client(authClient);

  const params = {
  expansions: "author_id",
  "user.fields": ["username", "created_at"],
  "tweet.fields": ["geo", "entities", "context_annotations"],
};

function BtnToTwitterLogin(){
	function handleClick(e: any){

    const createFormParams = (params:any) => {
        return Object.keys(params)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&')
    }

  if(code&&CLIENT_ID){
    const data = qs.stringify({
          code: code,
          grant_type: 'authorization_code',
          client_id: CLIENT_ID,
          redirect_uri: 'http://localhost:3000/login/oauth2/code/twitter',
          code_verifier: 'challenge',
        });
    
    axios({
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/oauth2/token',

    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    }).then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.access_token);
      setAccessToken(res.data.access_token);

      // setCookie('accessToken', res.data.access_token, {
      //   httpOnly: true,
      // });
      setCookie('accessToken', {accessToken: res.data.access_token}, {path: '/'});

      // const options = {
      //   httpOnly: true,
      //   // sameSite: 'none',
      //   // secure: true,
      //   // domain: 'localhost',
      //   // maxAge: config.jwt.expiresInSec * 1000,
      // };
      // res.cookie('accessToken', res.data.access_token, options);
      // alert("생성이 완료되었습니다.");
  })}}
		return (
			<button onClick={handleClick}>
        TwitterLogin
			</button>
		);
	}

  function BtnToCreateTweet(){
		function handleClick(e: any){
      const endpointURL = `https://api.twitter.com/2/tweets`;
      const data = {
        text: "Hello Worldsss!!!!!!!!"
      };

      axios({
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets',

        data: data,
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        }

      }).then((res) => {
        console.log(res);
        // alert("생성이 완료되었습니다.");
        });
		}
		return (
			<button onClick={handleClick}>
        CreateTweet
			</button>
		);
	}

  const BtnToUserMe =()=>{
		// function handleClick(e: any){

    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/me',

      // data: data,
      headers: {
        'Authorization': 'Bearer ' +accessToken,
      }
    }).then(async(res) => {
      console.log(res);
      console.log(res.data.data);
      setUserMe(res.data.data);
      await new Promise((r) => setTimeout(r, 100));
      await axios.post('/login/user/me', res.data.data)
      .then(async(res) => {
        console.log(res.data);
        console.log(res.data.usernameTwitter);
        // console.log(userMe);
        // const data = qs.stringify({
        //   code: code,
        //   grant_type: 'authorization_code',
        //   client_id: CLIENT_ID,
        //   redirect_uri: 'http://localhost:3000/login/oauth2/code/twitter',
        //   code_verifier: 'challenge',
        // });

        const data = {username : res.data.usernameTwitter, password : "twitterTemp"}
        await axios
          .post("/login", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            console.log("hello there replace to unanswered")
            window.location.replace("/home/unanswered");
          })
          .catch(function (error) {
            
            console.log(error.config);
          });
			})
			.catch(function (error) {
				console.log(error.config);
			});
      });
		// }
		// return (
		// 	<button onClick={handleClick}>
    //     UserMe
		// 	</button>
		// );
	};

  // const onSubmit = async (data: any) => {
	// 	await new Promise((r) => setTimeout(r, 100));

	// 	// alert(JSON.stringify(data));
	// 	console.log(data);

	// 	await axios.post('/login/user/me', data).then((res) => {
	// 			// setResponse(res.data);
	// 			// console.log(res.data);
	// 			// setSubmitted(true);
  //       console.log(res);
  //       // setResponse(res.data);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.config);
	// 		});

    // axios({
    //     method: 'post',
    //     url: 'https://localhost:8080/login/user/me',
    //     headers :{'Content-Type' : 'application/json',
    //               'Access-Control-Allow-Origin' : '*',
    //               'Access-Control-Allow-Headers' : '*',
    //               'Access-Control-Allow-Methods': 'GET, POST'
    //             },
    //     data: data,
    //   });
	

  const {
		register,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm();
  
  return (
    <div>
    <BtnToTwitterLogin/>
    <BtnToCreateTweet/>
    <form onSubmit={handleSubmit(BtnToUserMe)}>
      <button type="submit"> UserMe	</button>
    </form>

    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <div>
				<input
          value={userMe.id}
          // placeholder="이름을 입력해주세요"
          {...register("id", {
            required: "답변이 입력되지 않았습니다.",
          })}
        ></input>

        <input
          value={userMe.name}
          // placeholder="이름을 입력해주세요"
          {...register("name", {
            required: "답변이 입력되지 않았습니다.",
          })}
        ></input>

        <input
          value={userMe.username}
          // placeholder="이름을 입력해주세요"
          {...register("username", {
            required: "답변이 입력되지 않았습니다.",
          })}
        ></input>
        
        <button type="submit">
          <div>저장하기</div>
				</button>
			</div>
    </form> */}

    </div>
  );
}

export default Oauth2Step3;