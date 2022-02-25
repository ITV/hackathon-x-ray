export const getEventTypeTitle = eventType => {
	switch(eventType) {
		case "trivia":
			return "💡 Trivia";
		case "actor":
			return "🎭 Actor"
		case "music":
			return "🎵 Music";
		case "product":
			return "🛍️ Product"
		default:
			break;
	}
}