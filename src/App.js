import { useState } from "react";
import "./App.css";

var sportDictionary = {
	"🏏": "Cricket",
	"⚽": "Football",
	"🎿": "Skiing",
	"🎾": "Tennis",
	"🏑": "Hockey",
	"🏸": "Badminton",
	"🥊": "Boxing",
	"⚾": "Baseball",
	"🎳": "Bowling",
	"🏐": "Volleyball",
	"": "The Sport Name will be displayed here",
};
var emojisWeKnow = Object.keys(sportDictionary);

export default function App() {
	var [sportName, setName] = useState("The Sport Name will be displayed here");
	function sportInputHandler(event) {
		var userInput = event.target.value;
		var meaning = sportDictionary[userInput];
		if (meaning === undefined) {
			meaning = "We don't have this in our database";
		}
		setName(meaning);
	}
	function handleClick(emoji) {
		setName(sportDictionary[emoji]);
	}
	return (
		<div className="App">
			<h1 className="App-header"> Sport Interpreter </h1>
			<h2>
				Input the Sport Emoji to know it's Name.
				<br /> Or Click below Emojis to know what they represent
			</h2>
			<div id="id1">
				<input id="input1" onChange={sportInputHandler} />
			</div>
			<div id="output">
				Sport Name: <br /> <span style={{ color: "green", fontSize: "larger" }}> {sportName}</span>{" "}
			</div>

			<h2>Emojis we know</h2>
			<ul>
				{emojisWeKnow.map((emoji) => {
					return (
						<span
							onClick={() => handleClick(emoji)}
							style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
						>
							{emoji}
						</span>
					);
				})}
			</ul>
		</div>
	);
}
