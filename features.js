// FIFA World Cup 2026 Simulator - Additional Features

// ===== RIVALRIES =====
const RIVALRIES = {
    // Classic Rivalries
    'Argentina-Brazil': { name: 'Superclásico de las Américas', intensity: 5, emoji: '🔥' },
    'Brazil-Argentina': { name: 'Superclásico de las Américas', intensity: 5, emoji: '🔥' },
    'England-Germany': { name: 'Historic Rivalry', intensity: 5, emoji: '⚔️' },
    'Germany-England': { name: 'Historic Rivalry', intensity: 5, emoji: '⚔️' },
    'England-Argentina': { name: 'Hand of God Rivalry', intensity: 4, emoji: '👊' },
    'Argentina-England': { name: 'Hand of God Rivalry', intensity: 4, emoji: '👊' },
    'Spain-Portugal': { name: 'Iberian Derby', intensity: 4, emoji: '🇪🇸🇵🇹' },
    'Portugal-Spain': { name: 'Iberian Derby', intensity: 4, emoji: '🇪🇸🇵🇹' },
    'Netherlands-Germany': { name: 'Der Klassiker', intensity: 4, emoji: '⚡' },
    'Germany-Netherlands': { name: 'Der Klassiker', intensity: 4, emoji: '⚡' },
    'USA-Mexico': { name: 'CONCACAF Clásico', intensity: 5, emoji: '🌎' },
    'Mexico-USA': { name: 'CONCACAF Clásico', intensity: 5, emoji: '🌎' },
    'France-Germany': { name: 'European Clash', intensity: 4, emoji: '🏆' },
    'Germany-France': { name: 'European Clash', intensity: 4, emoji: '🏆' },
    'Brazil-Uruguay': { name: 'Clásico del Río de la Plata', intensity: 4, emoji: '🌊' },
    'Uruguay-Brazil': { name: 'Clásico del Río de la Plata', intensity: 4, emoji: '🌊' },
    'Japan-South Korea': { name: 'East Asian Rivalry', intensity: 4, emoji: '🌏' },
    'South Korea-Japan': { name: 'East Asian Rivalry', intensity: 4, emoji: '🌏' },
    'Morocco-Algeria': { name: 'North African Derby', intensity: 5, emoji: '🏜️' },
    'Algeria-Morocco': { name: 'North African Derby', intensity: 5, emoji: '🏜️' },
    'England-Scotland': { name: 'The Auld Enemy', intensity: 5, emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    'Scotland-England': { name: 'The Auld Enemy', intensity: 5, emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿' }
};

function checkRivalry(team1, team2) {
    const key = `${team1}-${team2}`;
    return RIVALRIES[key] || null;
}

// ===== MAN OF THE MATCH =====
function calculateManOfMatch(homeTeam, awayTeam, homeScore, awayScore, scorers, events) {
    const candidates = {};
    
    // Add points for goals
    scorers.forEach(scorer => {
        const key = `${scorer.player}|${scorer.team}`;
        if (!candidates[key]) {
            candidates[key] = { player: scorer.player, team: scorer.team, points: 0, goals: 0, assists: 0 };
        }
        candidates[key].goals++;
        candidates[key].points += 3; // 3 points per goal
    });
    
    // Add points for winning team players
    const winner = homeScore > awayScore ? homeTeam : (awayScore > homeScore ? awayTeam : null);
    if (winner) {
        Object.keys(candidates).forEach(key => {
            if (candidates[key].team === winner) {
                candidates[key].points += 2; // Bonus for being on winning team
            }
        });
    }
    
    // Deduct points for cards
    if (events) {
        events.forEach(event => {
            const key = `${event.player}|${event.team}`;
            if (candidates[key]) {
                if (event.type === 'yellow_card') candidates[key].points -= 1;
                if (event.type === 'red_card') candidates[key].points -= 5;
            }
        });
    }
    
    // If no scorers, pick a random star player from winning team
    if (Object.keys(candidates).length === 0 && winner) {
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[winner] : null;
        if (roster && roster.forwards.length > 0) {
            const player = roster.forwards[0];
            return { player, team: winner, points: 5, goals: 0, isCleanSheet: homeScore === 0 || awayScore === 0 };
        }
    }
    
    // Find highest scoring candidate
    const sorted = Object.values(candidates).sort((a, b) => b.points - a.points);
    return sorted[0] || null;
}

// ===== HEAD-TO-HEAD HISTORY =====
// Simulated historical records
const HEAD_TO_HEAD = {
    'Argentina-Brazil': { team1Wins: 40, draws: 25, team2Wins: 46, lastMatch: 'Argentina 1-0 Brazil (2021 Copa América Final)' },
    'England-Germany': { team1Wins: 13, draws: 6, team2Wins: 15, lastMatch: 'England 2-0 Germany (Euro 2020)' },
    'Spain-Portugal': { team1Wins: 17, draws: 10, team2Wins: 8, lastMatch: 'Spain 0-0 Portugal (2022 World Cup)' },
    'USA-Mexico': { team1Wins: 22, draws: 16, team2Wins: 36, lastMatch: 'USA 3-0 Mexico (2024 Nations League)' },
    'France-Germany': { team1Wins: 14, draws: 7, team2Wins: 11, lastMatch: 'France 1-0 Germany (Euro 2020)' },
    'Netherlands-Germany': { team1Wins: 10, draws: 11, team2Wins: 17, lastMatch: 'Netherlands 1-1 Germany (2024)' },
    'Japan-South Korea': { team1Wins: 16, draws: 23, team2Wins: 42, lastMatch: 'Japan 3-0 South Korea (2023)' }
};

function getHeadToHead(team1, team2) {
    const key1 = `${team1}-${team2}`;
    const key2 = `${team2}-${team1}`;
    
    if (HEAD_TO_HEAD[key1]) {
        return { ...HEAD_TO_HEAD[key1], perspective: team1 };
    }
    if (HEAD_TO_HEAD[key2]) {
        const h2h = HEAD_TO_HEAD[key2];
        return { 
            team1Wins: h2h.team2Wins, 
            draws: h2h.draws, 
            team2Wins: h2h.team1Wins,
            lastMatch: h2h.lastMatch,
            perspective: team1 
        };
    }
    return null;
}

// ===== UNDERDOG TRACKER =====
class UnderdogTracker {
    constructor() {
        this.underdogRuns = [];
    }
    
    checkUnderdog(team, round) {
        const rating = TEAMS[team]?.rating || 70;
        const isUnderdog = rating < 75;
        
        if (isUnderdog) {
            const run = {
                team,
                rating,
                round,
                flag: TEAMS[team]?.flag
            };
            
            // Check if already tracking this team
            const existing = this.underdogRuns.find(r => r.team === team);
            if (existing) {
                existing.round = round;
            } else {
                this.underdogRuns.push(run);
            }
        }
        
        return isUnderdog;
    }
    
    getActiveRuns() {
        return this.underdogRuns.filter(r => 
            ['round16', 'quarter', 'semi', 'final'].includes(r.round)
        );
    }
    
    getBestRun() {
        const roundOrder = ['round32', 'round16', 'quarter', 'semi', 'final'];
        let best = null;
        
        this.underdogRuns.forEach(run => {
            const roundIndex = roundOrder.indexOf(run.round);
            if (!best || roundIndex > roundOrder.indexOf(best.round)) {
                best = run;
            }
        });
        
        return best;
    }
    
    reset() {
        this.underdogRuns = [];
    }
}

// ===== ALL-TIME LEADERBOARD =====
class Leaderboard {
    constructor() {
        this.data = this.load();
    }
    
    load() {
        try {
            return JSON.parse(localStorage.getItem('wc_leaderboard') || '{}');
        } catch {
            return {};
        }
    }
    
    save() {
        localStorage.setItem('wc_leaderboard', JSON.stringify(this.data));
    }
    
    recordWin(team) {
        if (!this.data[team]) {
            this.data[team] = { wins: 0, finals: 0, semis: 0 };
        }
        this.data[team].wins++;
        this.save();
    }
    
    recordFinal(team) {
        if (!this.data[team]) {
            this.data[team] = { wins: 0, finals: 0, semis: 0 };
        }
        this.data[team].finals++;
        this.save();
    }
    
    recordSemi(team) {
        if (!this.data[team]) {
            this.data[team] = { wins: 0, finals: 0, semis: 0 };
        }
        this.data[team].semis++;
        this.save();
    }
    
    getTopTeams(limit = 10) {
        return Object.entries(this.data)
            .map(([team, stats]) => ({ team, ...stats, flag: TEAMS[team]?.flag || '🏳️' }))
            .sort((a, b) => b.wins - a.wins || b.finals - a.finals)
            .slice(0, limit);
    }
    
    getTeamStats(team) {
        return this.data[team] || { wins: 0, finals: 0, semis: 0 };
    }
    
    reset() {
        this.data = {};
        this.save();
    }
}

// ===== SHARE RESULTS =====
function generateShareText(champion, runnerUp, thirdPlace, goldenBoot, mode) {
    const emojis = ['🏆', '⚽', '🌟', '🎉', '🔥'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    let text = `${randomEmoji} My FIFA World Cup 2026™ Simulation:\n\n`;
    text += `🥇 Champion: ${TEAMS[champion]?.flag || ''} ${champion}\n`;
    text += `🥈 Runner-up: ${TEAMS[runnerUp]?.flag || ''} ${runnerUp}\n`;
    text += `🥉 3rd Place: ${TEAMS[thirdPlace]?.flag || ''} ${thirdPlace}\n\n`;
    
    if (goldenBoot) {
        const [player, team] = goldenBoot.split(' (');
        text += `👟 Golden Boot: ${player}\n\n`;
    }
    
    text += `🎮 Mode: ${mode}\n`;
    text += `\nSimulate yours at worldcup2026.simulator! 🌍`;
    
    return text;
}

function shareResults(platform, shareData) {
    const text = generateShareText(
        shareData.champion,
        shareData.runnerUp,
        shareData.thirdPlace,
        shareData.goldenBoot,
        shareData.mode
    );
    
    const encodedText = encodeURIComponent(text);
    
    const urls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`,
        whatsapp: `https://wa.me/?text=${encodedText}`,
        clipboard: null
    };
    
    if (platform === 'clipboard') {
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Results copied to clipboard!');
        }).catch(() => {
            showToast('❌ Failed to copy');
        });
        return;
    }
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
    }
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, duration = 3000) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Remove after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===== DRAMATIC MOMENTS =====
function checkDramaticMoment(groupStandings, groupName) {
    const standings = groupStandings[groupName];
    if (!standings || standings.length < 4) return null;
    
    const sorted = [...standings].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const gdA = a.goalsFor - a.goalsAgainst;
        const gdB = b.goalsFor - b.goalsAgainst;
        return gdB - gdA;
    });
    
    // Check if 2nd and 3rd are tied on points (qualification drama)
    if (sorted[1].points === sorted[2].points && sorted[1].points > 0) {
        return {
            type: 'qualification_race',
            message: `🔥 DRAMA in Group ${groupName}! ${sorted[1].name} and ${sorted[2].name} are level on ${sorted[1].points} points!`,
            teams: [sorted[1].name, sorted[2].name]
        };
    }
    
    // Check if leader is only 1 point ahead
    if (sorted[0].points - sorted[1].points === 1 && sorted[0].played < 3) {
        return {
            type: 'tight_race',
            message: `😰 Group ${groupName} is WIDE OPEN! Only 1 point separates the top two!`,
            teams: [sorted[0].name, sorted[1].name]
        };
    }
    
    return null;
}

// Export everything
window.RIVALRIES = RIVALRIES;
window.checkRivalry = checkRivalry;
window.calculateManOfMatch = calculateManOfMatch;
window.getHeadToHead = getHeadToHead;
window.UnderdogTracker = UnderdogTracker;
window.underdogTracker = new UnderdogTracker();
window.Leaderboard = Leaderboard;
window.leaderboard = new Leaderboard();
window.generateShareText = generateShareText;
window.shareResults = shareResults;
window.showToast = showToast;
window.checkDramaticMoment = checkDramaticMoment;

