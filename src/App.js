import { React, useState } from "react";
import VideoCom from "./Socialmedia1.js";
import ShortsCom from "./Socialmedia2.js";
import { ImTwitter } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

function App() {
  const [n, setN] = useState(0); // Set initial value of n to 1

  const handleRadioChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setN(selectedValue);
  };
  const data = [
    {
      url: "https://images.pexels.com/photos/14131911/pexels-photo-14131911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "DanceCrew",
      description: "Video by Lara Jameson from Pexels",
      song: "Bounce - Ruger",
      likes: 430,
      messages: 290,
      shares: 50,
    },
    {
      url: "https://images.pexels.com/photos/8859963/pexels-photo-8859963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "Happyfeet",
      description: "#happyfeetlegwork videos on TikTok",
      song: "Kolo sound - Nathan",
      likes: 250,
      messages: 120,
      shares: 40,
    },
    {
      url: "https://images.pexels.com/photos/15937293/pexels-photo-15937293/free-photo-of-flowers-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      channel: "thiskpee",
      description: "The real big thug boys💛🦋 The real big thug boys💛🦋 ",
      song: "original sound - KALEI KING 🦋",
      likes: 340,
      messages: 230,
      shares: 40,
    },
  ];

  return (
    <div className="App">
      <div>
        <div>
          <p>Select Button to Continue:</p>
          <input
            type="radio"
            id="radio1"
            value={1}
            checked={n === 1}
            onChange={handleRadioChange}
          />
          <label htmlFor="radio1">
            <div className="flex items-center">
              <ImTwitter className="text-sky-500" />
              Twitter
            </div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio2"
            value={2}
            checked={n === 2}
            onChange={handleRadioChange}
          />
          <label htmlFor="radio2">
            <div className="flex items-center">
              <BsFacebook className="text-blue-500 mr-2" />
              Facebook
            </div>
          </label>
        </div>

        {n === 1 && <VideoCom data={data} />}
        {n === 2 && <ShortsCom data={data} />}
      </div>
    </div>
  );
}

export default App;
