// Store data
const jsonScenarioData = {
  "modes": [
    {
      "modeName": "Start a Conversation",
      "levels": [
        {
          "levelName": "Start-Conversation-Close-Friend",
          "badge": "../images/different-scenarios/specific-scenario/start-a-convo/easy/end-phase/level1-badge.png",
          "badge_title": "Start a Conversation Level 1",
          "environment-music": "../audio/start-convo-close-friend-audio.wav",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Casual hello",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/top-image.png",
              "text-to-speech":"Someone says Hi to you. What would you say back? Option 1, Hi, it's nice to see you. Option 2, Hello, how have you been?",
              "options": [
                {
                  "optionText": "Hi, it’s nice to see you",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/correct-option1.png",
                    "correct_text": 'Close Friend: "You too!"'
                  }
                },
                {
                  "optionText": "Hello, how have you been?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/correct-option2.png",
                    "correct_text": 'Close Friend: "Good, thanks!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/top-image.png",
              "text-to-speech":"How would you like to ask your friend about their day? Option 1, How's your day been? Option 2, Nod and look away.",
              "options": [
                {
                  "optionText": "How’s your day been",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/correct-option1.png",
                    "correct_text": 'Close Friend: "Pretty good, you?"'
                  }
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option2-consequence.png",
                    "consequence_text": "Friend felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing your news",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/top-image.png",
              "text-to-speech":"You want to share your news. How would you do it? Option 1, I started a new hobby. Option 2, I just finished painting. What about you?",
              "options": [
                {
                  "optionText": "I started a new hobby",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/correct-option1.png",
                    "correct_text": 'Close Friend: "That’s cool!'
                  }
                },
                {
                  "optionText": "I just finished painting. What about you",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/correct-option2.png",
                    "correct_text": 'Close Friend: "I just finished baking'
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Listening carefully",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/top-image.png",
              "text-to-speech":"Your friend just shared with you how great his weekend went. How would you respond? Option 1, What did you do this weekend? Option 2, Look away and don't listen.",
              "options": [
                {
                  "optionText": "What did you do this weekend",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/correct-option1.png",
                    "correct_text": 'Close Friend: "I watched a movie”'
                  }
                },
                {
                  "optionText": "Look away and don't listen",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option2-consequence.png",
                    "consequence_text": "Friend stopped talking"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/top-image.png",
              "text-to-speech":"It's the end of the conversation. How would you end it? Option 1, It was great talking to you! Option 2, Look at your phone",
              "options": [
                {
                  "optionText": "It was great talking to you!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/correct-option1.png",
                    "correct_text": 'Close Friend: “See you later!”'
                  }
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option2-consequence.png",
                    "consequence_text": "Friend walked away"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Start-Conversation-MINDS-Staff",
          "badge": "../images/different-scenarios/specific-scenario/start-a-convo/medium/end-phase/level2-badge.png",
          "badge_title": "Start a Conversation Level 2",
          "environment-music": "../audio/start-convo-minds-staff.mp3",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Polite greeting",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/top-image.png",
              "text-to-speech":"How would you begin a conversation? Option 1, Hi, How are you doing. Option 2, Hello, How are you today",
              "options": [
                {
                  "optionText": "Hi, How are you doing",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/correct-option1.png",
                    "correct_text": 'MINDS Staff: "Pretty good"'
                  }
                },
                {
                  "optionText": "Hello, How are you today?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/correct-option2.png",
                    "correct_text": 'MINDS Staff: "I’m doing well, thank you!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/top-image.png",
              "text-to-speech":"Now that you have said hello, how would you ask someone their day was? Option 1, How's your day been. Option 2, Nod and look away.",
              "options": [
                {
                  "optionText": "How’s your day been",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/correct-option1.png",
                    "correct_text": 'MINDS Staff: "It’s been busy”'
                  }
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing Your Activity",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/top-image.png",
              "text-to-speech":"How would you share the activites you did? Option 1, I baked cookies! Option 2, I did some painting",
              "options": [
                {
                  "optionText": "I baked cookies!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/correct-option1.png",
                    "correct_text": 'MINDS Staff: "Sounds delicious!”'
                  }
                },
                {
                  "optionText": "I did some painting",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/correct-option2.png",
                    "correct_text": 'MINDS Staff: "I’d love to see it!”'
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking About the Plan",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/top-image.png",
              "text-to-speech":"You want to know the activites planned for today. How would you ask? Option 1, What activities are planned for me today, Option 2, Look away and say nothing",
              "options": [
                {
                  "optionText": "What activities are planned for me today",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/correct-option1.png",
                    "correct_text":  "MINDS Staff: \"We'll pack toothbrushes first\""
                  }
                },
                {
                  "optionText": "Look away and say nothing",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Offering Help",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/top-image.png",
              "text-to-speech":"You see someone that needs your help, what would you say? Option 1, Can I help with anything? Option 2, Be quiet and don't reply",
              "options": [
                {
                  "optionText": "Can I help with anything?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/correct-option1.png",
                    "correct_text": 'MINDS Staff: "You can help sort these items.”'
                  }
                },
                {
                  "optionText": "Be quiet and don’t reply",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt you weren't listening"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/top-image.png",
              "text-to-speech":"It's the end of the conversation. How will you end it? Option 1, Thanks for chatting! See you later! Option 2, Look at your phone.",
              "options": [
                {
                  "optionText": "Thanks for chatting! See you later!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/correct-option1.png",
                    "correct_text": 'MINDS Staff: "See you later! Have a great day!”'
                  }
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option2-consequence.png",
                    "consequence_text": "MINDS staff walked away"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Start-Conversation-New-Person",
          "badge": "../images/different-scenarios/specific-scenario/start-a-convo/hard/end-phase/level3-badge.png",
          "badge_title": "Start a Conversation Level 3",
          "environment-music": "../audio/start-convo-new-person.wav",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Introducing Yourself",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/top-image.png",
              "text-to-speech":"You want to tell them about yourself. What would you say? Option 1, I'm, [your name], Whats your name? Option 2, Nice to meet you! I'm,[your name].",
              "options": [
                {
                  "optionText": "I’m [Your Name]. What’s your name?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/correct-option1.png",
                    "correct_text": "New Person: \"I'm Bob. Nice to meet you!\""
                  }
                },
                {
                  "optionText": "Nice to meet you! I’m [Your Name]",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/correct-option2.png",
                    "correct_text": 'New Person: "Nice to meet you too!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/top-image.png",
              "text-to-speech":"How would you ask about their day? Option 1, How's your day been. Option 2, Nod and look away.",
              "options": [
                {
                  "optionText": "How’s your day been?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/correct-option1.png",
                    "correct_text": 'New Person: "Pretty good, you?"'
                  }
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option2-consequence.png",
                    "consequence_text": "New person felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing Something About Yourself",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/top-image.png",
              "text-to-speech":"You want to share something about yourself. What would you say? Option 1, I love doing art! Option 2, I enjoy baking!",
              "options": [
                {
                  "optionText": "I love doing art!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/correct-option1.png",
                    "correct_text": 'New Person: "Art is so relaxing!"'
                  }
                },
                {
                  "optionText": "I enjoy baking!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/correct-option2.png",
                    "correct_text": 'New Person: "Baking is so much fun!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking About Interests",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/top-image.png",
              "text-to-speech":"You want to ask about his interests. What would you say? Option 1, What do you like doing? Option 2, Be quiet and don't reply.",
              "options": [
                {
                  "optionText": "What do you like doing?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/correct-option1.png",
                    "correct_text": 'New Person: "I like playing board games"'
                  }
                },
                {
                  "optionText": "Be quiet and don’t reply",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option2-consequence.png",
                    "consequence_text": "New person felt you weren't listening"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Asking About Weekend Activities",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/top-image.png",
              "text-to-speech":"You want to ask about what he did over the weekends. What would you say? Option 1, What did you do last weekend? Option 2, Look away and nothing",
              "options": [
                {
                  "optionText": "What did you do last weekend?",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/correct-option1.png",
                    "correct_text": 'New Person: "I watched a movie”'
                  }
                },
                {
                  "optionText": "Look away and say nothingy",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option2-consequence.png",
                    "consequence_text": "New person felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/top-image.png",
              "text-to-speech":"It's the end of the conversation. How will you end it? Option 1, Thanks for chatting! See you later! Option 2, Look at your phone.",
              "options": [
                {
                  "optionText": "Thanks for chatting! See you later!",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/correct-option1.png",
                    "correct_text": 'New Person: “See you later!”'
                  }
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option2-consequence.png",
                    "consequence_text": "New person walked away"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "modeName": "Handle Feedback",
      "levels": [
        {
          "levelName": "Handle-Feedback-Close-Friend",
          "badge": "../images/different-scenarios/specific-scenario/handle-feedback/easy/end-phase/level1-badge.png",
          "badge_title": "Handle Feedback Level 1",
          "environment-music": "../audio/handle-feedback-close-friend.m4a",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Receiving feedback positively",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/top-image.png",
              "text-to-speech":"Your friend told you to change something. What would you say? Option 1, Thank you for sharing. Option 2, I value your feedback",
              "options": [
                {
                  "optionText": "Thank you for sharing",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/correct-option1.png",
                    "correct_text": 'Close Friend: "No problem, happy to help!”'
                  }
                },
                {
                  "optionText": "I value your feedback",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/option2.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/correct-option2.webp",
                    "correct_text": "Close Friend: \"I’m glad to hear that.\""
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Clarifying the feedback",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/top-image.png",
              "text-to-speech":"You don't understand what he said. What would you do now? Option 1, Can you explain more? Option 2, Nod and look away.",
              "options": [
                {
                  "optionText": "Can you explain more?",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/correct-option1.png",
                    "correct_text": 'Close Friend: "Sure! Let me clarify”'
                  }
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option2-consequence.png",
                    "consequence_text": "Friend felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Acknowledging the Feedback",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/top-image.png",
              "text-to-speech":"You understood the feedback, and wants to tell him that you understand. How would you do it? Option 1, I see what you mean. Option 2, That makes sense.",
              "options": [
                {
                  "optionText": "I see what you mean",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/correct-option1.png",
                    "correct_text": 'Close Friend: "Glad we agree”'
                  }
                },
                {
                  "optionText": "That makes sense",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/correct-option2.png",
                    "correct_text": 'Close Friend: “Glad it’s clear now!”'
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Responding to the Feedback",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/top-image.png",
              "text-to-speech":"You want to know how to change. How would you ask? Option 1, How can I improve? Option 2, React angrily.",
              "options": [
                {
                  "optionText": "How can I improve?",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/correct-option1.png",
                    "correct_text": 'Close Friend: “Here’s what you can do.”'
                  }
                },
                {
                  "optionText": "React angrily",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option2-consequence.png",
                    "consequence_text": "Friend got angry too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Responding positively",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/top-image.png",
              "text-to-speech":"He told you how to change. How would you respond? Option 1, I will work on it. Option 2, Walk away.",
              "options": [
                {
                  "optionText": "I will work on it",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/correct-option1.png",
                    "correct_text": 'Close Friend: “Awesome! Can’t wait to see.”'
                  }
                },
                {
                  "optionText": "Walk away",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option2-consequence.png",
                    "consequence_text": "Left a bad impression."
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Handle-Feedback-MINDS-Staff",
          "badge": "../images/different-scenarios/specific-scenario/handle-feedback/medium/end-phase/level2-badge.png",
          "badge_title": "Handle Feedback Level 2",
          "environment-music": "../audio/handle-feedback-minds-staff.wav",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Getting feedback on art",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/top-image.png",
              "text-to-speech":"MINDS Staff told you how to make your artwork better. How will you respond? Option 1, Thanks for your tips!. Option 2, I like your advice on my painting.",
              "options": [
                {
                  "optionText": "Thanks for your tips!",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/correct-option1.png",
                    "correct_text": "MINDS Staff: \"You're welcome!\""
                  }
                },
                {
                  "optionText": "I like your advice on my painting",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/correct-option2.webp",
                    "correct_text": 'MINDS Staff: "Happy to hear that!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Noticing Mistakes",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/top-image.png",
              "text-to-speech":"You noticed the mistakes he told you about. How will you respond? Option 1, I see where I went wrong. Option 2, Keep painting without listening.",
              "options": [
                {
                  "optionText": "I see where I went wrong",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/correct-option1.png",
                    "correct_text": '"MINDS Staff: \"That’s good!\""'
                  }
                },
                {
                  "optionText": "Keep painting without listening",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Asking for art advice",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/top-image.png",
              "text-to-speech":"You want to ask him to how to improve you art. How will you do it? Option 1, How can I improve this part? Option 2, Ignore their advice",
              "options": [
                {
                  "optionText": "How can I improve this part?",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/correct-option1.png",
                    "correct_text": 'MINDS Staff: "Try a different color"'
                  }
                },
                {
                  "optionText": "Ignore their advice",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt unimportant"
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Clarifying art changes",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/top-image.png",
              "text-to-speech":"He told you to change the color of it. How will you respond? Option 1, Which color should I change. Option 2, React angrily",
              "options": [
                {
                  "optionText": "Which color should I change",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/correct-option1.webp",
                    "correct_text": 'MINDS Staff: "Use a darker color here."'
                  }
                },
                {
                  "optionText": "React angrily",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option2-consequence.png",
                    "consequence_text": "MINDS Staff got angry too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Fixing your artwork",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/top-image.png",
              "text-to-speech":"You understood his feedback. What will you do now? Option 1, I'll adjust my colors now. Option 2, Walk away without changing",
              "options": [
                {
                  "optionText": "I’ll adjust my colors now",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/correct-option1.png",
                    "correct_text": 'MINDS Staff: "Excited to see it!"'
                  }
                },
                {
                  "optionText": "Walk away without changing",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option2-consequence.png",
                    "consequence_text": "That was disrespectful"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Thanking for art advice",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/top-image.png",
              "text-to-speech":"He ask if his help was good. How will you respond? Option 1, Thanks for your help. Option 2, Just nod and leave.",
              "options": [
                {
                  "optionText": "Thanks for your help",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/correct-option1.png",
                    "correct_text": "MINDS Staff: \"You're welcome! Happy to assist.\""
                  }
                },
                {
                  "optionText": "Just nod and leave",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option2-consequence.webp",
                    "consequence_text": "MINDS staff felt unappreciated"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Handle-Feedback-Workplace",
          "badge": "../images/different-scenarios/specific-scenario/handle-feedback/hard/end-phase/level3-badge.png",
          "badge_title": "Handle Feedback Level 3",
          "environment-music": "../audio/handle-feedback-workplace.flac",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Receiving feedback positively",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/top-image.png",
              "text-to-speech":"Your supervisor told that your work is up to the mark. How will you respond? Option 1, Thanks for telling me. Option 2, I appreciate the feedback. ",
              "options": [
                {
                  "optionText": "Thanks for telling me",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/correct-option1.png",
                    "correct_text": 'Supervisor: "Glad to help!"'
                  }
                },
                {
                  "optionText": "I appreciate the feedback",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/option2.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/correct-option2.webp",
                    "correct_text": 'Supervisor: "No problem at all!"'
                  }
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Clarifying what needs to be improved",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/top-image.png",
              "text-to-speech":"You want to know more about the mistakes in your work. How will you do it? Option 1, Can you explain more?. Option 2, Nod and look away",
              "options": [
                {
                  "optionText": "Can you explain more?",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/correct-option1.png",
                    "correct_text": 'Supervisor: "Sure! Let me clarify”'
                  }
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option2-consequence.png",
                    "consequence_text": "Supervisor felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Explaining your view",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/top-image.png",
              "text-to-speech":"You want to tell your supervisor about your struggles. What would you say? Option 1, I find this part hard because... Option 2, Im struggling with this task because...",
              "options": [
                {
                  "optionText": "I find this part hard because...",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/correct-option1.png",
                    "correct_text": '"Supervisor: \"I see, let’s work through it.\""'
                  }
                },
                {
                  "optionText": "I’m struggling with this task because",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/option2.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/correct-option2.png",
                    "correct_text": '"Supervisor: \"Let’s address it.\""'
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking how to improve",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/top-image.png",
              "text-to-speech":"Your supervisor told you to perform better. How will you respond? Option 1, How can I work better? Option 2, React angrily",
              "options": [
                {
                  "optionText": "How can I work better?",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option1.webp",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/correct-option1.png",
                    "correct_text": 'Supervisor: "Break down your tasks”'
                  }
                },
                {
                  "optionText": "React angrily",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option2-consequence.png",
                    "consequence_text": "Supervisor feels frustrated too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Making changes to improve",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/top-image.png",
              "text-to-speech":"You understand your supervisor feedback. What will you do now? Option 1, I'll improve on it progressively. Option 2, Don't improve anything.",
              "options": [
                {
                  "optionText": "I’ll improve on it progressively",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/correct-option1.png",
                    "correct_text": 'Supervisor: "Yep, one step at a time”'
                  }
                },
                {
                  "optionText": "Don’t improve anything",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option2-consequence.png",
                    "consequence_text": "Supervisor feels disrespected"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Expressing thanks for the feedback",
              "phaseImage": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/top-image.png",
              "text-to-speech":"Your supervisor is leaving now, what will you say? Option 1, Thanks for your help. Option 2, Just walk away",
              "options": [
                {
                  "optionText": "Thanks for your help",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option1.png",
                  "correct-continuation": {
                    "correct_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/correct-option1.png",
                    "correct_text": "Supervisor: \"You're welcome! Happy to help.\""
                  }
                },
                {
                  "optionText": "Just walk away",
                  "image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option2-consequence.webp",
                    "consequence_text": "Supervisor felt unappreciated"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.scenario-option');
  const badgeList = JSON.parse(localStorage.getItem('badgeList')) || [];

  // Function to check if a level is unlocked based on badgeList
  function isLevelUnlocked(levelName) {
      if (levelName === 'Start-Conversation-Close-Friend' || levelName === 'Handle-Feedback-Close-Friend') {
          return true; // Level 1 is always unlocked
      }
      const previousLevelName = getPreviousLevelName(levelName);
      return badgeList.some(badge => badge[1] === previousLevelName);
  }

  function getPreviousLevelName(levelName) {
      const levelMapping = {
          'Start-Conversation-MINDS-Staff': 'Start a Conversation Level 1',
          'Start-Conversation-New-Person': 'Start a Conversation Level 2',
          'Handle-Feedback-MINDS-Staff': 'Handle Feedback Level 1',
          'Handle-Feedback-Workplace': 'Handle Feedback Level 2'
      };
      return levelMapping[levelName];
  }

  // Unlock levels based on badgeList
  options.forEach(option => {
      const levelName = option.getAttribute('data-level');
      if (isLevelUnlocked(levelName)) {
          unlockLevel(option);
      } else {
          lockLevel(option);
      }
  });

  options.forEach(option => {
      option.addEventListener('click', (event) => {
          event.preventDefault();
          const levelName = option.getAttribute('data-level');

          console.log('Clicked levelName:', levelName);

          // Find the level data in the JSON structure
          let levelData = null;

          jsonScenarioData.modes.forEach(mode => {
              mode.levels.forEach(level => {
                  if (level.levelName === levelName) {
                      levelData = level;
                  }
              });
          });

          // Check if the level data was found
          if (levelData) {
              console.log('Selected level data:', levelData);
              // Store the data for the selected level in session storage
              localStorage.setItem('selectedLevelData', JSON.stringify(levelData));
              // Redirect to the new page
              window.location.href = '../specific-scenario/specific-scenario.html';
          } else {
              console.error('Level not found in the data');
          }
      });
  });

  function unlockLevel(option) {
      option.classList.remove('locked');
      const overlay = option.querySelector('.overlay');
      if (overlay) {
          overlay.style.display = 'none';
      }
  }

  function lockLevel(option) {
      option.classList.add('locked');
      const overlay = option.querySelector('.overlay');
      if (overlay) {
          overlay.style.display = 'flex';
      }
  }
});
