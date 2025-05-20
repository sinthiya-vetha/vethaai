
function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) return;

    var chatbox = document.getElementById("chatbox");
    var userMsg = "<p><strong>You:</strong> " + userInput + "</p>";
    chatbox.innerHTML += userMsg;

    var reply = getReply(userInput);
    var botMsg = "<p><strong>VethaAI:</strong> " + reply + "</p>";
    chatbox.innerHTML += botMsg;

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getReply(input) {
    input = input.toLowerCase();

    if (input.includes("karma")) {
        return "According to Maharishi, karma is the result of one's thoughts, words, and deeds. It shapes future experiences.";
    } else if (input.includes("god") || input.includes("universe")) {
        return "Maharishi describes God as a unified force — the primordial source of energy and consciousness in the universe.";
    } else if (input.includes("family")) {
        return "Family life should be lived with compassion, duty, and understanding to evolve spiritually.";
    } else if (input.includes("kaya kalpa")) {
        return "Kaya Kalpa Yoga rejuvenates the body and mind. It includes specific exercises and breathing techniques.";
    } else if (input.includes("tamil")) {
        return "ஆம், இந்த சாட்பாட் தமிழையும் ஆதரிக்கிறது. உங்கள் கேள்விகளை தமிழில் கேட்கலாம்.";
    } else {
        return "Maharishi teaches self-realization through introspection, service, and universal love. Please ask more specifically.";
    }
}
