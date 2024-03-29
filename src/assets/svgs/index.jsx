import Like from './like.svg'
import DisLike from './dislike.svg'
export const Microphone = ({ widht, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={widht ? widht : "48"}
    height={height ? height : "48"}
    fill="currentColor"
    className="bi bi-mic"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
      fill="white"
    ></path>
    <path
      d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
      fill="white"
    ></path>
  </svg>
);

export const MicrophoneOff = ({ width, height }) => (
 <i className="fa fa-microphone-slash fa-3x"></i>
);

export {Like,DisLike}