import logo from "./logo.png";

/*   Please Provide client Id of Premium Spotify Developer Account and 
     Login with Credentials of given Premium Spotify Account   */

const client_id: string = '3943bfeacfaa4c589182eac2dcd16330';
const redirect_uri: string = 'http://localhost:3000';
const AUTH_URL: string = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
    return (
        <div className="flex flex-col items-center bg-black h-screen">
            <img className="pb-[200px] pt-[100px]" src={logo} alt=""></img><br></br>
            <a className="p-[20px] bg-[#1ed760] text-white rounded-full font-bold hover:text-[#1ed760] hover:bg-white" href={AUTH_URL}>Login With Spotiy</a>
        </div>
    )
}

export const ParamsFromUrl = () => {
    return window.location.hash.substring(1)
        .split("&")
        .reduce(function (initial: { [key: string]: any; }, item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};