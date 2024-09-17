const videoData = {
    "non-verbal-communication": [
        {
            "title": "What is Non-Verbal Communication?",
            "youtubeChannelName": "ABC Life Literacy Canada",
            "youtubeChannelImage": "../images/youtube-icons/non-verbal-communication/ABC-Life-Literacy-Canada.jpg",
            "date": "2 years ago",
            "link": "https://www.youtube.com/watch?v=HxDqYEl20hI",
            "highlights": [
                "😊 Communication includes non-verbal cues.",
                "😶‍🌫️ Facial expressions show feelings.",
                "✋ Gestures clarify messages.",
                "💬 Body language shows openness."
            ]
        },
        {
            "title": "Verbal communication vs non-verbal communication",
            "youtubeChannelName": "Educationleaves Skills",
            "youtubeChannelImage": "../images/youtube-icons/non-verbal-communication/Educationleaves-Skills.jpg",
            "date": "1 year ago",
            "link": "https://www.youtube.com/watch?v=4_5dayHDdBk",
            "highlights": [
                "🗣️ Verbal: Spoken words to communicate.",
                "📞 Verbal Examples: Talks, speeches, interviews.",
                "🤝 Non-Verbal: Body language and gestures.",
                "👍 Non-Verbal Examples: Nods, smiles, gestures."
            ]
        },
        {
            "title": "Non-verbal Communication",
            "youtubeChannelName": "Skilling by Wadhwani Foundation",
            "youtubeChannelImage": "../images/youtube-icons/non-verbal-communication/Skilling-by-Wadhwani-Foundation.jpg",
            "date": "4 years ago",
            "link": "https://www.youtube.com/watch?v=fJB3mZiEbnU",
            "highlights": [
                "😊 Facial expressions show feelings.",
                "👋 Gestures enhance understanding.",
                "👁️ Eye contact builds connection.",
                "🚶‍♂️ Body language reveals attitude."
            ]
        }
    ],
    "tone-of-voice": [
        {
            "title": "DTA: Tone of Voice",
            "youtubeChannelName": "Julianna Parks",
            "youtubeChannelImage": "../images/youtube-icons/tone-of-voice/Julianna-Parks.jpg",
            "date": "9 years ago",
            "link": "https://www.youtube.com/watch?v=B6OSel5naA0",
            "highlights": [
                "🎤 Tone changes word meaning.",
                "😨 Loud tones cause anxiety.",
                "😢 Quiet tones: May lead to feelings of unhappiness or sadness.",
                "📢 Tone should match message."
            ]
        },
        {
            "title": "Importance of TONE in Communication",
            "youtubeChannelName": "Clara Teach",
            "youtubeChannelImage": "../images/youtube-icons/tone-of-voice/Clara-Teach.jpg",
            "date": "3 years ago",
            "link": "https://www.youtube.com/embed/2eZ8TU5-Vjk?si=A8x1pdqUs3YRqkv0",
            "highlights": [
                "🗣️ Tone conveys emotion and intention.",
                "📝 It’s not just what you say, but how you say it.",
                "🎭 Different tones change word meanings.",
                "🤔 Wrong tone can confuse."
            ]
        }
    ],
    "body-facial-expression": [
        {
            "title": "Body Language",
            "youtubeChannelName": "LearnFree",
            "youtubeChannelImage": "../images/youtube-icons/body-facial-expression/LearnFree.jpg",
            "date": "5 years ago",
            "link": "https://www.youtube.com/watch?v=1sfM-xx7tHI",
            "highlights": [
                "🚪 Notice open/closed posture.",
                "✋ Observe hand movements.",
                "🧘‍♂️ Look for relaxed/tense body."
            ]
        },
        {
            "title": "7 Subtle Ways to Read Someone’s Body Language",
            "youtubeChannelName": "TopThink",
            "youtubeChannelImage": "../images/youtube-icons/body-facial-expression/TopThink.jpg",
            "date": "2 years ago",
            "link": "https://www.youtube.com/watch?v=3MccSlsq8c8",
            "highlights": [
                "👤 Individual cues reveal personality.",
                "🔄 Changes indicate emotional shifts.",
                "❤️ Interest shown through body language.",
                "🌍 Universal signs express emotions."
            ]
        },
        {
            "title": "Reading Facial Expressions Introduction",
            "youtubeChannelName": "Everyday Speech",
            "youtubeChannelImage": "../images/youtube-icons/body-facial-expression/Everyday-Speech.jpg",
            "date": "1 year ago",
            "link": "https://www.youtube.com/watch?v=DNtgqKAiYzk",
            "highlights": [
                "👁️ Focus on eyes, eyebrows, mouth.",
                "😠 Notice frustration signs; offer support.",
                "😢 Identify when friends are sad.",
                "😊 Learn how positive emotions look."
            ]
        }
    ],
    "active-listening": [
        {
            "title": "Active Listening",
            "youtubeChannelName": "LearnFree",
            "youtubeChannelImage": "../images/youtube-icons/active-listening/LearnFree.jpg",
            "date": "5 years ago",
            "link": "https://www.youtube.com/watch?v=rzsVh8YwZEQ",
            "highlights": [
                "🗣️ Focus on the speaker’s topic.",
                "🚫 Don’t interrupt them.",
                "⏳ Wait until they finish.",
                "👍 Show interest with body language."
            ]
        },
        {
            "title": "Active listening is a skill! Here's how it's done. | What's Your Story? | Heartlines",
            "youtubeChannelName": "HeartlinesZA",
            "youtubeChannelImage": "../images/youtube-icons/active-listening/HeartlinesZA.jpg",
            "date": "4 years ago",
            "link": "https://www.youtube.com/watch?v=0nmJW_zExk0",
            "highlights": [
                "🛑 Stop what you're doing.",
                "🌬️ Breathe and calm down.",
                "👂 Listen carefully to the speaker.",
                "💭 Respond thoughtfully to what you hear."
            ]
        }
    ]
  };
  

document.addEventListener('DOMContentLoaded', () => {
    const videosJSON = localStorage.getItem('selectedVideos');
    if (videosJSON) {
        const videos = JSON.parse(videosJSON);
        const container = document.querySelector('.selection-content'); 
        if (container) {
            container.innerHTML = '';

            const title = document.createElement('h2');
            title.className = 'video-selection-title';
            title.innerHTML = 'Choose a Video <br> to Watch';
            container.appendChild(title)
            // Create and append video cards
            videos.forEach(video => {
                const videoCard = generateVideoCard(video);
                container.appendChild(videoCard);
            });
        } else {
            console.error('Container element not found.');
        }
    } else {
        console.error('No video data found in localStorage.');
    }
    // Add event listeners to video cards
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', handleVideoCardClick);
    });
});


function generateVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.dataset.link = video.link; 

    const videoThumbnail = document.createElement('div');
    videoThumbnail.className = 'video-thumbnail';

    const videoIframe = document.createElement('iframe');
    videoIframe.src = video.link.replace('watch?v=', 'embed/');
    videoIframe.title = video.title;
    videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoIframe.allowFullscreen = true;

    videoThumbnail.appendChild(videoIframe);

    const videoInfo = document.createElement('div');
    videoInfo.className = 'video-info';

    const channelIcon = document.createElement('img');
    channelIcon.src = video.youtubeChannelImage;
    channelIcon.alt = `${video.youtubeChannelName} Channel Icon`;
    channelIcon.className = 'video-channel-icon';

    const videoDetails = document.createElement('div');
    videoDetails.className = 'video-details';

    const videoTitle = document.createElement('div');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoMeta = document.createElement('div');
    videoMeta.className = 'video-meta';
    videoMeta.textContent = `${video.youtubeChannelName} • ${video.date}`;

    videoDetails.appendChild(videoTitle);
    videoDetails.appendChild(videoMeta);

    videoInfo.appendChild(channelIcon);
    videoInfo.appendChild(videoDetails);

    videoCard.appendChild(videoThumbnail);
    videoCard.appendChild(videoInfo);

    return videoCard;
}
// Function to handle video card click
function handleVideoCardClick(event) {
    // Get the clicked video card
    const videoCard = event.currentTarget;

    // Get the video link from data attribute
    const videoLink = videoCard.dataset.link;

    // Find the video data based on the link
    let selectedVideo = null;
    for (const category in videoData) {
        selectedVideo = videoData[category].find(video => video.link === videoLink);
        if (selectedVideo) break;
    }

    if (selectedVideo) {
        // Update video details container
        const videoDetailsContainer = document.querySelector('.video-details-container');
        const videoSelection = document.querySelector('.selection-content');

        // Update iframe source and attributes
        const selectedVideoIframe = videoDetailsContainer.querySelector('.selected-video iframe');
        selectedVideoIframe.src = selectedVideo.link.replace('watch?v=', 'embed/');
        selectedVideoIframe.title = selectedVideo.title
        selectedVideoIframe.frameBorder = '0';
        selectedVideoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        selectedVideoIframe.allowFullscreen = true;

        // Update video description details
        const videoDescriptionIcon = videoDetailsContainer.querySelector('.video-description-icon');
        videoDescriptionIcon.src = selectedVideo.youtubeChannelImage;

        const selectedVideoTitle = videoDetailsContainer.querySelector('.selected-video-title');
        selectedVideoTitle.textContent = selectedVideo.title;

        const selectedVideoMeta = videoDetailsContainer.querySelector('.selected-video-video-meta');
        selectedVideoMeta.textContent = `${selectedVideo.youtubeChannelName} • ${selectedVideo.date}`;

        // Update video highlights
        const videoHighlightsContainer = videoDetailsContainer.querySelector('.video-highlights ul');
        videoHighlightsContainer.innerHTML = ''; // Clear existing highlights

        selectedVideo.highlights.forEach(highlight => {
            const listItem = document.createElement('li');
            listItem.textContent = highlight;
            videoHighlightsContainer.appendChild(listItem);
        });

        // Show video details and hide video selection
        videoSelection.style.display = 'none';
        videoDetailsContainer.style.display = 'block';
    }
}


