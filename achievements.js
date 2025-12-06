// FIFA World Cup 2026 Simulator - Achievements System

const ACHIEVEMENTS = {
    // Tournament Achievements
    'world_champion': {
        id: 'world_champion',
        name: '🏆 World Champion',
        description: 'Win the World Cup with your favorite team',
        icon: '🏆',
        rarity: 'legendary',
        check: (sim) => sim.favoriteTeam && sim.champion === sim.favoriteTeam
    },
    'runner_up': {
        id: 'runner_up',
        name: '🥈 So Close',
        description: 'Reach the final with your favorite team',
        icon: '🥈',
        rarity: 'epic',
        check: (sim) => sim.favoriteTeam && sim.runnerUp === sim.favoriteTeam
    },
    'bronze_medal': {
        id: 'bronze_medal',
        name: '🥉 Podium Finish',
        description: 'Finish 3rd place with your favorite team',
        icon: '🥉',
        rarity: 'rare',
        check: (sim) => sim.favoriteTeam && sim.thirdPlace === sim.favoriteTeam
    },
    
    // Underdog Achievements
    'giant_killer': {
        id: 'giant_killer',
        name: '🦘 Giant Killer',
        description: 'An underdog team (rated <75) reaches the semi-finals',
        icon: '🦘',
        rarity: 'epic',
        check: (sim) => {
            const semis = sim.knockoutMatches?.semi || [];
            return semis.some(m => {
                const team1Rating = TEAMS[m.team1]?.rating || 100;
                const team2Rating = TEAMS[m.team2]?.rating || 100;
                return team1Rating < 75 || team2Rating < 75;
            });
        }
    },
    'cinderella_story': {
        id: 'cinderella_story',
        name: '✨ Cinderella Story',
        description: 'A team rated under 70 wins the World Cup',
        icon: '✨',
        rarity: 'legendary',
        check: (sim) => sim.champion && TEAMS[sim.champion]?.rating < 70
    },
    'africa_rises': {
        id: 'africa_rises',
        name: '🌍 Africa Rises',
        description: 'An African team reaches the final',
        icon: '🌍',
        rarity: 'epic',
        check: (sim) => {
            const champ = TEAMS[sim.champion]?.confederation;
            const runner = TEAMS[sim.runnerUp]?.confederation;
            return champ === 'CAF' || runner === 'CAF';
        }
    },
    'asian_dream': {
        id: 'asian_dream',
        name: '🌏 Asian Dream',
        description: 'An Asian team reaches the semi-finals',
        icon: '🌏',
        rarity: 'rare',
        check: (sim) => {
            const semis = sim.knockoutMatches?.semi || [];
            return semis.some(m => {
                return TEAMS[m.team1]?.confederation === 'AFC' || 
                       TEAMS[m.team2]?.confederation === 'AFC';
            });
        }
    },
    
    // Performance Achievements
    'perfect_group': {
        id: 'perfect_group',
        name: '💯 Perfect Group',
        description: 'A team wins all 3 group stage matches',
        icon: '💯',
        rarity: 'rare',
        check: (sim) => {
            return Object.values(sim.groupStandings).some(group => 
                group.some(team => team.won === 3 && team.played === 3)
            );
        }
    },
    'goal_fest': {
        id: 'goal_fest',
        name: '⚽ Goal Fest',
        description: 'Tournament has over 150 total goals',
        icon: '⚽',
        rarity: 'rare',
        check: (sim) => sim.tournamentStats.totalGoals > 150
    },
    'defensive_masterclass': {
        id: 'defensive_masterclass',
        name: '🧱 Defensive Masterclass',
        description: 'Champion concedes 3 or fewer goals in the tournament',
        icon: '🧱',
        rarity: 'epic',
        check: (sim) => {
            if (!sim.champion) return false;
            // Check champion's total goals conceded
            let conceded = 0;
            Object.values(sim.groupStandings).forEach(group => {
                const team = group.find(t => t.name === sim.champion);
                if (team) conceded += team.goalsAgainst;
            });
            // Add knockout goals conceded (simplified)
            return conceded <= 3;
        }
    },
    
    // Golden Boot/Ball Achievements
    'golden_touch': {
        id: 'golden_touch',
        name: '👟 Golden Touch',
        description: 'A player scores 10+ goals in the tournament',
        icon: '👟',
        rarity: 'legendary',
        check: (sim) => Object.values(sim.goldenBoot).some(goals => goals >= 10)
    },
    'hat_trick_hero': {
        id: 'hat_trick_hero',
        name: '🎩 Hat-Trick Hero',
        description: 'A player scores 3+ goals in a single match',
        icon: '🎩',
        rarity: 'rare',
        check: (sim) => sim.hatTrickScored || false
    },
    'clean_sheet_king': {
        id: 'clean_sheet_king',
        name: '🧤 Clean Sheet King',
        description: 'A goalkeeper keeps 6+ clean sheets',
        icon: '🧤',
        rarity: 'epic',
        check: (sim) => Object.values(sim.goldenGlove).some(gk => gk.cleanSheets >= 6)
    },
    
    // Mode Achievements
    'chaos_champion': {
        id: 'chaos_champion',
        name: '🎲 Chaos Champion',
        description: 'Win the tournament in Chaos mode with your team',
        icon: '🎲',
        rarity: 'legendary',
        check: (sim) => sim.simulationMode === 'CHAOS' && 
                        sim.favoriteTeam && 
                        sim.champion === sim.favoriteTeam
    },
    'realistic_ruler': {
        id: 'realistic_ruler',
        name: '📊 Realistic Ruler',
        description: 'Win with a top-5 rated team in Realistic mode',
        icon: '📊',
        rarity: 'common',
        check: (sim) => {
            if (sim.simulationMode !== 'REALISTIC' || !sim.champion) return false;
            const rating = TEAMS[sim.champion]?.rating || 0;
            return rating >= 92;
        }
    },
    
    // Drama Achievements
    'last_minute_drama': {
        id: 'last_minute_drama',
        name: '⏱️ Last Minute Drama',
        description: 'Witness a knockout match decided by 1 goal',
        icon: '⏱️',
        rarity: 'common',
        check: (sim) => {
            return Object.values(sim.knockoutMatches).flat().some(m => 
                m.played && Math.abs((m.score1 || 0) - (m.score2 || 0)) === 1
            );
        }
    },
    'redemption_arc': {
        id: 'redemption_arc',
        name: '🔄 Redemption Arc',
        description: 'Your team loses a group match but still wins the tournament',
        icon: '🔄',
        rarity: 'epic',
        check: (sim) => {
            if (!sim.favoriteTeam || sim.champion !== sim.favoriteTeam) return false;
            const group = Object.values(sim.groupStandings).flat()
                .find(t => t.name === sim.favoriteTeam);
            return group && group.lost > 0;
        }
    },
    
    // Streak Achievements  
    'serial_winner': {
        id: 'serial_winner',
        name: '🔥 Serial Winner',
        description: 'Win 3 tournaments in a row (stored in local storage)',
        icon: '🔥',
        rarity: 'legendary',
        check: () => {
            const streak = parseInt(localStorage.getItem('wc_win_streak') || '0');
            return streak >= 3;
        }
    },
    'tournament_veteran': {
        id: 'tournament_veteran',
        name: '🎖️ Tournament Veteran',
        description: 'Complete 10 tournament simulations',
        icon: '🎖️',
        rarity: 'rare',
        check: () => {
            const count = parseInt(localStorage.getItem('wc_sim_count') || '0');
            return count >= 10;
        }
    },
    
    // Host Nation Achievement
    'home_glory': {
        id: 'home_glory',
        name: '🏠 Home Glory',
        description: 'A host nation (USA, Mexico, or Canada) wins the World Cup',
        icon: '🏠',
        rarity: 'rare',
        check: (sim) => ['USA', 'Mexico', 'Canada'].includes(sim.champion)
    }
};

class AchievementManager {
    constructor() {
        this.unlockedAchievements = this.loadUnlocked();
        this.newlyUnlocked = [];
    }
    
    loadUnlocked() {
        try {
            return JSON.parse(localStorage.getItem('wc_achievements') || '[]');
        } catch {
            return [];
        }
    }
    
    saveUnlocked() {
        localStorage.setItem('wc_achievements', JSON.stringify(this.unlockedAchievements));
    }
    
    checkAchievements(simulator) {
        this.newlyUnlocked = [];
        
        for (const [id, achievement] of Object.entries(ACHIEVEMENTS)) {
            if (this.unlockedAchievements.includes(id)) continue;
            
            try {
                if (achievement.check(simulator)) {
                    this.unlockAchievement(id);
                }
            } catch (e) {
                console.warn(`Error checking achievement ${id}:`, e);
            }
        }
        
        // Update simulation count
        const count = parseInt(localStorage.getItem('wc_sim_count') || '0') + 1;
        localStorage.setItem('wc_sim_count', count.toString());
        
        // Update win streak
        if (simulator.favoriteTeam && simulator.champion === simulator.favoriteTeam) {
            const streak = parseInt(localStorage.getItem('wc_win_streak') || '0') + 1;
            localStorage.setItem('wc_win_streak', streak.toString());
        } else if (simulator.favoriteTeam) {
            localStorage.setItem('wc_win_streak', '0');
        }
        
        return this.newlyUnlocked;
    }
    
    unlockAchievement(id) {
        if (this.unlockedAchievements.includes(id)) return;
        
        this.unlockedAchievements.push(id);
        this.newlyUnlocked.push(ACHIEVEMENTS[id]);
        this.saveUnlocked();
        
        // Play sound
        if (window.soundManager) {
            window.soundManager.playAchievement();
        }
        
        console.log(`🏆 Achievement Unlocked: ${ACHIEVEMENTS[id].name}`);
    }
    
    getProgress() {
        const total = Object.keys(ACHIEVEMENTS).length;
        const unlocked = this.unlockedAchievements.length;
        return { unlocked, total, percentage: Math.round((unlocked / total) * 100) };
    }
    
    getAllAchievements() {
        return Object.values(ACHIEVEMENTS).map(a => ({
            ...a,
            unlocked: this.unlockedAchievements.includes(a.id)
        }));
    }
    
    resetAchievements() {
        this.unlockedAchievements = [];
        this.saveUnlocked();
        localStorage.removeItem('wc_sim_count');
        localStorage.removeItem('wc_win_streak');
    }
}

// Rarity colors
const RARITY_COLORS = {
    common: '#9ca3af',
    rare: '#3b82f6',
    epic: '#a855f7',
    legendary: '#f59e0b'
};

// Export
window.ACHIEVEMENTS = ACHIEVEMENTS;
window.AchievementManager = AchievementManager;
window.RARITY_COLORS = RARITY_COLORS;
window.achievementManager = new AchievementManager();
