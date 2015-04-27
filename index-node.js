// Once node.js gains a robust module integrating WebRTC that can
// be easily added to dependencies, we'll update this to expose it
var webrtc = require('wrtc');

var prefix = 'nodejs';
var version = process.version;

var PC = webrtc.mozRTCPeerConnection || webrtc.webkitRTCPeerConnection || webrtc.RTCPeerConnection;
var IceCandidate = webrtc.mozRTCIceCandidate || webrtc.RTCIceCandidate;
var SessionDescription = webrtc.mozRTCSessionDescription || webrtc.RTCSessionDescription;
var MediaStream = webrtc.webkitMediaStream || webrtc.MediaStream;
var screenSharing = false;
var AudioContext = webrtc.AudioContext || webrtc.webkitAudioContext;
var supportVp8 = true;
var getUserMedia;


// export support flags and constructors.prototype && PC
module.exports = {
    prefix: prefix,
    browserVersion: version,
    support: !!PC && supportVp8,
    // new support style
    supportRTCPeerConnection: !!PC,
    supportVp8: supportVp8,
    supportGetUserMedia: !!getUserMedia,
    supportDataChannel: !!PC,
    supportWebAudio: !!AudioContext,
    supportMediaStream: !!MediaStream,
    supportScreenSharing: !!screenSharing,
    // constructors
    AudioContext: AudioContext,
    PeerConnection: PC,
    SessionDescription: SessionDescription,
    IceCandidate: IceCandidate,
    MediaStream: MediaStream,
    getUserMedia: getUserMedia
};
