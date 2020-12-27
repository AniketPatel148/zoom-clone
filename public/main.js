// const addStrem = () => {};

const socket = io("/");
const videoGrid = document.getElementById("videoGrid");

const peer = new Peer(undefined, {
	host: "/",
	port: "3001",
});

const selfVideo = document.createElement("video");
selfVideo.muted = true;

navigator.mediaDevices
	.getUserMedia({
		video: true,
		audio: true,
	})
	.then((response) => {
		addVideoStream(selfVideo, response);
	});

peer.on("open", (id) => {
	socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userID) => {
	console.log("User connected -->" + userID);
});

function addVideoStream(video, stream) {
	video.srcObject = stream;
	video.addEventListener("loadedmetadata", () => {
		video.play();
	});
	videoGrid.append(video);
}
