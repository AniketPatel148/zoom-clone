// let userVideo;

// navigator.mediaDevices
// 	.getUserMedia({
// 		video: true,
// 		audio: true,
// 	})
// 	.then((response) => {
// 		userVideo = response;
// 	});

// const addStrem = () => {};

const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);

socket.on("user-connected", (userID) => {
	console.log("User connected -->" + userID);
});
