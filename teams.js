// FIFA World Cup 2026 Teams Data
// OFFICIAL 48 teams with ratings based on FIFA World Rankings (December 2024)
// and historical performance statistics

// Team statistics structure:
// - rating: Overall team strength (based on FIFA ranking points, scaled 0-100)
// - attack: Attacking prowess (based on goals scored in recent tournaments/qualifiers)
// - defense: Defensive strength (based on goals conceded)
// - form: Recent form (based on last 10 matches performance)
// - experience: Tournament experience (World Cup appearances, deep runs)

const TEAMS = {
    // ===== TIER 1: Elite Teams (Rating 90+) =====
    
    // #1 FIFA Ranking - World Champions 2022
    'Argentina': { 
        flag: '🇦🇷', 
        rating: 97, 
        attack: 95, 
        defense: 90, 
        form: 95, 
        experience: 98,
        fifaPoints: 1867,
        confederation: 'CONMEBOL',
        worldCupWins: 3,
        recentResults: 'W-W-W-W-D' // Last 5 matches
    },
    
    // #2 FIFA Ranking - World Cup Finalists 2022
    'France': { 
        flag: '🇫🇷', 
        rating: 96, 
        attack: 96, 
        defense: 88, 
        form: 90, 
        experience: 97,
        fifaPoints: 1860,
        confederation: 'UEFA',
        worldCupWins: 2,
        recentResults: 'W-W-L-W-W'
    },
    
    // #3 FIFA Ranking - Euro 2024 Winners
    'Spain': { 
        flag: '🇪🇸', 
        rating: 95, 
        attack: 93, 
        defense: 90, 
        form: 95, 
        experience: 96,
        fifaPoints: 1853,
        confederation: 'UEFA',
        worldCupWins: 1,
        recentResults: 'W-W-W-W-W'
    },
    
    // #4 FIFA Ranking
    'England': { 
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 
        rating: 93, 
        attack: 91, 
        defense: 88, 
        form: 85, 
        experience: 90,
        fifaPoints: 1814,
        confederation: 'UEFA',
        worldCupWins: 1,
        recentResults: 'W-D-W-L-W'
    },
    
    // #5 FIFA Ranking
    'Brazil': { 
        flag: '🇧🇷', 
        rating: 92, 
        attack: 94, 
        defense: 82, 
        form: 78, 
        experience: 99,
        fifaPoints: 1776,
        confederation: 'CONMEBOL',
        worldCupWins: 5,
        recentResults: 'W-L-D-W-L'
    },
    
    // #6 FIFA Ranking
    'Belgium': { 
        flag: '🇧🇪', 
        rating: 90, 
        attack: 88, 
        defense: 85, 
        form: 80, 
        experience: 85,
        fifaPoints: 1762,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-W-L-D-W'
    },
    
    // ===== TIER 2: Strong Teams (Rating 85-89) =====
    
    // #7 FIFA Ranking
    'Netherlands': { 
        flag: '🇳🇱', 
        rating: 89, 
        attack: 87, 
        defense: 86, 
        form: 85, 
        experience: 90,
        fifaPoints: 1759,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-W'
    },
    
    // #8 FIFA Ranking
    'Portugal': { 
        flag: '🇵🇹', 
        rating: 89, 
        attack: 90, 
        defense: 84, 
        form: 88, 
        experience: 88,
        fifaPoints: 1756,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-W-W-W-D'
    },
    
    // #9 FIFA Ranking
    'Germany': { 
        flag: '🇩🇪', 
        rating: 87, 
        attack: 85, 
        defense: 82, 
        form: 80, 
        experience: 95,
        fifaPoints: 1704,
        confederation: 'UEFA',
        worldCupWins: 4,
        recentResults: 'W-L-W-D-W'
    },
    
    // #11 FIFA Ranking
    'Croatia': { 
        flag: '🇭🇷', 
        rating: 86, 
        attack: 82, 
        defense: 85, 
        form: 82, 
        experience: 88,
        fifaPoints: 1680,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-D-W-W-L'
    },
    
    // #12 FIFA Ranking
    'Colombia': { 
        flag: '🇨🇴', 
        rating: 85, 
        attack: 84, 
        defense: 80, 
        form: 90, 
        experience: 78,
        fifaPoints: 1671,
        confederation: 'CONMEBOL',
        worldCupWins: 0,
        recentResults: 'W-W-W-W-D'
    },
    
    // #14 FIFA Ranking - WC 2022 4th Place
    'Morocco': { 
        flag: '🇲🇦', 
        rating: 85, 
        attack: 78, 
        defense: 90, 
        form: 85, 
        experience: 82,
        fifaPoints: 1650,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-W'
    },
    
    // #16 FIFA Ranking
    'Uruguay': { 
        flag: '🇺🇾', 
        rating: 85, 
        attack: 86, 
        defense: 82, 
        form: 82, 
        experience: 92,
        fifaPoints: 1638,
        confederation: 'CONMEBOL',
        worldCupWins: 2,
        recentResults: 'W-W-L-W-D'
    },
    
    // ===== TIER 3: Competitive Teams (Rating 78-84) =====
    
    // #15 FIFA Ranking
    'Japan': { 
        flag: '🇯🇵', 
        rating: 84, 
        attack: 80, 
        defense: 82, 
        form: 88, 
        experience: 80,
        fifaPoints: 1644,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-W'
    },
    
    // #17 FIFA Ranking
    'USA': { 
        flag: '🇺🇸', 
        rating: 83, 
        attack: 80, 
        defense: 78, 
        form: 82, 
        experience: 75,
        fifaPoints: 1633,
        confederation: 'CONCACAF',
        isHost: true,
        worldCupWins: 0,
        recentResults: 'W-W-D-W-W'
    },
    
    // #18 FIFA Ranking
    'Senegal': { 
        flag: '🇸🇳', 
        rating: 82, 
        attack: 78, 
        defense: 80, 
        form: 80, 
        experience: 75,
        fifaPoints: 1623,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-D-W-W-L'
    },
    
    // #19 FIFA Ranking
    'Switzerland': { 
        flag: '🇨🇭', 
        rating: 82, 
        attack: 75, 
        defense: 85, 
        form: 78, 
        experience: 82,
        fifaPoints: 1617,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'D-W-W-L-W'
    },
    
    // #22 FIFA Ranking
    'Mexico': { 
        flag: '🇲🇽', 
        rating: 81, 
        attack: 78, 
        defense: 76, 
        form: 75, 
        experience: 88,
        fifaPoints: 1583,
        confederation: 'CONCACAF',
        isHost: true,
        worldCupWins: 0,
        recentResults: 'W-L-D-W-W'
    },
    
    // #23 FIFA Ranking
    'Iran': { 
        flag: '🇮🇷', 
        rating: 80, 
        attack: 74, 
        defense: 82, 
        form: 78, 
        experience: 78,
        fifaPoints: 1576,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-D'
    },
    
    // #20 FIFA Ranking
    'South Korea': { 
        flag: '🇰🇷', 
        rating: 80, 
        attack: 76, 
        defense: 78, 
        form: 82, 
        experience: 85,
        fifaPoints: 1600,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-L'
    },
    
    // #21 FIFA Ranking
    'Austria': { 
        flag: '🇦🇹', 
        rating: 80, 
        attack: 78, 
        defense: 80, 
        form: 85, 
        experience: 70,
        fifaPoints: 1595,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-W'
    },
    
    // #24 FIFA Ranking
    'Ukraine': { 
        flag: '🇺🇦', 
        rating: 79, 
        attack: 76, 
        defense: 78, 
        form: 75, 
        experience: 75,
        fifaPoints: 1563,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-L-W-D-W'
    },
    
    // #25 FIFA Ranking
    'Turkey': { 
        flag: '🇹🇷', 
        rating: 79, 
        attack: 80, 
        defense: 74, 
        form: 82, 
        experience: 78,
        fifaPoints: 1558,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-W-W-L-W'
    },
    
    // #26 FIFA Ranking
    'Poland': { 
        flag: '🇵🇱', 
        rating: 79, 
        attack: 80, 
        defense: 75, 
        form: 72, 
        experience: 78,
        fifaPoints: 1550,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-L-D-W-L'
    },
    
    // ===== TIER 4: Solid Teams (Rating 72-77) =====
    
    // #28 FIFA Ranking
    'Ecuador': { 
        flag: '🇪🇨', 
        rating: 77, 
        attack: 74, 
        defense: 75, 
        form: 78, 
        experience: 72,
        fifaPoints: 1532,
        confederation: 'CONMEBOL',
        worldCupWins: 0,
        recentResults: 'W-D-W-W-L'
    },
    
    // #30 FIFA Ranking
    'Australia': { 
        flag: '🇦🇺', 
        rating: 77, 
        attack: 72, 
        defense: 76, 
        form: 75, 
        experience: 78,
        fifaPoints: 1517,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-D-L-W'
    },
    
    // #27 FIFA Ranking
    'Wales': { 
        flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 
        rating: 76, 
        attack: 72, 
        defense: 75, 
        form: 70, 
        experience: 72,
        fifaPoints: 1540,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'D-L-W-L-W'
    },
    
    // #29 FIFA Ranking
    'Egypt': { 
        flag: '🇪🇬', 
        rating: 76, 
        attack: 75, 
        defense: 74, 
        form: 72, 
        experience: 80,
        fifaPoints: 1520,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-D-W-L-D'
    },
    
    // #31 FIFA Ranking
    'Algeria': { 
        flag: '🇩🇿', 
        rating: 76, 
        attack: 75, 
        defense: 72, 
        form: 74, 
        experience: 78,
        fifaPoints: 1510,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-W-D-L-W'
    },
    
    // #32 FIFA Ranking
    'Norway': { 
        flag: '🇳🇴', 
        rating: 75, 
        attack: 82, 
        defense: 70, 
        form: 72, 
        experience: 65,
        fifaPoints: 1505,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-L-W-W-D'
    },
    
    // #33 FIFA Ranking
    'Paraguay': { 
        flag: '🇵🇾', 
        rating: 75, 
        attack: 72, 
        defense: 74, 
        form: 78, 
        experience: 78,
        fifaPoints: 1498,
        confederation: 'CONMEBOL',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-L'
    },
    
    // #35 FIFA Ranking
    'Scotland': { 
        flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 
        rating: 75, 
        attack: 70, 
        defense: 75, 
        form: 72, 
        experience: 75,
        fifaPoints: 1488,
        confederation: 'UEFA',
        worldCupWins: 0,
        recentResults: 'W-L-D-W-L'
    },
    
    // #37 FIFA Ranking
    'Canada': { 
        flag: '🇨🇦', 
        rating: 74, 
        attack: 72, 
        defense: 70, 
        form: 70, 
        experience: 68,
        fifaPoints: 1475,
        confederation: 'CONCACAF',
        isHost: true,
        worldCupWins: 0,
        recentResults: 'D-W-L-W-W'
    },
    
    // #36 FIFA Ranking
    'Côte d\'Ivoire': { 
        flag: '🇨🇮', 
        rating: 74, 
        attack: 76, 
        defense: 70, 
        form: 85, 
        experience: 75,
        fifaPoints: 1480,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-W-W-W-D'
    },
    
    // #39 FIFA Ranking
    'Tunisia': { 
        flag: '🇹🇳', 
        rating: 73, 
        attack: 68, 
        defense: 75, 
        form: 72, 
        experience: 80,
        fifaPoints: 1460,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'D-W-W-L-D'
    },
    
    // #51 FIFA Ranking
    'Ghana': { 
        flag: '🇬🇭', 
        rating: 73, 
        attack: 72, 
        defense: 68, 
        form: 68, 
        experience: 78,
        fifaPoints: 1405,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'L-W-D-L-W'
    },
    
    // ===== TIER 5: Underdogs (Rating 65-71) =====
    
    // #43 FIFA Ranking
    'Saudi Arabia': { 
        flag: '🇸🇦', 
        rating: 72, 
        attack: 70, 
        defense: 72, 
        form: 75, 
        experience: 80,
        fifaPoints: 1435,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-L'
    },
    
    // #48 FIFA Ranking
    'Qatar': { 
        flag: '🇶🇦', 
        rating: 71, 
        attack: 68, 
        defense: 70, 
        form: 65, 
        experience: 72,
        fifaPoints: 1418,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'L-W-D-L-W'
    },
    
    // #60 FIFA Ranking
    'Uzbekistan': { 
        flag: '🇺🇿', 
        rating: 70, 
        attack: 68, 
        defense: 70, 
        form: 78, 
        experience: 65,
        fifaPoints: 1378,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-W'
    },
    
    // #62 FIFA Ranking
    'South Africa': { 
        flag: '🇿🇦', 
        rating: 70, 
        attack: 66, 
        defense: 68, 
        form: 72, 
        experience: 72,
        fifaPoints: 1365,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-D-W-L-W'
    },
    
    // #70 FIFA Ranking
    'Panama': { 
        flag: '🇵🇦', 
        rating: 69, 
        attack: 65, 
        defense: 68, 
        form: 70, 
        experience: 70,
        fifaPoints: 1332,
        confederation: 'CONCACAF',
        worldCupWins: 0,
        recentResults: 'W-L-W-D-W'
    },
    
    // #68 FIFA Ranking
    'Jordan': { 
        flag: '🇯🇴', 
        rating: 69, 
        attack: 66, 
        defense: 70, 
        form: 80, 
        experience: 60,
        fifaPoints: 1342,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-W-D-L'
    },
    
    // #86 FIFA Ranking
    'Bahrain': { 
        flag: '🇧🇭', 
        rating: 67, 
        attack: 62, 
        defense: 68, 
        form: 72, 
        experience: 55,
        fifaPoints: 1277,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-D-W-W-L'
    },
    
    // #81 FIFA Ranking
    'New Zealand': { 
        flag: '🇳🇿', 
        rating: 67, 
        attack: 62, 
        defense: 68, 
        form: 70, 
        experience: 68,
        fifaPoints: 1295,
        confederation: 'OFC',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-L'
    },
    
    // #91 FIFA Ranking
    'Haiti': { 
        flag: '🇭🇹', 
        rating: 66, 
        attack: 62, 
        defense: 64, 
        form: 65, 
        experience: 65,
        fifaPoints: 1260,
        confederation: 'CONCACAF',
        worldCupWins: 0,
        recentResults: 'D-L-W-W-L'
    },
    
    // ===== TIER 6: Dark Horses (Rating 60-64) =====
    
    // #110 FIFA Ranking
    'Cabo Verde': { 
        flag: '🇨🇻', 
        rating: 64, 
        attack: 60, 
        defense: 65, 
        form: 72, 
        experience: 55,
        fifaPoints: 1205,
        confederation: 'CAF',
        worldCupWins: 0,
        recentResults: 'W-W-D-W-L'
    },
    
    // #95 FIFA Ranking
    'Curaçao': { 
        flag: '🇨🇼', 
        rating: 63, 
        attack: 58, 
        defense: 62, 
        form: 65, 
        experience: 50,
        fifaPoints: 1248,
        confederation: 'CONCACAF',
        worldCupWins: 0,
        recentResults: 'W-L-D-W-L'
    },
    
    // #139 FIFA Ranking
    'Indonesia': { 
        flag: '🇮🇩', 
        rating: 60, 
        attack: 55, 
        defense: 58, 
        form: 70, 
        experience: 45,
        fifaPoints: 1122,
        confederation: 'AFC',
        worldCupWins: 0,
        recentResults: 'W-W-D-L-W'
    }
};

// OFFICIAL FIFA World Cup 2026 Group Assignments
const GROUPS = {
    'A': ['Mexico', 'South Africa', 'South Korea', 'Turkey'],
    'B': ['Canada', 'Wales', 'Qatar', 'Switzerland'],
    'C': ['Brazil', 'Morocco', 'Haiti', 'Scotland'],
    'D': ['USA', 'Paraguay', 'Australia', 'Poland'],
    'E': ['Germany', 'Curaçao', 'Côte d\'Ivoire', 'Ecuador'],
    'F': ['Netherlands', 'Japan', 'Ukraine', 'Tunisia'],
    'G': ['Belgium', 'Egypt', 'Iran', 'New Zealand'],
    'H': ['Spain', 'Cabo Verde', 'Saudi Arabia', 'Uruguay'],
    'I': ['France', 'Senegal', 'Bahrain', 'Norway'],
    'J': ['Argentina', 'Algeria', 'Austria', 'Jordan'],
    'K': ['Portugal', 'Indonesia', 'Uzbekistan', 'Colombia'],
    'L': ['England', 'Croatia', 'Ghana', 'Panama']
};

// Simulation mode settings
const SIMULATION_MODES = {
    REALISTIC: {
        name: 'Realistic',
        description: 'Uses FIFA rankings and historical stats for accurate predictions',
        ratingWeight: 0.5,    // 50% weight on rating difference
        formWeight: 0.2,      // 20% weight on recent form
        experienceWeight: 0.15, // 15% weight on tournament experience
        randomWeight: 0.15    // 15% random factor for upsets
    },
    BALANCED: {
        name: 'Balanced',
        description: 'Mix of stats and randomness for exciting results',
        ratingWeight: 0.35,
        formWeight: 0.15,
        experienceWeight: 0.1,
        randomWeight: 0.4
    },
    CHAOS: {
        name: 'Chaos Mode',
        description: 'Anything can happen! Maximum unpredictability',
        ratingWeight: 0.15,
        formWeight: 0.05,
        experienceWeight: 0.05,
        randomWeight: 0.75
    }
};

// Export for use in simulator
window.TEAMS = TEAMS;
window.GROUPS = GROUPS;
window.SIMULATION_MODES = SIMULATION_MODES;
