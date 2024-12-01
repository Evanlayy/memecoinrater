document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    // Initial bot message
    addMessage("Welcome to Meme Coin Rater! Enter a coin or idea to get started.", 'bot');

    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateRating() {
        return Math.floor(Math.random() * 5) + 1;
    }

    function generateTicker(userInput) {
        // List of crypto-related prefixes and suffixes
        const prefixes = ['$', 'CYBER', 'META', 'AI', 'WEB3'];
        const suffixes = ['INU', 'AI', 'DAO', 'VERSE', 'MOON'];
        
        // Get a random prefix and suffix
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        
        // Create a ticker based on user input
        const baseWord = userInput.split(' ')[0].substring(0, 4).toUpperCase();
        return `${randomPrefix}${baseWord}${randomSuffix}`;
    }

    function getWebsiteFeatureSuggestion() {
        const features = [
            "Add a real-time price chart integration using TradingView widgets",
            "Implement a staking dashboard to show potential yields",
            "Create an NFT marketplace section for token holders",
            "Add a DAO governance portal for community voting",
            "Include a token burn tracker with visual statistics",
            "Implement a play-to-earn game feature",
            "Add social media integration with live community feed",
            "Create an automated market maker (AMM) interface",
            "Include a token bridge for cross-chain transfers",
            "Add a merchandise store with token payment options"
        ];
        return features[Math.floor(Math.random() * features.length)];
    }

    function getImprovementSuggestion(rating, userInput) {
        const suggestions = {
            1: {
                concept: "Consider completely revamping the concept. Focus on utility and community building.",
                tokenomics: "Implement a fair launch with anti-whale mechanics and locked liquidity.",
                marketing: "Build a strong community before launch through Discord and Twitter."
            },
            2: {
                concept: "Needs significant improvement in tokenomics and marketing strategy.",
                tokenomics: "Consider adding automatic LP generation and reflection rewards.",
                marketing: "Develop a clear marketing roadmap with influencer partnerships."
            },
            3: {
                concept: "Decent concept, but needs better execution and clearer roadmap.",
                tokenomics: "Add deflationary mechanics through burn mechanisms.",
                marketing: "Increase social media presence and community engagement."
            },
            4: {
                concept: "Strong potential! Consider adding more utility features.",
                tokenomics: "Implement stake-to-earn mechanics with NFT rewards.",
                marketing: "Expand to multiple platforms and consider CEX listings."
            },
            5: {
                concept: "Excellent! Consider expanding to multiple chains for wider reach.",
                tokenomics: "Add cross-chain bridging and multi-token ecosystem.",
                marketing: "Partner with other successful projects in the space."
            }
        };

        const betterTicker = generateTicker(userInput);
        const websiteFeature = getWebsiteFeatureSuggestion();
        
        return {
            concept: suggestions[rating].concept,
            tokenomics: suggestions[rating].tokenomics,
            marketing: suggestions[rating].marketing,
            ticker: betterTicker,
            website: websiteFeature
        };
    }

    function getBasicResponse(rating) {
        const responses = {
            1: "This needs a lot of work...",
            2: "Below average, but has potential.",
            3: "Not bad, room for improvement.",
            4: "Pretty solid concept!",
            5: "Absolutely brilliant!"
        };
        return responses[rating];
    }

    function handleUserInput() {
        const userText = userInput.value.trim();
        if (userText === '') return;

        // Add user message
        addMessage(userText, 'user');

        // Clear input
        userInput.value = '';

        // Generate rating and response
        const rating = generateRating();
        const basicResponse = getBasicResponse(rating);
        const improvements = getImprovementSuggestion(rating, userText);

        // Add bot responses with delay for effect
        setTimeout(() => {
            addMessage(`Rating: ${rating}/5\n${basicResponse}`, 'bot');
            setTimeout(() => {
                addMessage(`💡 Concept: ${improvements.concept}`, 'bot');
                setTimeout(() => {
                    addMessage(`💰 Tokenomics: ${improvements.tokenomics}`, 'bot');
                    setTimeout(() => {
                        addMessage(`📢 Marketing: ${improvements.marketing}`, 'bot');
                        setTimeout(() => {
                            addMessage(`🏷️ Suggested Ticker: ${improvements.ticker}`, 'bot');
                            setTimeout(() => {
                                addMessage(`🌐 Website Feature: ${improvements.website}`, 'bot');
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Add this new function for scanning animation
    async function initializeScanningEffect() {
        const coinCards = document.querySelectorAll('.coin-card');

        for (let card of coinCards) {
            // Create scanner line
            const scannerLine = document.createElement('div');
            scannerLine.className = 'scanner-line';
            card.appendChild(scannerLine);

            // Wait for previous animations to complete
            await new Promise(resolve => setTimeout(resolve, 500));

            // Start scanning animation
            scannerLine.classList.add('scanning');

            // Wait for scan to complete
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Add completion effect
            card.classList.add('scan-complete');

            // Remove effects after animation
            setTimeout(() => {
                scannerLine.remove();
                card.classList.remove('scan-complete');
            }, 1000);
        }
    }

    // Start scanning effect after a short delay
    setTimeout(initializeScanningEffect, 1000);
});
