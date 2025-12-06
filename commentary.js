// FIFA World Cup 2026 Simulator - Live Commentary System

const COMMENTARY = {
    // Match Start
    kickoff: [
        "⚽ The referee blows the whistle! We're underway!",
        "🎉 And we're off! The crowd roars as play begins!",
        "⏱️ Kick-off! 90 minutes of World Cup action ahead!",
        "🏟️ The atmosphere is electric as the match begins!"
    ],
    
    // Goals
    goal: [
        "⚽ GOOOOOAL! {scorer} finds the back of the net for {team}!",
        "🎯 WHAT A STRIKE! {scorer} scores for {team}!",
        "💥 GOAL! {scorer} sends the fans into raptures! {team} score!",
        "⚽ IT'S IN! {scorer} with a brilliant finish for {team}!",
        "🔥 INCREDIBLE! {scorer} scores! {team} take the lead!"
    ],
    
    // Close match
    closeMatch: [
        "😰 It's so tight! Either team could win this!",
        "🔥 The tension is unbearable! What a contest!",
        "⚡ Edge of your seat stuff! This could go either way!",
        "💪 Both teams giving everything! Pure World Cup drama!"
    ],
    
    // Yellow cards
    yellowCard: [
        "🟨 Yellow card! {player} goes into the book for {team}",
        "🟨 The referee reaches for his pocket! {player} is cautioned",
        "🟨 {player} picks up a booking - needs to be careful now!"
    ],
    
    // Red cards
    redCard: [
        "🟥 RED CARD! {player} is sent off! {team} down to 10 men!",
        "🟥 SENT OFF! {player} sees red! Drama at the World Cup!",
        "🟥 Marching orders for {player}! This changes everything!"
    ],
    
    // Injuries
    injury: [
        "🏥 Oh no! {player} is down injured! The physios are on",
        "🏥 Concern for {team} as {player} goes down holding his leg",
        "🏥 {player} looks in trouble here... that could be serious"
    ],
    
    // Half time
    halfTime: [
        "⏰ The referee blows for half-time. What a first 45!",
        "🍊 Half-time whistle! Time for the teams to regroup",
        "⏱️ That's the break! {score} at the interval"
    ],
    
    // Final whistle
    fullTime: [
        "📢 FULL TIME! {winner} have done it! Final score: {score}",
        "🏁 It's all over! {winner} triumph {score}!",
        "⏱️ The final whistle blows! {winner} celebrate a {score} victory!"
    ],
    
    // Draw
    draw: [
        "🤝 FULL TIME! The spoils are shared! {score}",
        "⚖️ Honours even! A hard-fought {score} draw!",
        "🤝 Neither side could find a winner - {score} it ends"
    ],
    
    // Knockout elimination
    elimination: [
        "💔 {loser} are going home. Heartbreak at the World Cup.",
        "😢 {loser}'s World Cup dream is over. {winner} advance!",
        "🏆 {winner} march on! {loser} bow out with heads held high."
    ],
    
    // Dramatic moments
    upset: [
        "🤯 UPSET ALERT! The underdogs are causing a sensation!",
        "😱 Nobody saw this coming! What a shock result brewing!",
        "🌟 Giant-killing in progress! This is why we love the World Cup!"
    ],
    
    // Saves
    save: [
        "🧤 WHAT A SAVE! The goalkeeper denies what looked certain!",
        "🙌 Incredible reflexes! That was heading in!",
        "🛡️ Superb stop! The keeper stands tall!"
    ],
    
    // Near misses
    nearMiss: [
        "😫 So close! Just wide of the post!",
        "💨 Inches away! That nearly crept in!",
        "🎯 Off the woodwork! Almost a goal!"
    ],
    
    // Celebrations
    winnerCelebration: [
        "🎊 WORLD CHAMPIONS! {team} have conquered the world!",
        "🏆 GLORY FOR {team}! They lift the FIFA World Cup!",
        "👑 {team} stand on top of the football world! What a tournament!",
        "🌟 History is made! {team} are World Cup 2026 Champions!"
    ]
};

class CommentarySystem {
    constructor() {
        this.history = [];
        this.maxHistory = 50;
    }
    
    getRandomLine(category, replacements = {}) {
        const lines = COMMENTARY[category];
        if (!lines || lines.length === 0) return '';
        
        let line = lines[Math.floor(Math.random() * lines.length)];
        
        // Replace placeholders
        for (const [key, value] of Object.entries(replacements)) {
            line = line.replace(new RegExp(`{${key}}`, 'g'), value);
        }
        
        return line;
    }
    
    addToHistory(line, type = 'normal') {
        const entry = {
            text: line,
            type,
            timestamp: Date.now()
        };
        
        this.history.unshift(entry);
        
        if (this.history.length > this.maxHistory) {
            this.history.pop();
        }
        
        this.updateDisplay();
    }
    
    updateDisplay() {
        const container = document.getElementById('commentaryFeed');
        if (!container) return;
        
        container.innerHTML = this.history.slice(0, 10).map((entry, i) => `
            <div class="commentary-line ${entry.type}" style="animation-delay: ${i * 0.05}s">
                <span class="commentary-text">${entry.text}</span>
            </div>
        `).join('');
    }
    
    // Match events
    matchStart(team1, team2) {
        const line = this.getRandomLine('kickoff');
        this.addToHistory(line, 'kickoff');
        this.addToHistory(`📋 ${team1} vs ${team2}`, 'info');
    }
    
    goal(scorer, team, currentScore) {
        const line = this.getRandomLine('goal', { scorer, team });
        this.addToHistory(line, 'goal');
        this.addToHistory(`📊 Score: ${currentScore}`, 'score');
        
        if (window.soundManager) {
            window.soundManager.playGoal();
        }
    }
    
    yellowCard(player, team) {
        const line = this.getRandomLine('yellowCard', { player, team });
        this.addToHistory(line, 'card');
        
        if (window.soundManager) {
            window.soundManager.playCard(false);
        }
    }
    
    redCard(player, team) {
        const line = this.getRandomLine('redCard', { player, team });
        this.addToHistory(line, 'red-card');
        
        if (window.soundManager) {
            window.soundManager.playCard(true);
        }
    }
    
    injury(player, team) {
        const line = this.getRandomLine('injury', { player, team });
        this.addToHistory(line, 'injury');
    }
    
    halfTime(score) {
        const line = this.getRandomLine('halfTime', { score });
        this.addToHistory(line, 'halftime');
        
        if (window.soundManager) {
            window.soundManager.playWhistle();
        }
    }
    
    fullTime(winner, loser, score, isDraw = false) {
        if (window.soundManager) {
            window.soundManager.playFinalWhistle();
        }
        
        if (isDraw) {
            const line = this.getRandomLine('draw', { score });
            this.addToHistory(line, 'fulltime');
        } else {
            const line = this.getRandomLine('fullTime', { winner, score });
            this.addToHistory(line, 'fulltime');
        }
    }
    
    elimination(winner, loser) {
        const line = this.getRandomLine('elimination', { winner, loser });
        this.addToHistory(line, 'elimination');
    }
    
    upset(underdog) {
        const line = this.getRandomLine('upset', { underdog });
        this.addToHistory(line, 'upset');
        
        if (window.soundManager) {
            window.soundManager.playDramaticMoment();
        }
    }
    
    champion(team) {
        const line = this.getRandomLine('winnerCelebration', { team: team.toUpperCase() });
        this.addToHistory(line, 'champion');
        
        if (window.soundManager) {
            window.soundManager.playVictory();
        }
    }
    
    clearHistory() {
        this.history = [];
        this.updateDisplay();
    }
    
    // Generate commentary for a completed match
    generateMatchCommentary(homeTeam, awayTeam, homeScore, awayScore, scorers, events) {
        this.matchStart(homeTeam, awayTeam);
        
        // Add goal commentary
        scorers.forEach(scorer => {
            const score = scorer.team === homeTeam ? 
                `${homeTeam} ${homeScore} - ${awayScore} ${awayTeam}` :
                `${homeTeam} ${homeScore} - ${awayScore} ${awayTeam}`;
            this.goal(scorer.player, scorer.team, score);
        });
        
        // Add card/injury events
        if (events) {
            events.forEach(event => {
                if (event.type === 'yellow_card') {
                    this.yellowCard(event.player, event.team);
                } else if (event.type === 'red_card' || event.type === 'yellow_suspension') {
                    this.redCard(event.player, event.team);
                } else if (event.type === 'injury') {
                    this.injury(event.player, event.team);
                }
            });
        }
        
        // Check for upset
        const homeRating = TEAMS[homeTeam]?.rating || 70;
        const awayRating = TEAMS[awayTeam]?.rating || 70;
        if (homeScore > awayScore && homeRating < awayRating - 10) {
            this.upset(homeTeam);
        } else if (awayScore > homeScore && awayRating < homeRating - 10) {
            this.upset(awayTeam);
        }
        
        // Full time
        const score = `${homeScore} - ${awayScore}`;
        if (homeScore === awayScore) {
            this.fullTime(null, null, score, true);
        } else {
            const winner = homeScore > awayScore ? homeTeam : awayTeam;
            const loser = homeScore > awayScore ? awayTeam : homeTeam;
            this.fullTime(winner, loser, score);
        }
    }
}

// Export
window.COMMENTARY = COMMENTARY;
window.CommentarySystem = CommentarySystem;
window.commentary = new CommentarySystem();
