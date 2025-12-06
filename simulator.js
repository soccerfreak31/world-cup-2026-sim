// World Cup 2026 Simulator - Main Logic

// Famous players for Golden Boot tracking (by country) - Updated 2025 rosters
const FAMOUS_PLAYERS = {
    // CONMEBOL
    'Argentina': ['Messi', 'Lautaro', 'Álvarez', 'J.M. López'],
    'Brazil': ['Vini Jr', 'Rodrygo', 'Endrick', 'Raphinha'],
    'Uruguay': ['Darwin', 'Pellistri', 'F. Torres', 'Valverde'],
    'Colombia': ['Luis Díaz', 'Córdoba', 'Durán', 'James'],
    'Ecuador': ['Valencia', 'Caicedo', 'Sarmiento', 'Moisés Caicedo'],
    'Paraguay': ['Almirón', 'Enciso', 'Sanabria', 'Bareiro'],
    
    // UEFA
    'France': ['Mbappé', 'Thuram', 'Kolo Muani', 'Griezmann'],
    'England': ['Kane', 'Bellingham', 'Saka', 'Foden'],
    'Spain': ['Yamal', 'Williams', 'Morata', 'Ferran'],
    'Germany': ['Musiala', 'Wirtz', 'Havertz', 'Füllkrug'],
    'Portugal': ['Ronaldo', 'R. Leão', 'B. Silva', 'Jota'],
    'Netherlands': ['Gakpo', 'Simons', 'Malen', 'Zirkzee'],
    'Belgium': ['Lukaku', 'Doku', 'Openda', 'De Bruyne'],
    'Croatia': ['Kramarić', 'Petković', 'Budimir', 'Matanović'],
    'Poland': ['Lewandowski', 'Piątek', 'Świderski', 'Urbański'],
    'Switzerland': ['Embolo', 'Ndoye', 'Okafor', 'Amdouni'],
    'Austria': ['Arnautović', 'Gregoritsch', 'Baumgartner', 'Adamu'],
    'Ukraine': ['Mudryk', 'Dovbyk', 'Yaremchuk', 'Tsygankov'],
    'Scotland': ['Adams', 'McGinn', 'Christie', 'McTominay'],
    'Wales': ['James', 'Moore', 'Johnson', 'Wilson'],
    'Turkey': ['Yıldız', 'Arda Güler', 'Aktürkoğlu', 'Tosun'],
    'Norway': ['Haaland', 'Ødegaard', 'Sørloth', 'Nusa'],
    
    // CONCACAF
    'USA': ['Pulisic', 'Balogun', 'Reyna', 'Pepi'],
    'Mexico': ['Lozano', 'Giménez', 'Vega', 'Antuna'],
    'Canada': ['Davies', 'David', 'Larin', 'Buchanan'],
    'Panama': ['Fajardo', 'Blackman', 'Bárcenas', 'Murillo'],
    'Haiti': ['Duverger', 'Pierrot', 'Brunot', 'Alceus'],
    'Curaçao': ['Bacuna', 'Breinburg', 'Hooi', 'Kuster'],
    
    // AFC
    'Japan': ['Mitoma', 'Kubo', 'Kamada', 'Ueda'],
    'South Korea': ['Son', 'Hwang', 'Lee Kang-in', 'Cho Gue-sung'],
    'Australia': ['Duke', 'Maclaren', 'Kuol', 'Irvine'],
    'Saudi Arabia': ['Al-Dawsari', 'Al-Shehri', 'Kanno', 'Al-Buraikan'],
    'Qatar': ['Afif', 'Almoez Ali', 'Hatem', 'Boudiaf'],
    'Iran': ['Taremi', 'Azmoun', 'Jahanbakhsh', 'Ghoddos'],
    'Uzbekistan': ['Shomurodov', 'Fayzullaev', 'Jaloliddinov', 'Masharipov'],
    'Indonesia': ['Struick', 'Jenner', 'Platje', 'Hubner'],
    'Jordan': ['Baha', 'Al-Naimat', 'Al-Tamari', 'Yassin'],
    'Bahrain': ['Marhoon', 'Al-Aswad', 'Al Hayam', 'Yusuf Saleh'],
    'New Zealand': ['Wood', 'Waine', 'Singh', 'Cacace'],
    
    // CAF
    'Morocco': ['Hakimi', 'En-Nesyri', 'Ziyech', 'Diaz'],
    'Senegal': ['Mané', 'Dia', 'Diedhiou', 'Sarr'],
    'Egypt': ['Salah', 'Marmoush', 'Trezeguet', 'Mostafa'],
    'Algeria': ['Benrahma', 'Bounedjah', 'Atal', 'Mahrez'],
    'Ghana': ['Kudus', 'Iñaki', 'Ayew', 'Sulemana'],
    'Côte d\'Ivoire': ['Haller', 'Pépé', 'Boga', 'Seko Fofana'],
    'Tunisia': ['Jaziri', 'Khazri', 'Msakni', 'Sliti'],
    'South Africa': ['Percy Tau', 'Makgopa', 'Foster', 'Mokoena'],
    'Cabo Verde': ['Rodrigues', 'Borges', 'Tavares', 'Dias'],
    
    // Default fallback
    'default': ['Striker', 'Forward', 'Winger', 'Midfielder']
};

// Goalkeepers for Golden Glove tracking (by country)
const GOALKEEPERS = {
    'Argentina': 'E. Martínez',
    'Brazil': 'Alisson',
    'Uruguay': 'Rochet',
    'Colombia': 'Vargas',
    'Ecuador': 'Galíndez',
    'Paraguay': 'R. Fernández',
    'France': 'Maignan',
    'England': 'Pickford',
    'Spain': 'Unai Simón',
    'Germany': 'Neuer',
    'Portugal': 'Diogo Costa',
    'Netherlands': 'Verbruggen',
    'Belgium': 'Casteels',
    'Croatia': 'Livaković',
    'Poland': 'Szczęsny',
    'Switzerland': 'Sommer',
    'Austria': 'Pentz',
    'Ukraine': 'Lunin',
    'Scotland': 'Gunn',
    'Wales': 'Ward',
    'Turkey': 'Günok',
    'Norway': 'Nyland',
    'USA': 'Turner',
    'Mexico': 'Ochoa',
    'Canada': 'Crépeau',
    'Panama': 'Mosquera',
    'Haiti': 'Placide',
    'Curaçao': 'Room',
    'Japan': 'Suzuki',
    'South Korea': 'Kim Seung-gyu',
    'Australia': 'Ryan',
    'Saudi Arabia': 'Al-Owais',
    'Qatar': 'Al-Sheeb',
    'Iran': 'Beiranvand',
    'Uzbekistan': 'Nematov',
    'Indonesia': 'Nadeo',
    'Jordan': 'Shafi',
    'Bahrain': 'Al-Rashid',
    'New Zealand': 'Sail',
    'Morocco': 'Bounou',
    'Senegal': 'E. Mendy',
    'Egypt': 'El-Shenawy',
    'Algeria': 'M\'Bolhi',
    'Ghana': 'Ati-Zigi',
    'Côte d\'Ivoire': 'Sangaré',
    'Tunisia': 'Dahmen',
    'South Africa': 'Williams',
    'Cabo Verde': 'Vozinha',
    'default': 'Goalkeeper'
};

// Young players for Best Young Player award (by country)
const YOUNG_PLAYERS = {
    'Argentina': 'Echeverri',
    'Brazil': 'Endrick',
    'Uruguay': 'Pellistri',
    'Colombia': 'Durán',
    'Ecuador': 'Kendry Páez',
    'Paraguay': 'Enciso',
    'France': 'Barcola',
    'England': 'Mainoo',
    'Spain': 'Yamal',
    'Germany': 'Wirtz',
    'Portugal': 'João Neves',
    'Netherlands': 'Simons',
    'Belgium': 'Doku',
    'Croatia': 'Matanović',
    'Poland': 'Urbański',
    'Switzerland': 'Ndoye',
    'Austria': 'Seidl',
    'Ukraine': 'Mudryk',
    'Scotland': 'Gilmour',
    'Wales': 'Sherwood',
    'Turkey': 'Arda Güler',
    'Norway': 'Nusa',
    'USA': 'Musah',
    'Mexico': 'Chávez',
    'Canada': 'Buchanan',
    'Panama': 'Ayarza',
    'Haiti': 'Pierrot',
    'Curaçao': 'Hooi',
    'Japan': 'Kubo',
    'South Korea': 'Lee Kang-in',
    'Australia': 'Kuol',
    'Saudi Arabia': 'Al-Ghannam',
    'Qatar': 'Al-Haydos',
    'Iran': 'Mohebbi',
    'Uzbekistan': 'Fayzullaev',
    'Indonesia': 'Struick',
    'Jordan': 'Al-Tamari',
    'Bahrain': 'Al-Dawsari',
    'New Zealand': 'Sheridan',
    'Morocco': 'El Khannouss',
    'Senegal': 'Habib Diarra',
    'Egypt': 'Marmoush',
    'Algeria': 'Belloumi',
    'Ghana': 'Sulemana',
    'Côte d\'Ivoire': 'Adingra',
    'Tunisia': 'Gharbi',
    'South Africa': 'Mokoena',
    'Cabo Verde': 'Dias',
    'default': 'Young Player'
};

class WorldCupSimulator {
    constructor() {
        this.groupStandings = {};
        this.groupMatches = {};
        this.knockoutTeams = [];
        this.knockoutMatches = {};
        this.currentRound = 'round32';
        this.champion = null;
        this.runnerUp = null;
        this.thirdPlace = null;
        this.favoriteTeam = null;
        this.simulationMode = 'REALISTIC'; // 'REALISTIC', 'BALANCED', 'CHAOS'
        this.goldenBoot = {}; // Track scorers: { "Player (Country)": goals }
        this.goldenGlove = {}; // Track clean sheets: { "Goalkeeper (Country)": cleanSheets }
        this.playerPerformance = {}; // Track overall performance for Golden Ball
        this.youngPlayerStats = {}; // Track young player goals/assists
        this.teamCards = {}; // Track yellow/red cards for Fair Play
        this.tournamentStats = {
            totalGoals: 0,
            matchesPlayed: 0
        };
        
        // Card & Injury System
        this.playerCards = {}; // { "Player (Team)": { yellows: 0, suspended: 0 } }
        this.playerInjuries = {}; // { "Player (Team)": matchesOut }
        this.matchEvents = []; // Store dramatic events for display
        this.yellowsResetForSemis = false; // FIFA rule: yellows reset after quarterfinals
        
        this.rounds = ['round32', 'round16', 'quarter', 'semi', 'final'];
        this.roundNames = {
            'round32': 'Round of 32',
            'round16': 'Round of 16',
            'quarter': 'Quarter Finals',
            'semi': 'Semi Finals',
            'final': 'Final'
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.initializeGroups();
    }
    
    bindEvents() {
        document.getElementById('startBtn').addEventListener('click', () => this.showTeamSelection());
        document.getElementById('simulateGroupsBtn').addEventListener('click', () => this.simulateAllGroups());
        document.getElementById('toKnockoutBtn').addEventListener('click', () => this.proceedToKnockout());
        document.getElementById('simulateKnockoutBtn').addEventListener('click', () => this.simulateKnockoutRound());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.reset());
        
        // Team selection events
        document.getElementById('skipTeamBtn').addEventListener('click', () => this.startTournament());
        document.getElementById('confirmTeamBtn').addEventListener('click', () => this.confirmTeamSelection());
        document.getElementById('teamSearchInput').addEventListener('input', (e) => this.filterTeams(e.target.value));
        
        // Match-by-match simulation events
        document.getElementById('simulateNextMatchBtn').addEventListener('click', () => this.simulateNextFavoriteMatch());
        document.getElementById('simulateOtherGroupsBtn').addEventListener('click', () => this.simulateOtherGroupMatches());
        document.getElementById('closeMatchModalBtn').addEventListener('click', () => this.closeMatchModal());
        document.querySelector('.match-modal-backdrop')?.addEventListener('click', (e) => {
            if (e.target.classList.contains('match-modal-backdrop')) {
                this.closeMatchModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('matchResultModal');
                if (modal && !modal.classList.contains('hidden')) {
                    this.closeMatchModal();
                }
            }
        });
        
        // Instant simulation
        document.getElementById('simulateAllBtn').addEventListener('click', () => this.simulateEntireTournament());
        
        // Simulation mode toggle
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setSimulationMode(btn.dataset.mode));
        });
    }
    
    setSimulationMode(mode) {
        this.simulationMode = mode;
        
        // Update UI
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        // Track mode change
        this.trackEvent('Simulation Mode Changed', { mode });
        
        console.log(`Simulation mode set to: ${mode}`);
    }
    
    // Amplitude Event Tracking
    trackEvent(eventName, properties = {}) {
        if (window.amplitude) {
            window.amplitude.track(eventName, {
                ...properties,
                simulationMode: this.simulationMode,
                favoriteTeam: this.favoriteTeam
            });
        }
    }
    
    // === TEAM SELECTION FEATURE ===
    showTeamSelection() {
        this.showScreen('teamSelectScreen');
        this.renderTeamGrid();
    }
    
    renderTeamGrid() {
        const grid = document.getElementById('teamGrid');
        grid.innerHTML = '';
        
        const allTeams = Object.keys(TEAMS).sort();
        
        allTeams.forEach(teamName => {
            const team = TEAMS[teamName];
            const option = document.createElement('div');
            option.className = 'team-option';
            option.dataset.team = teamName;
            option.innerHTML = `
                <span class="team-flag">${team.flag}</span>
                <span class="team-name">${teamName}</span>
            `;
            option.addEventListener('click', () => this.selectTeam(teamName));
            grid.appendChild(option);
        });
    }
    
    filterTeams(query) {
        const options = document.querySelectorAll('.team-option');
        const lowerQuery = query.toLowerCase();
        
        options.forEach(option => {
            const teamName = option.dataset.team.toLowerCase();
            if (teamName.includes(lowerQuery)) {
                option.style.display = 'flex';
            } else {
                option.style.display = 'none';
            }
        });
    }
    
    selectTeam(teamName) {
        // Remove previous selection
        document.querySelectorAll('.team-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked team
        const option = document.querySelector(`.team-option[data-team="${teamName}"]`);
        if (option) {
            option.classList.add('selected');
            this.favoriteTeam = teamName;
            document.getElementById('confirmTeamBtn').disabled = false;
        }
    }
    
    confirmTeamSelection() {
        if (this.favoriteTeam) {
            this.showTeamTracker();
            // Track team selection
            this.trackEvent('Team Selected', {
                team: this.favoriteTeam,
                teamRating: TEAMS[this.favoriteTeam]?.rating,
                confederation: TEAMS[this.favoriteTeam]?.confederation
            });
        }
        this.startTournament();
    }
    
    showTeamTracker() {
        const tracker = document.getElementById('myTeamTracker');
        const team = TEAMS[this.favoriteTeam];
        
        document.getElementById('trackerFlag').textContent = team.flag;
        document.getElementById('trackerName').textContent = this.favoriteTeam;
        document.getElementById('trackerStatus').textContent = 'In Tournament';
        document.getElementById('trackerStatus').className = 'stat-value status-active';
        document.getElementById('trackerWins').textContent = '0';
        document.getElementById('trackerGoals').textContent = '0';
        
        tracker.classList.remove('hidden');
        
        // Show next match button after groups are initialized
        setTimeout(() => this.updateNextMatchButton(), 100);
    }
    
    updateTeamTracker() {
        if (!this.favoriteTeam) return;
        
        let wins = 0;
        let goals = 0;
        let isEliminated = false;
        let isChampion = false;
        
        // Count group stage stats
        Object.keys(GROUPS).forEach(groupName => {
            const team = this.groupStandings[groupName]?.find(t => t.name === this.favoriteTeam);
            if (team) {
                wins += team.won;
                goals += team.goalsFor;
            }
        });
        
        // Count knockout stage stats
        this.rounds.forEach(round => {
            if (this.knockoutMatches[round]) {
                this.knockoutMatches[round].forEach(match => {
                    if (match.played) {
                        if (match.team1 === this.favoriteTeam) {
                            goals += match.score1;
                            if (match.winner === this.favoriteTeam) wins++;
                            else isEliminated = true;
                        } else if (match.team2 === this.favoriteTeam) {
                            goals += match.score2;
                            if (match.winner === this.favoriteTeam) wins++;
                            else isEliminated = true;
                        }
                    }
                });
            }
        });
        
        // Check if champion
        if (this.champion === this.favoriteTeam) {
            isChampion = true;
            isEliminated = false;
        }
        
        // Check if still in tournament after groups
        if (this.knockoutTeams.length > 0 && !this.knockoutTeams.find(t => t.team === this.favoriteTeam)) {
            isEliminated = true;
        }
        
        document.getElementById('trackerWins').textContent = wins;
        document.getElementById('trackerGoals').textContent = goals;
        
        const statusEl = document.getElementById('trackerStatus');
        if (isChampion) {
            statusEl.textContent = '🏆 CHAMPIONS!';
            statusEl.className = 'stat-value status-champion';
        } else if (isEliminated) {
            statusEl.textContent = 'Eliminated';
            statusEl.className = 'stat-value status-eliminated';
        } else {
            statusEl.textContent = 'In Tournament';
            statusEl.className = 'stat-value status-active';
        }
        
        // Show unavailable players
        const unavailableEl = document.getElementById('trackerUnavailable');
        if (unavailableEl) {
            const unavailable = this.getUnavailablePlayers(this.favoriteTeam);
            if (unavailable.length > 0) {
                unavailableEl.innerHTML = `
                    <div class="unavailable-title">⚠️ Unavailable:</div>
                    ${unavailable.map(p => `
                        <div class="unavailable-player ${p.reason}">
                            ${p.reason === 'suspended' ? '🟨' : '🏥'} ${p.player} 
                            <span class="matches-left">(${p.matches} match${p.matches > 1 ? 'es' : ''})</span>
                        </div>
                    `).join('')}
                `;
                unavailableEl.classList.remove('hidden');
            } else {
                unavailableEl.innerHTML = '';
                unavailableEl.classList.add('hidden');
            }
        }
        
        // Update next match button visibility
        this.updateNextMatchButton();
    }
    
    // === MATCH-BY-MATCH SIMULATION ===
    
    findFavoriteTeamGroup() {
        if (!this.favoriteTeam) return null;
        for (const [groupName, teams] of Object.entries(GROUPS)) {
            if (teams.includes(this.favoriteTeam)) {
                return groupName;
            }
        }
        return null;
    }
    
    getNextFavoriteMatch() {
        if (!this.favoriteTeam) return null;
        
        // Check group stage first
        const groupName = this.findFavoriteTeamGroup();
        if (groupName && this.groupMatches[groupName]) {
            const matches = this.groupMatches[groupName];
            for (const match of matches) {
                if (!match.played && (match.home === this.favoriteTeam || match.away === this.favoriteTeam)) {
                    return { type: 'group', groupName, match };
                }
            }
        }
        
        // Check knockout stage
        for (const round of this.rounds) {
            if (this.knockoutMatches[round]) {
                for (const match of this.knockoutMatches[round]) {
                    if (!match.played && match.team1 && match.team2 &&
                        (match.team1 === this.favoriteTeam || match.team2 === this.favoriteTeam)) {
                        return { type: 'knockout', round, match };
                    }
                }
            }
        }
        
        return null;
    }
    
    updateNextMatchButton() {
        const btn = document.getElementById('simulateNextMatchBtn');
        const otherGroupsBtn = document.getElementById('simulateOtherGroupsBtn');
        
        if (!this.favoriteTeam) {
            btn.style.display = 'none';
            otherGroupsBtn.classList.add('hidden');
            return;
        }
        
        const nextMatch = this.getNextFavoriteMatch();
        
        if (nextMatch) {
            btn.style.display = 'inline-flex';
            
            let opponent;
            if (nextMatch.type === 'group') {
                // Group matches use home/away
                opponent = nextMatch.match.home === this.favoriteTeam ? 
                    nextMatch.match.away : nextMatch.match.home;
            } else {
                // Knockout matches use team1/team2
                opponent = nextMatch.match.team1 === this.favoriteTeam ? 
                    nextMatch.match.team2 : nextMatch.match.team1;
            }
            
            const opponentData = TEAMS[opponent];
            
            if (nextMatch.type === 'group') {
                btn.innerHTML = `<span class="btn-icon">▶️</span> vs ${opponentData?.flag || '❓'} ${opponent || 'TBD'}`;
                
                // Check if there are other group matches to simulate
                const allGroupMatches = Object.values(this.groupMatches).flat();
                const unplayedOtherMatches = allGroupMatches.filter(m => 
                    !m.played && 
                    m.home !== this.favoriteTeam && 
                    m.away !== this.favoriteTeam
                );
                
                if (unplayedOtherMatches.length > 0) {
                    otherGroupsBtn.classList.remove('hidden');
                    otherGroupsBtn.innerHTML = '<span class="btn-icon">⏩</span> Simulate Other Matches';
                } else {
                    otherGroupsBtn.classList.add('hidden');
                }
            } else {
                btn.innerHTML = `<span class="btn-icon">▶️</span> ${this.roundNames[nextMatch.round]}: vs ${opponentData?.flag || '❓'} ${opponent || 'TBD'}`;
                
                // Check if there are other knockout matches to simulate in this round
                const currentRound = nextMatch.round;
                const roundMatches = this.knockoutMatches[currentRound] || [];
                const unplayedOtherKnockoutMatches = roundMatches.filter(m => 
                    !m.played && 
                    m.team1 !== this.favoriteTeam && 
                    m.team2 !== this.favoriteTeam
                );
                
                if (unplayedOtherKnockoutMatches.length > 0) {
                    otherGroupsBtn.classList.remove('hidden');
                    otherGroupsBtn.innerHTML = `<span class="btn-icon">⏩</span> Simulate Other ${this.roundNames[currentRound]} Matches`;
                } else {
                    otherGroupsBtn.classList.add('hidden');
                }
            }
        } else {
            btn.style.display = 'none';
            otherGroupsBtn.classList.add('hidden');
        }
    }
    
    async simulateNextFavoriteMatch() {
        const nextMatch = this.getNextFavoriteMatch();
        if (!nextMatch) return;
        
        const { type, match, groupName, round } = nextMatch;
        const homeTeam = type === 'group' ? match.home : match.team1;
        const awayTeam = type === 'group' ? match.away : match.team2;
        
        // Determine stage name
        let stageName = type === 'group' ? `Group ${groupName}` : this.roundNames[round];
        
        // Simulate the match
        const result = this.simulateMatch(homeTeam, awayTeam, type === 'knockout');
        
        // Track scorers for this match (for modal display)
        const matchScorers = this.getMatchScorers(homeTeam, awayTeam, result.homeScore, result.awayScore);
        
        // Update match data
        if (type === 'group') {
            match.homeScore = result.homeScore;
            match.awayScore = result.awayScore;
            match.played = true;
            
            // Update standings directly (same approach as simulateGroup)
            const standings = this.groupStandings[groupName];
            const homeTeamStanding = standings.find(t => t.name === homeTeam);
            const awayTeamStanding = standings.find(t => t.name === awayTeam);
            
            if (homeTeamStanding && awayTeamStanding) {
                homeTeamStanding.played++;
                awayTeamStanding.played++;
                homeTeamStanding.goalsFor += result.homeScore;
                homeTeamStanding.goalsAgainst += result.awayScore;
                awayTeamStanding.goalsFor += result.awayScore;
                awayTeamStanding.goalsAgainst += result.homeScore;
                
                if (result.homeScore > result.awayScore) {
                    homeTeamStanding.won++;
                    homeTeamStanding.points += 3;
                    awayTeamStanding.lost++;
                } else if (result.homeScore < result.awayScore) {
                    awayTeamStanding.won++;
                    awayTeamStanding.points += 3;
                    homeTeamStanding.lost++;
                } else {
                    homeTeamStanding.drawn++;
                    awayTeamStanding.drawn++;
                    homeTeamStanding.points += 1;
                    awayTeamStanding.points += 1;
                }
                console.log('Standings updated:', homeTeam, homeTeamStanding.points, 'pts,', awayTeam, awayTeamStanding.points, 'pts');
            } else {
                console.error('Could not find teams in standings:', homeTeam, awayTeam);
            }
        } else {
            match.score1 = result.homeScore;
            match.score2 = result.awayScore;
            match.winner = result.homeScore > result.awayScore ? match.team1 : match.team2;
            match.played = true;
            
            // Advance winner to next round
            this.advanceWinner(round, match);
        }
        
        // Store events for modal display
        this.lastMatchEvents = result.events || [];
        
        // Generate commentary
        if (window.CommentarySystem) {
            this.commentarySystem = new CommentarySystem();
            this.lastMatchCommentary = this.commentarySystem.generateMatchCommentary(
                homeTeam, awayTeam, result.homeScore, result.awayScore, result.events || []
            );
        }
        
        // Play sound effects
        if (window.soundManager) {
            if (result.homeScore > 0 || result.awayScore > 0) {
                soundManager.playGoal();
            }
            setTimeout(() => soundManager.playFinalWhistle(), 500);
        }
        
        // Check for rivalry match
        this.lastRivalry = window.getRivalry ? getRivalry(homeTeam, awayTeam) : null;
        
        // Generate man of the match
        this.lastMotM = this.generateManOfMatch(homeTeam, awayTeam, result.homeScore, result.awayScore, matchScorers);
        
        // Show match result modal
        this.showMatchResultModal(homeTeam, awayTeam, result.homeScore, result.awayScore, stageName, matchScorers, type === 'knockout' ? match : null);
        
        // Update UI
        console.log('Rendering groups after match...');
        this.renderGroups();
        console.log('Rendering complete');
        if (type === 'knockout') {
            this.renderBracket();
        }
        this.updateTeamTracker();
        this.renderGoldenBoot();
    }
    
    getMatchScorers(homeTeam, awayTeam, homeScore, awayScore) {
        const scorers = [];
        
        // Use new PLAYER_ROSTERS if available
        const homeRoster = PLAYER_ROSTERS ? PLAYER_ROSTERS[homeTeam] : null;
        const awayRoster = PLAYER_ROSTERS ? PLAYER_ROSTERS[awayTeam] : null;
        
        // Get all potential scorers and filter out suspended/injured players
        let homePlayers = homeRoster ? 
            [...homeRoster.forwards, ...homeRoster.midfielders.slice(0, 2)] :
            (FAMOUS_PLAYERS[homeTeam] || FAMOUS_PLAYERS['default']);
        let awayPlayers = awayRoster ?
            [...awayRoster.forwards, ...awayRoster.midfielders.slice(0, 2)] :
            (FAMOUS_PLAYERS[awayTeam] || FAMOUS_PLAYERS['default']);
        
        // Filter out unavailable players (suspended or injured)
        homePlayers = homePlayers.filter(player => this.isPlayerAvailable(player, homeTeam));
        awayPlayers = awayPlayers.filter(player => this.isPlayerAvailable(player, awayTeam));
        
        // Fallback if all star players unavailable - use full roster
        if (homePlayers.length === 0 && homeRoster) {
            homePlayers = [...homeRoster.midfielders, ...homeRoster.defenders]
                .filter(player => this.isPlayerAvailable(player, homeTeam));
            if (homePlayers.length === 0) homePlayers = ['Substitute'];
        }
        if (awayPlayers.length === 0 && awayRoster) {
            awayPlayers = [...awayRoster.midfielders, ...awayRoster.defenders]
                .filter(player => this.isPlayerAvailable(player, awayTeam));
            if (awayPlayers.length === 0) awayPlayers = ['Substitute'];
        }
        
        // Generate random scorers for home team (star players more likely)
        for (let i = 0; i < homeScore; i++) {
            const rand = Math.random();
            let playerIndex;
            if (rand < 0.4) playerIndex = 0;
            else if (rand < 0.6) playerIndex = Math.min(1, homePlayers.length - 1);
            else if (rand < 0.75) playerIndex = Math.min(2, homePlayers.length - 1);
            else playerIndex = Math.floor(Math.random() * homePlayers.length);
            scorers.push({ player: homePlayers[playerIndex], team: homeTeam, flag: TEAMS[homeTeam].flag });
        }
        
        // Generate random scorers for away team
        for (let i = 0; i < awayScore; i++) {
            const rand = Math.random();
            let playerIndex;
            if (rand < 0.4) playerIndex = 0;
            else if (rand < 0.6) playerIndex = Math.min(1, awayPlayers.length - 1);
            else if (rand < 0.75) playerIndex = Math.min(2, awayPlayers.length - 1);
            else playerIndex = Math.floor(Math.random() * awayPlayers.length);
            scorers.push({ player: awayPlayers[playerIndex], team: awayTeam, flag: TEAMS[awayTeam].flag });
        }
        
        return scorers;
    }
    
    // Check if player is available (not suspended or injured)
    isPlayerAvailable(player, teamName) {
        const key = `${player} (${teamName})`;
        
        // Check suspension
        if (this.playerCards[key] && this.playerCards[key].suspended > 0) {
            return false;
        }
        
        // Check injury
        if (this.playerInjuries[key] && this.playerInjuries[key] > 0) {
            return false;
        }
        
        return true;
    }
    
    generateManOfMatch(homeTeam, awayTeam, homeScore, awayScore, scorers) {
        // Man of the Match is typically the top scorer or a player from winning team
        const winningTeam = homeScore > awayScore ? homeTeam : (awayScore > homeScore ? awayTeam : null);
        
        // Count goals per player
        const goalCounts = {};
        scorers.forEach(s => {
            const key = `${s.player}-${s.team}`;
            goalCounts[key] = (goalCounts[key] || 0) + 1;
        });
        
        // Find player with most goals
        let topScorer = null;
        let maxGoals = 0;
        for (const [key, goals] of Object.entries(goalCounts)) {
            if (goals > maxGoals) {
                maxGoals = goals;
                const [player, team] = key.split('-');
                topScorer = { player, team, goals };
            }
        }
        
        // If someone scored 2+, they're likely MotM
        if (topScorer && topScorer.goals >= 2) {
            return {
                player: topScorer.player,
                team: topScorer.team,
                flag: TEAMS[topScorer.team]?.flag,
                reason: `${topScorer.goals} goals`,
                rating: 9.0 + (topScorer.goals * 0.3)
            };
        }
        
        // Otherwise, pick best player from winning team
        const motmTeam = winningTeam || homeTeam;
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[motmTeam] : null;
        
        if (roster) {
            // Random star player
            const stars = [...roster.forwards.slice(0, 2), ...roster.midfielders.slice(0, 2)];
            const player = stars[Math.floor(Math.random() * stars.length)];
            const goalCount = scorers.filter(s => s.player === player && s.team === motmTeam).length;
            
            return {
                player,
                team: motmTeam,
                flag: TEAMS[motmTeam]?.flag,
                reason: goalCount > 0 ? `${goalCount} goal${goalCount > 1 ? 's' : ''}, dominated` : 'Outstanding performance',
                rating: 7.5 + Math.random() * 1.5
            };
        }
        
        return null;
    }
    
    showMatchResultModal(homeTeam, awayTeam, homeScore, awayScore, stageName, scorers, knockoutMatch = null) {
        const modal = document.getElementById('matchResultModal');
        const homeData = TEAMS[homeTeam];
        const awayData = TEAMS[awayTeam];
        
        // Set stage badge
        document.getElementById('matchModalStage').textContent = stageName;
        
        // Set team info
        document.getElementById('modalHomeFlag').textContent = homeData.flag;
        document.getElementById('modalHomeName').textContent = homeTeam;
        document.getElementById('modalAwayFlag').textContent = awayData.flag;
        document.getElementById('modalAwayName').textContent = awayTeam;
        
        // Set scores
        document.getElementById('modalHomeScore').textContent = homeScore;
        document.getElementById('modalAwayScore').textContent = awayScore;
        
        // Determine result for favorite team
        const resultEl = document.getElementById('matchModalResult');
        let resultText = '';
        let resultClass = '';
        
        const isHome = homeTeam === this.favoriteTeam;
        const isAway = awayTeam === this.favoriteTeam;
        
        if (isHome || isAway) {
            const favoriteScore = isHome ? homeScore : awayScore;
            const opponentScore = isHome ? awayScore : homeScore;
            
            if (knockoutMatch) {
                // Knockout match
                if (knockoutMatch.winner === this.favoriteTeam) {
                    resultText = '🎉 VICTORY! ADVANCING!';
                    resultClass = 'advance';
                } else {
                    resultText = '😢 ELIMINATED';
                    resultClass = 'eliminated';
                }
            } else {
                // Group match
                if (favoriteScore > opponentScore) {
                    resultText = '🎉 VICTORY!';
                    resultClass = 'win';
                } else if (favoriteScore < opponentScore) {
                    resultText = '😞 DEFEAT';
                    resultClass = 'loss';
                } else {
                    resultText = '🤝 DRAW';
                    resultClass = 'draw';
                }
            }
        } else {
            // Neutral match
            if (homeScore > awayScore) {
                resultText = `${homeTeam} wins!`;
            } else if (awayScore > homeScore) {
                resultText = `${awayTeam} wins!`;
            } else {
                resultText = 'Draw!';
            }
            resultClass = 'draw';
        }
        
        resultEl.textContent = resultText;
        resultEl.className = `match-modal-result ${resultClass}`;
        
        // Set scorers
        const scorersEl = document.getElementById('matchModalScorers');
        let scorersHtml = '';
        
        if (scorers.length > 0) {
            scorersHtml += `
                <div class="scorers-title">⚽ Goal Scorers</div>
                ${scorers.map(s => `
                    <div class="scorer-item">
                        <span class="scorer-icon">⚽</span>
                        <span>${s.flag} ${s.player}</span>
                    </div>
                `).join('')}
            `;
        }
        
        // Add card/injury events if any
        const events = this.lastMatchEvents || [];
        const cardEvents = events.filter(e => e.type === 'yellow_card' || e.type === 'red_card' || e.type === 'yellow_suspension');
        const injuryEvents = events.filter(e => e.type === 'injury');
        
        if (cardEvents.length > 0) {
            scorersHtml += `
                <div class="scorers-title" style="margin-top: 10px;">📋 Cards</div>
                ${cardEvents.map(e => `
                    <div class="scorer-item ${e.type === 'red_card' ? 'red-card-event' : (e.type === 'yellow_suspension' ? 'yellow-suspension-event' : 'yellow-card-event')}">
                        <span class="scorer-icon">${e.type === 'red_card' ? '🟥' : '🟨'}</span>
                        <span>${TEAMS[e.team].flag} ${e.player}${e.type === 'yellow_suspension' ? ' (SUSPENDED)' : (e.type === 'red_card' ? ' (SENT OFF)' : '')}</span>
                    </div>
                `).join('')}
            `;
        }
        
        if (injuryEvents.length > 0) {
            scorersHtml += `
                <div class="scorers-title" style="margin-top: 10px;">🏥 Injuries</div>
                ${injuryEvents.map(e => `
                    <div class="scorer-item injury-event">
                        <span class="scorer-icon">🏥</span>
                        <span>${TEAMS[e.team].flag} ${e.player} (out ${e.matchesOut} match${e.matchesOut > 1 ? 'es' : ''})</span>
                    </div>
                `).join('')}
            `;
        }
        
        // Add rivalry badge if applicable
        if (this.lastRivalry) {
            scorersHtml += `
                <div class="rivalry-badge" style="margin-top: 15px;">
                    ${this.lastRivalry.icon} ${this.lastRivalry.name}
                </div>
            `;
        }
        
        // Add Man of the Match
        if (this.lastMotM) {
            scorersHtml += `
                <div class="motm-card">
                    <div class="motm-icon">⭐</div>
                    <div class="motm-info">
                        <div class="motm-label">Man of the Match</div>
                        <div class="motm-name">${this.lastMotM.flag || ''} ${this.lastMotM.player || 'Unknown'}</div>
                        <div class="motm-stats">${this.lastMotM.goals ? `${this.lastMotM.goals} goal(s)` : 'Outstanding performance'}</div>
                    </div>
                </div>
            `;
        }
        
        scorersEl.innerHTML = scorersHtml;
        
        // Show modal with animation
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
        
        // Add celebration for wins
        if (resultClass === 'win' || resultClass === 'advance') {
            this.createCelebration();
        }
    }
    
    createCelebration() {
        const modal = document.querySelector('.match-modal-content');
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        
        const colors = ['#FFD700', '#FFA500', '#FF6347', '#32CD32', '#1E90FF'];
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'celebration-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 0.5 + 's';
            particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            celebration.appendChild(particle);
        }
        
        modal.appendChild(celebration);
        
        // Remove celebration after animation
        setTimeout(() => {
            celebration.remove();
        }, 2500);
    }
    
    closeMatchModal() {
        const modal = document.getElementById('matchResultModal');
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            
            // Check tournament state after closing modal
            this.checkTournamentProgress();
        }, 300);
    }
    
    checkTournamentProgress() {
        // Check if all favorite team's group matches are done
        if (this.favoriteTeam) {
            const groupName = this.findFavoriteTeamGroup();
            if (groupName) {
                const matches = this.groupMatches[groupName];
                const teamMatches = matches.filter(m => m.home === this.favoriteTeam || m.away === this.favoriteTeam);
                const allTeamMatchesDone = teamMatches.every(m => m.played);
                const allGroupMatchesDone = matches.every(m => m.played);
                
                if (allTeamMatchesDone && !allGroupMatchesDone) {
                    // Show button to simulate remaining matches
                    document.getElementById('simulateOtherGroupsBtn').classList.remove('hidden');
                }
            }
        }
        
        // Check if tournament is complete
        if (this.currentRound === 'final' && this.knockoutMatches.final && this.knockoutMatches.final[0].played) {
            const finalMatch = this.knockoutMatches.final[0];
            this.champion = finalMatch.winner;
            this.runnerUp = finalMatch.winner === finalMatch.team1 ? finalMatch.team2 : finalMatch.team1;
            
            const semiMatches = this.knockoutMatches.semi;
            const semiLosers = semiMatches.map(m => m.winner === m.team1 ? m.team2 : m.team1);
            this.thirdPlace = semiLosers[0];
            this.fourthPlace = semiLosers[1];
            
            this.updateTeamTracker();
            this.showWinner();
        }
        
        // Update next match button
        this.updateNextMatchButton();
    }
    
    async simulateOtherGroupMatches() {
        const btn = document.getElementById('simulateOtherGroupsBtn');
        btn.disabled = true;
        btn.innerHTML = '<span class="btn-icon">⏳</span> Simulating...';
        
        // Check if we're in knockout stage
        const nextMatch = this.getNextFavoriteMatch();
        
        if (nextMatch && nextMatch.type === 'knockout') {
            // Simulate other knockout matches in the current round
            await this.simulateOtherKnockoutMatches(nextMatch.round);
        } else {
            // Simulate all non-favorite team group matches
            for (const groupName of Object.keys(GROUPS)) {
                const matches = this.groupMatches[groupName];
                
                for (const match of matches) {
                    if (!match.played && match.home !== this.favoriteTeam && match.away !== this.favoriteTeam) {
                        await this.delay(50);
                        const result = this.simulateMatch(match.home, match.away, false);
                        match.homeScore = result.homeScore;
                        match.awayScore = result.awayScore;
                        match.played = true;
                        this.updateGroupStandings(groupName, match);
                    }
                }
            }
            
            // Enable proceed button if all groups complete
            const allComplete = Object.keys(GROUPS).every(g => 
                this.groupMatches[g].every(m => m.played)
            );
            
            if (allComplete) {
                document.getElementById('toKnockoutBtn').disabled = false;
                document.getElementById('simulateGroupsBtn').innerHTML = '<span class="btn-icon">✓</span> All Groups Complete';
                document.getElementById('simulateGroupsBtn').disabled = true;
            }
            
            this.renderGroups();
        }
        
        btn.innerHTML = '<span class="btn-icon">✓</span> Done';
        btn.disabled = false;
        
        this.renderGoldenBoot();
        this.updateTeamTracker();
        this.updateNextMatchButton(); // Update button state
    }
    
    async simulateOtherKnockoutMatches(round) {
        const roundMatches = this.knockoutMatches[round] || [];
        
        for (const match of roundMatches) {
            if (!match.played && match.team1 !== this.favoriteTeam && match.team2 !== this.favoriteTeam) {
                await this.delay(100);
                const result = this.simulateMatch(match.team1, match.team2, true);
                match.score1 = result.homeScore;
                match.score2 = result.awayScore;
                match.winner = result.homeScore > result.awayScore ? match.team1 : match.team2;
                match.played = true;
                
                // Advance winner to next round
                this.advanceWinner(round, match);
                
                // Update bracket display
                this.renderBracket();
            }
        }
    }
    
    // === GOLDEN BOOT FEATURE ===
    assignGoalScorers(teamName, goals) {
        if (goals === 0) return;
        
        // Use new PLAYER_ROSTERS if available, fallback to FAMOUS_PLAYERS
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        const players = roster ? 
            [...roster.forwards, ...roster.midfielders.slice(0, 2)] : 
            (FAMOUS_PLAYERS[teamName] || FAMOUS_PLAYERS['default']);
        const youngPlayers = roster ? 
            (roster.youngStars || []) : 
            [YOUNG_PLAYERS[teamName] || YOUNG_PLAYERS['default']];
        
        // Distribute goals among players (weighted toward star players)
        for (let i = 0; i < goals; i++) {
            const rand = Math.random();
            let playerIndex;
            if (rand < 0.35) playerIndex = 0;      // 35% to star player
            else if (rand < 0.55) playerIndex = 1; // 20% to second
            else if (rand < 0.70) playerIndex = 2; // 15% to third
            else if (rand < 0.82) playerIndex = 3; // 12% to fourth
            else if (rand < 0.92) playerIndex = 4; // 10% to fifth
            else playerIndex = Math.floor(Math.random() * players.length); // 8% anyone
            
            const player = players[Math.min(playerIndex, players.length - 1)];
            const key = `${player} (${teamName})`;
            this.goldenBoot[key] = (this.goldenBoot[key] || 0) + 1;
            
            // Track player performance for Golden Ball
            if (!this.playerPerformance[key]) {
                this.playerPerformance[key] = { goals: 0, assists: 0, team: teamName };
            }
            this.playerPerformance[key].goals++;
            
            // Track young player stats (25% chance the young player scored)
            if (youngPlayers.length > 0 && Math.random() < 0.25) {
                const youngPlayer = youngPlayers[Math.floor(Math.random() * youngPlayers.length)];
                const youngKey = `${youngPlayer} (${teamName})`;
                if (!this.youngPlayerStats[youngKey]) {
                    this.youngPlayerStats[youngKey] = { goals: 0, assists: 0, team: teamName };
                }
                this.youngPlayerStats[youngKey].goals++;
            }
        }
        
        // Add assists (roughly 70% of goals have assists)
        const assists = Math.floor(goals * 0.7);
        const midfielders = roster ? roster.midfielders : players;
        for (let i = 0; i < assists; i++) {
            const rand = Math.random();
            // Midfielders more likely to get assists
            let playerIndex;
            if (rand < 0.5) {
                // 50% from midfielders
                playerIndex = Math.floor(Math.random() * midfielders.length);
                const player = midfielders[playerIndex];
                const key = `${player} (${teamName})`;
                if (!this.playerPerformance[key]) {
                    this.playerPerformance[key] = { goals: 0, assists: 0, team: teamName };
                }
                this.playerPerformance[key].assists++;
            } else {
                // 50% from forwards/other
                playerIndex = Math.floor(Math.random() * players.length);
                const player = players[playerIndex];
                const key = `${player} (${teamName})`;
                if (!this.playerPerformance[key]) {
                    this.playerPerformance[key] = { goals: 0, assists: 0, team: teamName };
                }
                this.playerPerformance[key].assists++;
            }
        }
    }
    
    // === GOLDEN GLOVE FEATURE ===
    trackCleanSheet(teamName, goalsAgainst) {
        // Use new PLAYER_ROSTERS if available
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        const goalkeeper = roster && roster.goalkeepers ? 
            roster.goalkeepers[0] : 
            (GOALKEEPERS[teamName] || GOALKEEPERS['default']);
        const key = `${goalkeeper} (${teamName})`;
        
        if (!this.goldenGlove[key]) {
            this.goldenGlove[key] = { cleanSheets: 0, goalsConceded: 0, matches: 0, team: teamName };
        }
        
        this.goldenGlove[key].matches++;
        this.goldenGlove[key].goalsConceded += goalsAgainst;
        
        if (goalsAgainst === 0) {
            this.goldenGlove[key].cleanSheets++;
        }
    }
    
    // === FAIR PLAY TRACKING ===
    trackCards(teamName) {
        // Simulate cards per match (average 2 yellows, 0.1 red per game)
        if (!this.teamCards[teamName]) {
            this.teamCards[teamName] = { yellow: 0, red: 0 };
        }
        
        // Random cards
        const yellows = Math.floor(Math.random() * 4); // 0-3 yellows
        const red = Math.random() < 0.1 ? 1 : 0; // 10% chance of red
        
        this.teamCards[teamName].yellow += yellows;
        this.teamCards[teamName].red += red;
    }
    
    renderGoldenBoot() {
        const section = document.getElementById('goldenBootSection');
        const list = document.getElementById('goldenBootList');
        
        // Get top 5 scorers
        const scorers = Object.entries(this.goldenBoot)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        if (scorers.length === 0) {
            section.classList.add('hidden');
            return;
        }
        
        section.classList.remove('hidden');
        list.innerHTML = scorers.map(([player, goals], index) => {
            // Extract team name from player string
            const match = player.match(/\((.+)\)$/);
            const teamName = match ? match[1] : '';
            const playerName = player.replace(/ \(.+\)$/, '');
            const team = TEAMS[teamName];
            
            const rankClass = index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : '';
            
            return `
                <div class="scorer-card">
                    <span class="scorer-rank ${rankClass}">${index + 1}</span>
                    <div class="scorer-info">
                        <span class="scorer-name">${playerName}</span>
                        <div class="scorer-team">
                            <span>${team ? team.flag : '🏳️'}</span>
                            <span>${teamName}</span>
                        </div>
                    </div>
                    <span class="scorer-goals">${goals}</span>
                </div>
            `;
        }).join('');
    }
    
    initializeGroups() {
        // Initialize standings for each group
        Object.keys(GROUPS).forEach(groupName => {
            this.groupStandings[groupName] = GROUPS[groupName].map(teamName => ({
                name: teamName,
                ...TEAMS[teamName],
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            }));
            
            // Generate matches for each group
            this.groupMatches[groupName] = this.generateGroupMatches(GROUPS[groupName]);
        });
    }
    
    generateGroupMatches(teams) {
        const matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push({
                    home: teams[i],
                    away: teams[j],
                    homeScore: null,
                    awayScore: null,
                    played: false
                });
            }
        }
        return matches;
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    startTournament() {
        this.showScreen('groupStageScreen');
        this.renderGroups();
        
        // Track tournament start
        this.trackEvent('Tournament Started', {
            hasTeamSelected: !!this.favoriteTeam
        });
        
        // Show commentary panel
        const commentaryPanel = document.getElementById('commentaryPanel');
        if (commentaryPanel) {
            commentaryPanel.classList.remove('hidden');
        }
        
        // Clear previous commentary
        if (window.commentary) {
            window.commentary.clearHistory();
            window.commentary.addToHistory('🏆 FIFA World Cup 2026™ Tournament Begins!', 'champion');
            if (this.favoriteTeam) {
                window.commentary.addToHistory(`📢 Following: ${TEAMS[this.favoriteTeam]?.flag} ${this.favoriteTeam}`, 'info');
            }
        }
        
        // Play whistle sound
        if (window.soundManager) {
            window.soundManager.playWhistle();
        }
        
        // Update match-by-match button visibility
        if (!this.favoriteTeam) {
            document.getElementById('simulateNextMatchBtn').style.display = 'none';
            document.getElementById('simulateOtherGroupsBtn').classList.add('hidden');
        }
    }
    
    renderGroups() {
        const container = document.getElementById('groupsContainer');
        container.innerHTML = '';
        
        Object.keys(GROUPS).forEach(groupName => {
            const groupCard = this.createGroupCard(groupName);
            container.appendChild(groupCard);
        });
    }
    
    createGroupCard(groupName) {
        const standings = this.groupStandings[groupName];
        const matches = this.groupMatches[groupName];
        const allPlayed = matches.every(m => m.played);
        const hasFavorite = this.favoriteTeam && standings.some(t => t.name === this.favoriteTeam);
        
        // Sort standings
        const sortedStandings = [...standings].sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            const gdA = a.goalsFor - a.goalsAgainst;
            const gdB = b.goalsFor - b.goalsAgainst;
            if (gdB !== gdA) return gdB - gdA;
            return b.goalsFor - a.goalsFor;
        });
        
        // Generate match results HTML
        const matchResultsHTML = allPlayed ? `
            <div class="group-matches">
                <div class="matches-title">Match Results</div>
                ${matches.map(match => {
                    const homeTeam = TEAMS[match.home];
                    const awayTeam = TEAMS[match.away];
                    const isFavoriteMatch = this.favoriteTeam && 
                        (match.home === this.favoriteTeam || match.away === this.favoriteTeam);
                    return `
                        <div class="match-result ${isFavoriteMatch ? 'favorite-match' : ''}">
                            <div class="match-team home">
                                <span class="match-flag">${homeTeam.flag}</span>
                                <span class="match-name">${match.home}</span>
                            </div>
                            <div class="match-score">
                                <span class="score">${match.homeScore}</span>
                                <span class="score-divider">-</span>
                                <span class="score">${match.awayScore}</span>
                            </div>
                            <div class="match-team away">
                                <span class="match-name">${match.away}</span>
                                <span class="match-flag">${awayTeam.flag}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        ` : '';
        
        const card = document.createElement('div');
        card.className = `group-card ${hasFavorite ? 'has-favorite' : ''}`;
        card.innerHTML = `
            <div class="group-card-header">
                <h3>Group ${groupName}</h3>
                <span class="group-status ${allPlayed ? 'completed' : ''}">${allPlayed ? 'Completed' : 'Pending'}</span>
            </div>
            <table class="group-table">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedStandings
                        .map((team, index) => {
                            const isFavorite = team.name === this.favoriteTeam;
                            const classes = [];
                            if (index < 2 && allPlayed) classes.push('qualified');
                            if (isFavorite) classes.push('favorite-team');
                            return `
                            <tr class="${classes.join(' ')}">
                                <td>
                                    <div class="team-cell">
                                        <span class="team-flag">${team.flag}</span>
                                        <span class="team-name">${team.name}</span>
                                        ${isFavorite ? '<span class="favorite-star">⭐</span>' : ''}
                                    </div>
                                </td>
                                <td>${team.played}</td>
                                <td>${team.won}</td>
                                <td>${team.drawn}</td>
                                <td>${team.lost}</td>
                                <td class="${(team.goalsFor - team.goalsAgainst) > 0 ? 'gd-positive' : (team.goalsFor - team.goalsAgainst) < 0 ? 'gd-negative' : ''}">${team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}${team.goalsFor - team.goalsAgainst}</td>
                                <td class="points-cell">${team.points}</td>
                            </tr>
                        `;}).join('')}
                </tbody>
            </table>
            ${matchResultsHTML}
        `;
        
        return card;
    }
    
    simulateMatch(homeTeam, awayTeam, isKnockout = false) {
        const home = TEAMS[homeTeam];
        const away = TEAMS[awayTeam];
        const mode = SIMULATION_MODES[this.simulationMode] || SIMULATION_MODES.REALISTIC;
        
        // Calculate team strength based on all attributes (includes suspension/injury penalties)
        const homeStrength = this.calculateTeamStrength(home, mode, homeTeam);
        const awayStrength = this.calculateTeamStrength(away, mode, awayTeam);
        
        // Calculate expected goals based on strength difference and mode
        const strengthDiff = homeStrength - awayStrength;
        const homeAdvantage = home.isHost ? 5 : 3; // Extra boost for host nations
        
        // Base expected goals (adjusted by mode's random weight)
        const baseGoals = 1.3;
        const randomFactor = mode.randomWeight;
        
        // Attack vs Defense matchup
        const homeAttackVsDefense = (home.attack || home.rating) - (away.defense || away.rating);
        const awayAttackVsDefense = (away.attack || away.rating) - (home.defense || home.rating);
        
        let homeExpected = baseGoals + (strengthDiff + homeAdvantage) / 50 + homeAttackVsDefense / 100;
        let awayExpected = baseGoals - (strengthDiff + homeAdvantage) / 50 + awayAttackVsDefense / 100;
        
        // Add randomness based on mode
        homeExpected += (Math.random() - 0.5) * randomFactor * 2;
        awayExpected += (Math.random() - 0.5) * randomFactor * 2;
        
        // Clamp values
        homeExpected = Math.max(0.3, Math.min(4.0, homeExpected));
        awayExpected = Math.max(0.3, Math.min(4.0, awayExpected));
        
        // Generate goals using Poisson-like distribution
        let homeScore = this.poissonRandom(homeExpected);
        let awayScore = this.poissonRandom(awayExpected);
        
        // Upset chance based on mode
        const upsetChance = 0.1 + (mode.randomWeight * 0.3); // 10-40% depending on mode
        if (Math.random() < upsetChance) {
            // Upset boost for weaker team
            if (away.rating < home.rating) {
                awayScore += Math.floor(Math.random() * 2) + 1;
            } else if (home.rating < away.rating) {
                homeScore += Math.floor(Math.random() * 2) + 1;
            }
        }
        
        // Experience factor - experienced teams perform better in tight matches
        if (Math.abs(homeScore - awayScore) <= 1 && Math.random() < 0.3) {
            const homeExp = home.experience || 70;
            const awayExp = away.experience || 70;
            if (homeExp > awayExp + 10) {
                homeScore += Math.random() < 0.6 ? 1 : 0;
            } else if (awayExp > homeExp + 10) {
                awayScore += Math.random() < 0.6 ? 1 : 0;
            }
        }
        
        // For knockout, ensure no draws
        if (isKnockout && homeScore === awayScore) {
            // Extra time / penalties - experience matters!
            const homeExp = home.experience || 70;
            const awayExp = away.experience || 70;
            const homeChance = 0.5 + (homeExp - awayExp) / 200; // Slight edge to experienced teams
            if (Math.random() < homeChance) {
                homeScore += 1;
            } else {
                awayScore += 1;
            }
        }
        
        // Track goal scorers for Golden Boot
        this.assignGoalScorers(homeTeam, homeScore);
        this.assignGoalScorers(awayTeam, awayScore);
        
        // Track clean sheets for Golden Glove
        this.trackCleanSheet(homeTeam, awayScore);
        this.trackCleanSheet(awayTeam, homeScore);
        
        // Track cards for Fair Play
        this.trackCards(homeTeam);
        this.trackCards(awayTeam);
        
        // Process player cards and injuries
        const homeCardEvents = this.processMatchCards(homeTeam, isKnockout);
        const awayCardEvents = this.processMatchCards(awayTeam, isKnockout);
        const homeInjuryEvents = this.processMatchInjuries(homeTeam);
        const awayInjuryEvents = this.processMatchInjuries(awayTeam);
        
        // Decrement suspension/injury counters for next match
        this.decrementSuspensionsAndInjuries();
        
        this.tournamentStats.totalGoals += homeScore + awayScore;
        this.tournamentStats.matchesPlayed++;
        
        return { 
            homeScore, 
            awayScore,
            events: [...homeCardEvents, ...awayCardEvents, ...homeInjuryEvents, ...awayInjuryEvents]
        };
    }
    
    // Process cards for a team in a match
    processMatchCards(teamName, isKnockout = false) {
        const events = [];
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        if (!roster) return events;
        
        const allPlayers = [
            ...roster.forwards,
            ...roster.midfielders,
            ...roster.defenders
        ];
        
        // Yellow card probability: ~3 yellows per match total (both teams)
        // So ~1.5 yellows per team per match
        const yellowChance = 0.12; // 12% per player checked (check ~12 players = ~1.5 yellows)
        const redChance = 0.008; // ~0.8% direct red (rare)
        
        // Check a subset of players for cards
        const playersToCheck = allPlayers.slice(0, 12);
        
        for (const player of playersToCheck) {
            const key = `${player} (${teamName})`;
            
            // Initialize if needed
            if (!this.playerCards[key]) {
                this.playerCards[key] = { yellows: 0, totalYellows: 0, suspended: 0 };
            }
            
            // Skip if player is suspended
            if (this.playerCards[key].suspended > 0) continue;
            
            // Check for injury
            if (this.playerInjuries[key] > 0) continue;
            
            const rand = Math.random();
            
            if (rand < redChance) {
                // Direct red card! Suspended for next match
                this.playerCards[key].suspended = 1;
                events.push({
                    type: 'red_card',
                    player,
                    team: teamName,
                    message: `🟥 RED CARD! ${player} sent off - suspended for next match!`
                });
            } else if (rand < yellowChance) {
                // Yellow card
                this.playerCards[key].yellows++;
                this.playerCards[key].totalYellows++;
                
                // In World Cup: 2 yellows in tournament = 1 match ban
                if (this.playerCards[key].yellows >= 2) {
                    this.playerCards[key].suspended = 1;
                    this.playerCards[key].yellows = 0; // Reset for future
                    events.push({
                        type: 'yellow_suspension',
                        player,
                        team: teamName,
                        message: `🟨🟨 ${player} receives 2nd yellow - SUSPENDED for next match!`
                    });
                } else {
                    events.push({
                        type: 'yellow_card',
                        player,
                        team: teamName,
                        message: `🟨 Yellow card for ${player}`
                    });
                }
            }
        }
        
        return events;
    }
    
    // Process injuries for a team
    processMatchInjuries(teamName) {
        const events = [];
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        if (!roster) return events;
        
        const allPlayers = [
            ...roster.forwards,
            ...roster.midfielders,
            ...roster.defenders,
            ...roster.goalkeepers
        ];
        
        // Injury chance: ~5% chance someone gets injured per match per team
        // But we make it rare by only checking key players
        const keyPlayers = allPlayers.slice(0, 6); // Only star players
        const injuryChance = 0.015; // 1.5% per key player = ~9% someone injured
        
        for (const player of keyPlayers) {
            const key = `${player} (${teamName})`;
            
            // Skip already injured
            if (this.playerInjuries[key] > 0) continue;
            
            if (Math.random() < injuryChance) {
                // Injury! Out for 1-3 matches
                const matchesOut = Math.random() < 0.7 ? 1 : (Math.random() < 0.7 ? 2 : 3);
                this.playerInjuries[key] = matchesOut;
                
                const severity = matchesOut === 1 ? 'minor' : (matchesOut === 2 ? 'moderate' : 'serious');
                events.push({
                    type: 'injury',
                    player,
                    team: teamName,
                    matchesOut,
                    message: `🏥 INJURY! ${player} (${severity}) - out for ${matchesOut} match${matchesOut > 1 ? 'es' : ''}!`
                });
            }
        }
        
        return events;
    }
    
    // Decrement suspension and injury counters after each match
    decrementSuspensionsAndInjuries() {
        for (const key in this.playerCards) {
            if (this.playerCards[key].suspended > 0) {
                this.playerCards[key].suspended--;
            }
        }
        for (const key in this.playerInjuries) {
            if (this.playerInjuries[key] > 0) {
                this.playerInjuries[key]--;
            }
        }
    }
    
    // Get team strength penalty from suspensions and injuries
    getTeamPenalty(teamName) {
        let penalty = 0;
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        if (!roster) return 0;
        
        const starPlayers = roster.forwards.slice(0, 2); // Top 2 forwards
        const keyMidfielders = roster.midfielders.slice(0, 2); // Top 2 mids
        const goalkeeper = roster.goalkeepers ? roster.goalkeepers[0] : null;
        
        // Check star forwards (big impact if missing)
        for (const player of starPlayers) {
            const key = `${player} (${teamName})`;
            if ((this.playerCards[key]?.suspended > 0) || (this.playerInjuries[key] > 0)) {
                penalty += 5; // -5 rating for missing star forward
            }
        }
        
        // Check key midfielders
        for (const player of keyMidfielders) {
            const key = `${player} (${teamName})`;
            if ((this.playerCards[key]?.suspended > 0) || (this.playerInjuries[key] > 0)) {
                penalty += 3; // -3 rating for missing midfielder
            }
        }
        
        // Check goalkeeper (big impact!)
        if (goalkeeper) {
            const key = `${goalkeeper} (${teamName})`;
            if ((this.playerCards[key]?.suspended > 0) || (this.playerInjuries[key] > 0)) {
                penalty += 7; // -7 rating for missing starting GK!
            }
        }
        
        return penalty;
    }
    
    // Get list of unavailable players for a team
    getUnavailablePlayers(teamName) {
        const unavailable = [];
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[teamName] : null;
        if (!roster) return unavailable;
        
        const allPlayers = [
            ...roster.forwards,
            ...roster.midfielders,
            ...roster.defenders,
            ...(roster.goalkeepers || [])
        ];
        
        for (const player of allPlayers) {
            const key = `${player} (${teamName})`;
            if (this.playerCards[key]?.suspended > 0) {
                unavailable.push({ player, reason: 'suspended', matches: this.playerCards[key].suspended });
            } else if (this.playerInjuries[key] > 0) {
                unavailable.push({ player, reason: 'injured', matches: this.playerInjuries[key] });
            }
        }
        
        return unavailable;
    }
    
    calculateTeamStrength(team, mode, teamName = null) {
        // Calculate weighted team strength based on simulation mode
        const rating = team.rating || 70;
        const form = team.form || 70;
        const experience = team.experience || 70;
        const attack = team.attack || rating;
        const defense = team.defense || rating;
        
        // Weighted average based on mode settings
        let strength = (
            rating * mode.ratingWeight +
            form * mode.formWeight +
            experience * mode.experienceWeight +
            (attack + defense) / 2 * (1 - mode.ratingWeight - mode.formWeight - mode.experienceWeight - mode.randomWeight)
        ) / (1 - mode.randomWeight);
        
        // Apply penalty for suspended/injured players
        if (teamName) {
            const penalty = this.getTeamPenalty(teamName);
            strength -= penalty;
        }
        
        // Add random variation based on mode
        const randomVariation = (Math.random() - 0.5) * mode.randomWeight * 20;
        
        return Math.max(40, strength + randomVariation); // Minimum strength of 40
    }
    
    poissonRandom(lambda) {
        const L = Math.exp(-lambda);
        let k = 0;
        let p = 1;
        
        do {
            k++;
            p *= Math.random();
        } while (p > L);
        
        return k - 1;
    }
    
    async simulateEntireTournament() {
        // Track instant simulation start
        this.trackEvent('Instant Simulation Started', {});
        
        // Show loading overlay
        this.showLoadingOverlay('Simulating entire tournament...');
        
        // Skip team selection, go directly to simulation
        this.favoriteTeam = null;
        
        // Initialize groups if not done
        if (Object.keys(this.groupStandings).length === 0) {
            this.initializeGroups();
        }
        
        await this.delay(300);
        
        // Simulate all groups quickly
        this.updateLoadingMessage('Simulating Group Stage...');
        const groups = Object.keys(GROUPS);
        for (const groupName of groups) {
            this.simulateGroup(groupName);
        }
        
        await this.delay(500);
        
        // Set up knockout stage (get qualified teams)
        this.updateLoadingMessage('Setting up Knockout Stage...');
        this.setupKnockoutTeams();
        this.setupKnockoutMatches();
        
        await this.delay(300);
        
        // Simulate all knockout rounds
        for (const round of this.rounds) {
            this.updateLoadingMessage(`Simulating ${this.roundNames[round]}...`);
            await this.delay(200);
            
            const matches = this.knockoutMatches[round];
            for (const match of matches) {
                if (match.team1 && match.team2 && !match.played) {
                    const result = this.simulateMatch(match.team1, match.team2, true);
                    match.score1 = result.homeScore;
                    match.score2 = result.awayScore;
                    match.winner = result.homeScore > result.awayScore ? match.team1 : match.team2;
                    match.played = true;
                    
                    // Advance winner
                    this.advanceWinner(round, match);
                }
            }
            
            this.currentRound = this.getNextRound(round) || round;
        }
        
        // Set champion and runner-up
        const finalMatch = this.knockoutMatches.final[0];
        this.champion = finalMatch.winner;
        this.runnerUp = finalMatch.winner === finalMatch.team1 ? finalMatch.team2 : finalMatch.team1;
        
        // Set 3rd and 4th place
        const semiMatches = this.knockoutMatches.semi;
        const semiLosers = semiMatches.map(m => m.winner === m.team1 ? m.team2 : m.team1);
        this.thirdPlace = semiLosers[0];
        this.fourthPlace = semiLosers[1];
        
        await this.delay(500);
        
        // Hide loading and show winner
        this.hideLoadingOverlay();
        this.showWinner();
    }
    
    showLoadingOverlay(message) {
        let overlay = document.getElementById('loadingOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'loadingOverlay';
            overlay.className = 'loading-overlay';
            overlay.innerHTML = `
                <div class="loading-content">
                    <div class="loading-spinner">⚽</div>
                    <div class="loading-message">${message}</div>
                    <div class="loading-progress"></div>
                </div>
            `;
            document.body.appendChild(overlay);
        } else {
            overlay.querySelector('.loading-message').textContent = message;
        }
        overlay.classList.add('active');
    }
    
    updateLoadingMessage(message) {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.querySelector('.loading-message').textContent = message;
        }
    }
    
    hideLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    }
    
    getNextRound(currentRound) {
        const roundIndex = this.rounds.indexOf(currentRound);
        return this.rounds[roundIndex + 1] || null;
    }
    
    async simulateAllGroups() {
        const btn = document.getElementById('simulateGroupsBtn');
        btn.disabled = true;
        btn.innerHTML = '<span class="btn-icon">⏳</span> Simulating...';
        
        // Add simulating class for animation
        document.querySelectorAll('.group-card').forEach(card => {
            card.classList.add('simulating');
        });
        
        // Simulate each group with delays for visual effect
        const groups = Object.keys(GROUPS);
        
        for (let i = 0; i < groups.length; i++) {
            await this.delay(150);
            this.simulateGroup(groups[i]);
            this.renderGroups();
            this.renderGoldenBoot();
            this.updateTeamTracker();
        }
        
        // Remove simulating class
        document.querySelectorAll('.group-card').forEach(card => {
            card.classList.remove('simulating');
        });
        
        btn.innerHTML = '<span class="btn-icon">✓</span> Groups Complete';
        document.getElementById('toKnockoutBtn').disabled = false;
    }
    
    // Update standings for a single match
    updateGroupStandings(groupName, match) {
        const standings = this.groupStandings[groupName];
        
        if (!standings) {
            console.error('No standings found for group:', groupName);
            return;
        }
        
        const homeTeam = standings.find(t => t.name === match.home);
        const awayTeam = standings.find(t => t.name === match.away);
        
        if (!homeTeam || !awayTeam) {
            console.error('Team not found in standings:', match.home, match.away, standings.map(t => t.name));
            return;
        }
        
        console.log(`Updating standings: ${match.home} ${match.homeScore} - ${match.awayScore} ${match.away}`);
        
        homeTeam.played++;
        awayTeam.played++;
        homeTeam.goalsFor += match.homeScore;
        homeTeam.goalsAgainst += match.awayScore;
        awayTeam.goalsFor += match.awayScore;
        awayTeam.goalsAgainst += match.homeScore;
        
        if (match.homeScore > match.awayScore) {
            homeTeam.won++;
            homeTeam.points += 3;
            awayTeam.lost++;
        } else if (match.homeScore < match.awayScore) {
            awayTeam.won++;
            awayTeam.points += 3;
            homeTeam.lost++;
        } else {
            homeTeam.drawn++;
            awayTeam.drawn++;
            homeTeam.points += 1;
            awayTeam.points += 1;
        }
    }
    
    simulateGroup(groupName) {
        const matches = this.groupMatches[groupName];
        const standings = this.groupStandings[groupName];
        
        matches.forEach(match => {
            if (!match.played) {
                const result = this.simulateMatch(match.home, match.away);
                match.homeScore = result.homeScore;
                match.awayScore = result.awayScore;
                match.played = true;
                
                // Update standings
                const homeTeam = standings.find(t => t.name === match.home);
                const awayTeam = standings.find(t => t.name === match.away);
                
                homeTeam.played++;
                awayTeam.played++;
                homeTeam.goalsFor += result.homeScore;
                homeTeam.goalsAgainst += result.awayScore;
                awayTeam.goalsFor += result.awayScore;
                awayTeam.goalsAgainst += result.homeScore;
                
                if (result.homeScore > result.awayScore) {
                    homeTeam.won++;
                    homeTeam.points += 3;
                    awayTeam.lost++;
                } else if (result.homeScore < result.awayScore) {
                    awayTeam.won++;
                    awayTeam.points += 3;
                    homeTeam.lost++;
                } else {
                    homeTeam.drawn++;
                    awayTeam.drawn++;
                    homeTeam.points++;
                    awayTeam.points++;
                }
            }
        });
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    setupKnockoutTeams() {
        // Get qualified teams from each group (top 2 + best 3rd place teams)
        this.knockoutTeams = [];
        const thirdPlaceTeams = [];
        
        Object.keys(GROUPS).forEach(groupName => {
            const sorted = [...this.groupStandings[groupName]].sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points;
                const gdA = a.goalsFor - a.goalsAgainst;
                const gdB = b.goalsFor - b.goalsAgainst;
                if (gdB !== gdA) return gdB - gdA;
                return b.goalsFor - a.goalsFor;
            });
            
            // Top 2 from each group qualify directly
            this.knockoutTeams.push({
                team: sorted[0].name,
                group: groupName,
                position: 1
            });
            this.knockoutTeams.push({
                team: sorted[1].name,
                group: groupName,
                position: 2
            });
            
            // Collect 3rd place teams
            if (sorted[2]) {
                thirdPlaceTeams.push({
                    team: sorted[2].name,
                    group: groupName,
                    position: 3,
                    points: sorted[2].points,
                    gd: sorted[2].goalsFor - sorted[2].goalsAgainst,
                    gf: sorted[2].goalsFor
                });
            }
        });
        
        // Sort 3rd place teams and take best 8
        thirdPlaceTeams.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.gd !== a.gd) return b.gd - a.gd;
            return b.gf - a.gf;
        });
        
        // Add best 8 third-place teams
        thirdPlaceTeams.slice(0, 8).forEach(t => {
            this.knockoutTeams.push({
                team: t.team,
                group: t.group,
                position: 3
            });
        });
    }
    
    proceedToKnockout() {
        // Setup knockout teams and matches
        this.setupKnockoutTeams();
        this.setupKnockoutMatches();
        
        this.showScreen('knockoutScreen');
        this.renderBracket();
        
        // Update team tracker (check if eliminated during group stage)
        this.updateTeamTracker();
        
        // Update match-by-match button for knockout stage
        if (this.favoriteTeam) {
            this.updateNextMatchButton();
            
            // Check if team qualified
            const qualified = this.knockoutTeams.find(t => t.team === this.favoriteTeam);
            if (!qualified) {
                // Hide the next match button
                document.getElementById('simulateNextMatchBtn').style.display = 'none';
                document.getElementById('simulateOtherGroupsBtn').classList.add('hidden');
                
                // Show elimination notification
                this.showEliminationModal();
            }
        }
    }
    
    showEliminationModal() {
        const teamData = TEAMS[this.favoriteTeam];
        const modal = document.getElementById('matchResultModal');
        if (!modal) return;
        
        // Find team's group stats
        let groupName = '';
        let teamStats = null;
        Object.keys(GROUPS).forEach(g => {
            const standing = this.groupStandings[g]?.find(t => t.name === this.favoriteTeam);
            if (standing) {
                groupName = g;
                teamStats = standing;
            }
        });
        
        // Find team's position in group
        const groupStandings = this.groupStandings[groupName] || [];
        const sorted = [...groupStandings].sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            const gdA = a.goalsFor - a.goalsAgainst;
            const gdB = b.goalsFor - b.goalsAgainst;
            if (gdB !== gdA) return gdB - gdA;
            return b.goalsFor - a.goalsFor;
        });
        const position = sorted.findIndex(t => t.name === this.favoriteTeam) + 1;
        
        // Use existing modal elements
        document.getElementById('matchModalStage').textContent = `GROUP ${groupName} - ELIMINATED`;
        
        // Set team display using home team elements
        document.getElementById('modalHomeFlag').textContent = teamData?.flag || '🏳️';
        document.getElementById('modalHomeName').textContent = this.favoriteTeam;
        document.getElementById('modalHomeScore').textContent = '';
        document.getElementById('modalAwayFlag').textContent = '';
        document.getElementById('modalAwayName').textContent = '';
        document.getElementById('modalAwayScore').textContent = '';
        
        document.getElementById('matchModalResult').innerHTML = `😢 DID NOT QUALIFY`;
        document.getElementById('matchModalResult').className = 'match-modal-result eliminated';
        
        document.getElementById('matchModalScorers').innerHTML = `
            <div style="margin-top: 1rem; text-align: center;">
                <div style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1rem;">
                    Finished ${position}${position === 1 ? 'st' : position === 2 ? 'nd' : position === 3 ? 'rd' : 'th'} in Group ${groupName}
                </div>
                <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem;">
                    <div>
                        <div style="font-size: 1.5rem; font-weight: bold;">${teamStats?.points || 0}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">Points</div>
                    </div>
                    <div>
                        <div style="font-size: 1.5rem; font-weight: bold;">${teamStats?.won || 0}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">Wins</div>
                    </div>
                    <div>
                        <div style="font-size: 1.5rem; font-weight: bold;">${teamStats?.goalsFor || 0}</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">Goals</div>
                    </div>
                </div>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    ${position === 3 ? "Finished 3rd but didn't make the best 8 third-place teams." : 
                      position === 4 ? "Finished last in the group." :
                      "Only top 2 teams and best 8 third-place teams qualify."}
                </p>
                <p style="margin-top: 0.75rem; font-style: italic; color: var(--gold); font-size: 0.9rem;">
                    You can still watch the knockout stage unfold!
                </p>
            </div>
        `;
        
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
    }
    
    setupKnockoutMatches() {
        // 2026 World Cup Round of 32 pairings
        // Winners vs 3rd place, Runners-up vs other group winners/runners-up
        // 16 matches for 32 teams
        const round32Matches = [
            // Match 1-8: Group winners vs best 3rd place teams
            { team1: this.getQualifiedTeam('A', 1), team2: this.getQualifiedTeam('C', 3) || this.getQualifiedTeam('D', 3) || this.getQualifiedTeam('E', 3) },
            { team1: this.getQualifiedTeam('B', 1), team2: this.getQualifiedTeam('F', 3) || this.getQualifiedTeam('G', 3) || this.getQualifiedTeam('H', 3) },
            { team1: this.getQualifiedTeam('C', 1), team2: this.getQualifiedTeam('A', 3) || this.getQualifiedTeam('B', 3) || this.getQualifiedTeam('I', 3) },
            { team1: this.getQualifiedTeam('D', 1), team2: this.getQualifiedTeam('J', 3) || this.getQualifiedTeam('K', 3) || this.getQualifiedTeam('L', 3) },
            { team1: this.getQualifiedTeam('E', 1), team2: this.getQualifiedTeam('B', 2) },
            { team1: this.getQualifiedTeam('F', 1), team2: this.getQualifiedTeam('A', 2) },
            { team1: this.getQualifiedTeam('G', 1), team2: this.getQualifiedTeam('D', 2) },
            { team1: this.getQualifiedTeam('H', 1), team2: this.getQualifiedTeam('C', 2) },
            // Match 9-16: Remaining pairings
            { team1: this.getQualifiedTeam('I', 1), team2: this.getQualifiedTeam('F', 2) },
            { team1: this.getQualifiedTeam('J', 1), team2: this.getQualifiedTeam('E', 2) },
            { team1: this.getQualifiedTeam('K', 1), team2: this.getQualifiedTeam('H', 2) },
            { team1: this.getQualifiedTeam('L', 1), team2: this.getQualifiedTeam('G', 2) },
            { team1: this.getQualifiedTeam('A', 2), team2: this.getQualifiedTeam('L', 2) },
            { team1: this.getQualifiedTeam('B', 2), team2: this.getQualifiedTeam('K', 2) },
            { team1: this.getQualifiedTeam('I', 2), team2: this.getQualifiedTeam('D', 2) },
            { team1: this.getQualifiedTeam('J', 2), team2: this.getQualifiedTeam('C', 2) }
        ];
        
        // Filter out matches with duplicate teams and create clean pairings
        const usedTeams = new Set();
        const cleanMatches = [];
        
        // First, add all qualified teams to a pool
        const teamPool = this.knockoutTeams.map(t => t.team);
        
        // Create balanced Round of 32 pairings
        // Group winners (positions 1) vs runners-up/3rd place from other groups
        const winners = this.knockoutTeams.filter(t => t.position === 1);
        const runnersUp = this.knockoutTeams.filter(t => t.position === 2);
        const thirdPlace = this.knockoutTeams.filter(t => t.position === 3);
        
        // Shuffle for variety
        this.shuffle(runnersUp);
        this.shuffle(thirdPlace);
        
        // Create 16 matches
        const allOpponents = [...runnersUp, ...thirdPlace];
        
        this.knockoutMatches = {
            round32: winners.map((winner, index) => {
                // Find an opponent from a different group
                let opponent = allOpponents.find(o => o.group !== winner.group && !usedTeams.has(o.team));
                if (!opponent) {
                    opponent = allOpponents.find(o => !usedTeams.has(o.team));
                }
                if (opponent) {
                    usedTeams.add(opponent.team);
                }
                return {
                    id: `r32_${index}`,
                    team1: winner.team,
                    team2: opponent ? opponent.team : null,
                    score1: null,
                    score2: null,
                    winner: null,
                    played: false
                };
            }).concat(
                // Remaining matches with leftover teams
                (() => {
                    const remaining = allOpponents.filter(o => !usedTeams.has(o.team));
                    const extraMatches = [];
                    for (let i = 0; i < remaining.length; i += 2) {
                        if (remaining[i] && remaining[i + 1]) {
                            extraMatches.push({
                                id: `r32_${12 + i/2}`,
                                team1: remaining[i].team,
                                team2: remaining[i + 1].team,
                                score1: null,
                                score2: null,
                                winner: null,
                                played: false
                            });
                        }
                    }
                    return extraMatches;
                })()
            ),
            round16: Array(8).fill(null).map((_, i) => ({
                id: `r16_${i}`,
                team1: null,
                team2: null,
                score1: null,
                score2: null,
                winner: null,
                played: false
            })),
            quarter: Array(4).fill(null).map((_, i) => ({
                id: `qf_${i}`,
                team1: null,
                team2: null,
                score1: null,
                score2: null,
                winner: null,
                played: false
            })),
            semi: Array(2).fill(null).map((_, i) => ({
                id: `sf_${i}`,
                team1: null,
                team2: null,
                score1: null,
                score2: null,
                winner: null,
                played: false
            })),
            final: [{
                id: 'final',
                team1: null,
                team2: null,
                score1: null,
                score2: null,
                winner: null,
                played: false
            }]
        };
        
        // Ensure we have exactly 16 Round of 32 matches
        while (this.knockoutMatches.round32.length < 16) {
            this.knockoutMatches.round32.push({
                id: `r32_${this.knockoutMatches.round32.length}`,
                team1: null,
                team2: null,
                score1: null,
                score2: null,
                winner: null,
                played: false
            });
        }
        this.knockoutMatches.round32 = this.knockoutMatches.round32.slice(0, 16);
    }
    
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    getQualifiedTeam(group, position) {
        const qualified = this.knockoutTeams.find(t => t.group === group && t.position === position);
        return qualified ? qualified.team : null;
    }
    
    getBestThirdPlaceTeam(excludeGroups = []) {
        const third = this.knockoutTeams.find(t => 
            t.position === 3 && !excludeGroups.includes(t.group)
        );
        return third ? third.team : null;
    }
    
    renderBracket() {
        const container = document.getElementById('bracketContainer');
        container.innerHTML = '';
        
        const bracket = document.createElement('div');
        bracket.className = 'bracket';
        
        this.rounds.forEach(round => {
            const roundDiv = document.createElement('div');
            roundDiv.className = 'bracket-round';
            roundDiv.innerHTML = `<div class="round-title">${this.roundNames[round]}</div>`;
            
            const matchesDiv = document.createElement('div');
            matchesDiv.className = 'bracket-matches';
            
            this.knockoutMatches[round].forEach(match => {
                const matchDiv = this.createMatchElement(match);
                matchesDiv.appendChild(matchDiv);
            });
            
            roundDiv.appendChild(matchesDiv);
            bracket.appendChild(roundDiv);
        });
        
        container.appendChild(bracket);
        
        // Update button text based on current round
        const btn = document.getElementById('simulateKnockoutBtn');
        const currentRoundMatches = this.knockoutMatches[this.currentRound];
        const allPlayed = currentRoundMatches.every(m => m.played);
        
        if (this.champion) {
            btn.style.display = 'none';
        } else if (allPlayed) {
            const nextRoundIndex = this.rounds.indexOf(this.currentRound) + 1;
            if (nextRoundIndex < this.rounds.length) {
                this.currentRound = this.rounds[nextRoundIndex];
                btn.innerHTML = `<span class="btn-icon">⚡</span> Simulate ${this.roundNames[this.currentRound]}`;
            }
        } else {
            btn.innerHTML = `<span class="btn-icon">⚡</span> Simulate ${this.roundNames[this.currentRound]}`;
        }
    }
    
    createMatchElement(match) {
        const div = document.createElement('div');
        const hasFavorite = this.favoriteTeam && 
            (match.team1 === this.favoriteTeam || match.team2 === this.favoriteTeam);
        div.className = `bracket-match ${match.played ? 'completed' : ''} ${hasFavorite ? 'has-favorite' : ''}`;
        
        const team1Data = match.team1 ? TEAMS[match.team1] : null;
        const team2Data = match.team2 ? TEAMS[match.team2] : null;
        
        const team1Classes = [];
        const team2Classes = [];
        
        if (match.winner === match.team1) team1Classes.push('winner');
        if (match.winner === match.team2) team2Classes.push('winner');
        if (!match.team1) team1Classes.push('pending');
        if (!match.team2) team2Classes.push('pending');
        if (match.team1 === this.favoriteTeam) team1Classes.push('favorite');
        if (match.team2 === this.favoriteTeam) team2Classes.push('favorite');
        
        div.innerHTML = `
            <div class="bracket-team ${team1Classes.join(' ')}">
                <div class="bracket-team-info">
                    <span class="bracket-team-flag">${team1Data ? team1Data.flag : '❓'}</span>
                    <span class="bracket-team-name">${match.team1 || 'TBD'}${match.team1 === this.favoriteTeam ? ' ⭐' : ''}</span>
                </div>
                <span class="bracket-team-score">${match.score1 !== null ? match.score1 : '-'}</span>
            </div>
            <div class="bracket-team ${team2Classes.join(' ')}">
                <div class="bracket-team-info">
                    <span class="bracket-team-flag">${team2Data ? team2Data.flag : '❓'}</span>
                    <span class="bracket-team-name">${match.team2 || 'TBD'}${match.team2 === this.favoriteTeam ? ' ⭐' : ''}</span>
                </div>
                <span class="bracket-team-score">${match.score2 !== null ? match.score2 : '-'}</span>
            </div>
        `;
        
        return div;
    }
    
    async simulateKnockoutRound() {
        const btn = document.getElementById('simulateKnockoutBtn');
        btn.disabled = true;
        btn.innerHTML = '<span class="btn-icon">⏳</span> Simulating...';
        
        const matches = this.knockoutMatches[this.currentRound];
        
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            if (!match.played && match.team1 && match.team2) {
                await this.delay(300);
                
                const result = this.simulateMatch(match.team1, match.team2, true);
                match.score1 = result.homeScore;
                match.score2 = result.awayScore;
                match.winner = result.homeScore > result.awayScore ? match.team1 : match.team2;
                match.played = true;
                
                // Advance winner to next round
                this.advanceWinner(match);
                
                this.renderBracket();
                this.updateTeamTracker();
            }
        }
        
        btn.disabled = false;
        
        // Check if tournament is complete
        if (this.currentRound === 'final' && this.knockoutMatches.final[0].played) {
            const finalMatch = this.knockoutMatches.final[0];
            this.champion = finalMatch.winner;
            this.runnerUp = finalMatch.winner === finalMatch.team1 ? finalMatch.team2 : finalMatch.team1;
            
            // Find 3rd place from semi-final losers (simplified - pick one)
            const semiMatches = this.knockoutMatches.semi;
            const semiLosers = semiMatches.map(m => m.winner === m.team1 ? m.team2 : m.team1);
            this.thirdPlace = semiLosers[0]; // Could simulate 3rd place match
            this.fourthPlace = semiLosers[1];
            
            this.updateTeamTracker();
            this.showWinner();
        }
    }
    
    advanceWinner(round, match) {
        // Handle both (round, match) and (match) signatures for backwards compatibility
        if (typeof round === 'object' && !match) {
            match = round;
            round = this.currentRound;
        }
        
        const currentRoundIndex = this.rounds.indexOf(round);
        if (currentRoundIndex >= this.rounds.length - 1) return;
        
        const nextRound = this.rounds[currentRoundIndex + 1];
        const nextMatches = this.knockoutMatches[nextRound];
        
        // FIFA Rule: Yellow cards reset after quarterfinals
        // Check if all quarterfinal matches are done and we're moving to semi-finals
        if (round === 'quarter' && nextRound === 'semi') {
            const allQuartersDone = this.knockoutMatches.quarter.every(m => m.played);
            if (allQuartersDone && !this.yellowsResetForSemis) {
                this.resetYellowCards();
                this.yellowsResetForSemis = true;
                console.log('⚽ FIFA Rule: Yellow cards have been reset for the semi-finals!');
            }
        }
        
        // Determine which match in next round this winner goes to
        const matchIndex = this.knockoutMatches[round].indexOf(match);
        const nextMatchIndex = Math.floor(matchIndex / 2);
        const isFirstTeam = matchIndex % 2 === 0;
        
        if (nextMatches && nextMatches[nextMatchIndex]) {
            if (isFirstTeam) {
                nextMatches[nextMatchIndex].team1 = match.winner;
            } else {
                nextMatches[nextMatchIndex].team2 = match.winner;
            }
        }
    }
    
    // FIFA Rule: Reset yellow card accumulation after quarterfinals
    resetYellowCards() {
        for (const key in this.playerCards) {
            // Reset yellow count but keep any active suspensions
            this.playerCards[key].yellows = 0;
        }
        
        // Add commentary if available
        if (this.commentarySystem && typeof this.commentarySystem.addToHistory === 'function') {
            this.commentarySystem.addToHistory('📋 FIFA Rule: All yellow card accumulations have been reset for the semi-finals!', 'info');
        }
    }
    
    showWinner() {
        this.showScreen('winnerScreen');
        
        const winnerData = TEAMS[this.champion];
        document.getElementById('winnerFlag').textContent = winnerData.flag;
        document.getElementById('winnerName').textContent = this.champion.toUpperCase();
        
        // Track tournament completion
        this.trackEvent('Tournament Completed', {
            champion: this.champion,
            runnerUp: this.runnerUp,
            thirdPlace: this.thirdPlace,
            totalGoals: this.tournamentStats.totalGoals,
            matchesPlayed: this.tournamentStats.matchesPlayed,
            favoriteTeamResult: this.favoriteTeam ? 
                (this.champion === this.favoriteTeam ? 'champion' : 
                 this.runnerUp === this.favoriteTeam ? 'runner_up' :
                 this.thirdPlace === this.favoriteTeam ? 'third_place' : 'eliminated') 
                : 'no_team_selected'
        });
        
        // Update leaderboard
        if (window.leaderboard) {
            window.leaderboard.recordWin(this.champion);
            window.leaderboard.recordFinal(this.runnerUp);
            if (this.thirdPlace) window.leaderboard.recordSemi(this.thirdPlace);
        }
        
        // Check achievements
        if (window.achievementManager) {
            const newAchievements = window.achievementManager.checkAchievements(this);
            this.displayNewAchievements(newAchievements);
        }
        
        // Play victory sound
        if (window.soundManager) {
            window.soundManager.playVictory();
        }
        
        // Champion commentary
        if (window.commentary) {
            window.commentary.champion(this.champion);
        }
        
        // Calculate stats
        const champStats = this.calculateChampionStats();
        document.getElementById('winnerStats').innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${champStats.wins}</div>
                <div class="stat-label">Matches Won</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${champStats.goalsScored}</div>
                <div class="stat-label">Goals Scored</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${champStats.goalsConceded}</div>
                <div class="stat-label">Goals Conceded</div>
            </div>
        `;
        
        // Render all awards
        this.renderAwards();
        
        // Trigger confetti
        this.createConfetti();
        
        // Play victory fanfare
        if (window.soundManager) {
            soundManager.playVictory();
        }
        
        // Record result in leaderboard
        if (window.leaderboard) {
            leaderboard.recordResult(this.champion, this.runnerUp);
        }
        
        // Check and show achievements
        if (window.achievementSystem) {
            achievementSystem.checkTournamentAchievements(this);
            setTimeout(() => achievementSystem.showNewAchievements(), 1500);
        }
        
        // Render additional panels (leaderboard, share)
        this.renderWinnerExtras();
    }
    
    renderWinnerExtras() {
        // Add share button and leaderboard to winner screen
        let extrasContainer = document.getElementById('winnerExtras');
        if (!extrasContainer) {
            extrasContainer = document.createElement('div');
            extrasContainer.id = 'winnerExtras';
            extrasContainer.className = 'winner-extras';
            document.getElementById('tournamentAwards')?.parentNode?.appendChild(extrasContainer);
        }
        
        let html = `
            <div class="winner-actions">
                <button class="share-btn" onclick="shareResults('${this.champion}', '${this.runnerUp}', '${this.thirdPlace}', '${this.favoriteTeam || ''}', {totalGoals: ${this.tournamentStats.totalGoals}, matchesPlayed: ${this.tournamentStats.matchesPlayed}})">
                    📤 Share Results
                </button>
                <button class="btn btn-outline" onclick="document.getElementById('achievementsModal').classList.add('active')">
                    🏆 View Achievements (${window.achievementSystem?.getUnlockedCount() || 0})
                </button>
            </div>
        `;
        
        // Add leaderboard
        if (window.leaderboard) {
            html += `<div style="margin-top: 2rem;">${leaderboard.renderLeaderboard()}</div>`;
        }
        
        // Check for underdog run
        if (this.favoriteTeam && window.getUnderdogRun) {
            const underdogRun = getUnderdogRun(this, this.favoriteTeam);
            if (underdogRun) {
                html = `
                    <div class="underdog-alert">
                        <div class="underdog-icon">🌟</div>
                        <div class="underdog-message">${underdogRun.message}</div>
                    </div>
                ` + html;
            }
        }
        
        extrasContainer.innerHTML = html;
    }
    
    renderAwards() {
        const awardsContainer = document.getElementById('tournamentAwards');
        if (!awardsContainer) return;
        
        // Get Golden Boot winner
        const goldenBootWinner = this.getGoldenBootWinner();
        
        // Get Golden Ball winner (best player)
        const goldenBallWinner = this.getGoldenBallWinner();
        
        // Get Golden Glove winner (best goalkeeper)
        const goldenGloveWinner = this.getGoldenGloveWinner();
        
        // Get Best Young Player
        const youngPlayerWinner = this.getBestYoungPlayer();
        
        // Get Fair Play winner
        const fairPlayWinner = this.getFairPlayWinner();
        
        // Get podium teams
        const runnerUpData = TEAMS[this.runnerUp];
        const thirdPlaceData = TEAMS[this.thirdPlace];
        
        awardsContainer.innerHTML = `
            <div class="awards-section">
                <h3 class="awards-title">🏅 TOURNAMENT AWARDS</h3>
                
                <div class="podium-section">
                    <div class="podium-item silver">
                        <div class="podium-rank">🥈</div>
                        <div class="podium-flag">${runnerUpData.flag}</div>
                        <div class="podium-name">${this.runnerUp}</div>
                        <div class="podium-label">Runner-Up</div>
                    </div>
                    <div class="podium-item gold">
                        <div class="podium-rank">🥇</div>
                        <div class="podium-flag">${TEAMS[this.champion].flag}</div>
                        <div class="podium-name">${this.champion}</div>
                        <div class="podium-label">Champion</div>
                    </div>
                    <div class="podium-item bronze">
                        <div class="podium-rank">🥉</div>
                        <div class="podium-flag">${thirdPlaceData.flag}</div>
                        <div class="podium-name">${this.thirdPlace}</div>
                        <div class="podium-label">Third Place</div>
                    </div>
                </div>
                
                <div class="individual-awards">
                    <div class="award-card golden-boot">
                        <div class="award-icon">👟</div>
                        <div class="award-name">Golden Boot</div>
                        <div class="award-subtitle">Top Scorer</div>
                        <div class="award-winner">
                            <span class="winner-flag">${goldenBootWinner.flag}</span>
                            <span class="winner-name">${goldenBootWinner.player}</span>
                        </div>
                        <div class="award-stat">${goldenBootWinner.goals} Goals</div>
                    </div>
                    
                    <div class="award-card golden-ball">
                        <div class="award-icon">⚽</div>
                        <div class="award-name">Golden Ball</div>
                        <div class="award-subtitle">Best Player</div>
                        <div class="award-winner">
                            <span class="winner-flag">${goldenBallWinner.flag}</span>
                            <span class="winner-name">${goldenBallWinner.player}</span>
                        </div>
                        <div class="award-stat">${goldenBallWinner.goals}G ${goldenBallWinner.assists}A</div>
                    </div>
                    
                    <div class="award-card golden-glove">
                        <div class="award-icon">🧤</div>
                        <div class="award-name">Golden Glove</div>
                        <div class="award-subtitle">Best Goalkeeper</div>
                        <div class="award-winner">
                            <span class="winner-flag">${goldenGloveWinner.flag}</span>
                            <span class="winner-name">${goldenGloveWinner.player}</span>
                        </div>
                        <div class="award-stat">${goldenGloveWinner.cleanSheets} Clean Sheets</div>
                    </div>
                    
                    <div class="award-card young-player">
                        <div class="award-icon">⭐</div>
                        <div class="award-name">Best Young Player</div>
                        <div class="award-subtitle">U-21 Standout</div>
                        <div class="award-winner">
                            <span class="winner-flag">${youngPlayerWinner.flag}</span>
                            <span class="winner-name">${youngPlayerWinner.player}</span>
                        </div>
                        <div class="award-stat">${youngPlayerWinner.goals}G ${youngPlayerWinner.assists}A</div>
                    </div>
                    
                    <div class="award-card fair-play">
                        <div class="award-icon">🤝</div>
                        <div class="award-name">Fair Play Award</div>
                        <div class="award-subtitle">Best Conduct</div>
                        <div class="award-winner">
                            <span class="winner-flag">${fairPlayWinner.flag}</span>
                            <span class="winner-name">${fairPlayWinner.team}</span>
                        </div>
                        <div class="award-stat">${fairPlayWinner.yellow}Y ${fairPlayWinner.red}R</div>
                    </div>
                </div>
                
                <div class="tournament-stats-summary">
                    <h4>📊 Tournament Statistics</h4>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div class="stat-number">${this.tournamentStats.totalGoals}</div>
                            <div class="stat-desc">Total Goals</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number">${this.tournamentStats.matchesPlayed}</div>
                            <div class="stat-desc">Matches Played</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number">${(this.tournamentStats.totalGoals / this.tournamentStats.matchesPlayed).toFixed(2)}</div>
                            <div class="stat-desc">Goals Per Match</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    getGoldenBootWinner() {
        const scorers = Object.entries(this.goldenBoot).sort((a, b) => b[1] - a[1]);
        if (scorers.length === 0) return { player: 'N/A', goals: 0, flag: '🏳️' };
        
        const [playerKey, goals] = scorers[0];
        const match = playerKey.match(/(.+) \((.+)\)/);
        const player = match ? match[1] : playerKey;
        const team = match ? match[2] : 'Unknown';
        const flag = TEAMS[team]?.flag || '🏳️';
        
        return { player, goals, flag, team };
    }
    
    getGoldenBallWinner() {
        // Best player based on goals + assists * 0.75
        const players = Object.entries(this.playerPerformance)
            .map(([key, stats]) => ({
                key,
                score: stats.goals + (stats.assists * 0.75),
                ...stats
            }))
            .sort((a, b) => b.score - a.score);
        
        if (players.length === 0) return { player: 'N/A', goals: 0, assists: 0, flag: '🏳️' };
        
        const winner = players[0];
        const match = winner.key.match(/(.+) \((.+)\)/);
        const player = match ? match[1] : winner.key;
        const team = match ? match[2] : 'Unknown';
        const flag = TEAMS[team]?.flag || '🏳️';
        
        return { player, goals: winner.goals, assists: winner.assists, flag, team };
    }
    
    getGoldenGloveWinner() {
        // Best goalkeeper based on clean sheets, then goals conceded per match
        const keepers = Object.entries(this.goldenGlove)
            .filter(([_, stats]) => stats.matches >= 3) // Must have played 3+ matches
            .map(([key, stats]) => ({
                key,
                score: stats.cleanSheets * 100 - stats.goalsConceded,
                ...stats
            }))
            .sort((a, b) => b.score - a.score);
        
        if (keepers.length === 0) {
            // If no one has 3+ matches, just pick the one with most clean sheets
            const allKeepers = Object.entries(this.goldenGlove)
                .sort((a, b) => b[1].cleanSheets - a[1].cleanSheets);
            if (allKeepers.length === 0) return { player: 'N/A', cleanSheets: 0, flag: '🏳️' };
            
            const [key, stats] = allKeepers[0];
            const match = key.match(/(.+) \((.+)\)/);
            const player = match ? match[1] : key;
            const team = match ? match[2] : 'Unknown';
            const flag = TEAMS[team]?.flag || '🏳️';
            
            return { player, cleanSheets: stats.cleanSheets, flag, team };
        }
        
        const winner = keepers[0];
        const match = winner.key.match(/(.+) \((.+)\)/);
        const player = match ? match[1] : winner.key;
        const team = match ? match[2] : 'Unknown';
        const flag = TEAMS[team]?.flag || '🏳️';
        
        return { player, cleanSheets: winner.cleanSheets, flag, team };
    }
    
    getBestYoungPlayer() {
        const youngPlayers = Object.entries(this.youngPlayerStats)
            .map(([key, stats]) => ({
                key,
                score: stats.goals + (stats.assists * 0.5),
                ...stats
            }))
            .sort((a, b) => b.score - a.score);
        
        if (youngPlayers.length === 0) {
            // Fallback: pick champion's young player
            const youngPlayer = YOUNG_PLAYERS[this.champion] || 'Young Star';
            const flag = TEAMS[this.champion]?.flag || '🏳️';
            return { player: youngPlayer, goals: 1, assists: 1, flag, team: this.champion };
        }
        
        const winner = youngPlayers[0];
        const match = winner.key.match(/(.+) \((.+)\)/);
        const player = match ? match[1] : winner.key;
        const team = match ? match[2] : 'Unknown';
        const flag = TEAMS[team]?.flag || '🏳️';
        
        return { player, goals: winner.goals, assists: winner.assists || 0, flag, team };
    }
    
    getFairPlayWinner() {
        // Team with lowest cards (weighted: yellow = 1, red = 3)
        const teams = Object.entries(this.teamCards)
            .map(([team, cards]) => ({
                team,
                score: cards.yellow + (cards.red * 3),
                ...cards
            }))
            .sort((a, b) => a.score - b.score);
        
        if (teams.length === 0) {
            const flag = TEAMS[this.champion]?.flag || '🏳️';
            return { team: this.champion, yellow: 0, red: 0, flag };
        }
        
        const winner = teams[0];
        const flag = TEAMS[winner.team]?.flag || '🏳️';
        
        return { team: winner.team, yellow: winner.yellow, red: winner.red, flag };
    }
    
    calculateChampionStats() {
        let wins = 0;
        let goalsScored = 0;
        let goalsConceded = 0;
        
        // Count knockout wins and goals
        this.rounds.forEach(round => {
            this.knockoutMatches[round].forEach(match => {
                if (match.played) {
                    if (match.team1 === this.champion) {
                        if (match.winner === this.champion) wins++;
                        goalsScored += match.score1;
                        goalsConceded += match.score2;
                    } else if (match.team2 === this.champion) {
                        if (match.winner === this.champion) wins++;
                        goalsScored += match.score2;
                        goalsConceded += match.score1;
                    }
                }
            });
        });
        
        // Find champion's group and add group stage stats
        Object.keys(GROUPS).forEach(groupName => {
            const team = this.groupStandings[groupName].find(t => t.name === this.champion);
            if (team) {
                wins += team.won;
                goalsScored += team.goalsFor;
                goalsConceded += team.goalsAgainst;
            }
        });
        
        return { wins, goalsScored, goalsConceded };
    }
    
    createConfetti() {
        const container = document.getElementById('confetti');
        container.innerHTML = '';
        
        const colors = ['#e63946', '#f4a261', '#ffd700', '#2a9d8f', '#1d3557', '#ffffff'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            container.appendChild(confetti);
        }
    }
    
    // Display newly unlocked achievements
    displayNewAchievements(achievements) {
        if (!achievements || achievements.length === 0) return;
        
        const container = document.getElementById('newAchievements');
        if (!container) return;
        
        container.innerHTML = `
            <h4>🎉 Achievements Unlocked!</h4>
            ${achievements.map(a => `
                <div class="new-achievement-item">
                    <span class="achievement-icon">${a.icon}</span>
                    <div>
                        <div class="achievement-name">${a.name}</div>
                        <div class="achievement-desc">${a.description}</div>
                    </div>
                </div>
            `).join('')}
        `;
        container.classList.remove('hidden');
    }
    
    // Get data for sharing
    getShareData() {
        const goldenBootWinner = this.getGoldenBootWinner();
        return {
            champion: this.champion,
            runnerUp: this.runnerUp,
            thirdPlace: this.thirdPlace,
            goldenBoot: goldenBootWinner ? `${goldenBootWinner.player} (${goldenBootWinner.goals} goals)` : null,
            mode: this.simulationMode,
            favoriteTeam: this.favoriteTeam
        };
    }
    
    // Generate Man of the Match
    generateManOfMatch(homeTeam, awayTeam, homeScore, awayScore, scorers) {
        // Try external function first
        if (window.calculateManOfMatch) {
            const result = calculateManOfMatch(homeTeam, awayTeam, homeScore, awayScore, scorers, this.lastMatchEvents);
            if (result) return result;
        }
        
        // Fallback: pick top scorer or random star player
        if (scorers && scorers.length > 0) {
            // Count goals per player
            const goalCounts = {};
            scorers.forEach(s => {
                const key = `${s.player}|${s.team}`;
                goalCounts[key] = (goalCounts[key] || 0) + 1;
            });
            
            // Find top scorer
            let topScorer = scorers[0];
            let maxGoals = 1;
            for (const [key, goals] of Object.entries(goalCounts)) {
                if (goals > maxGoals) {
                    maxGoals = goals;
                    const [player, team] = key.split('|');
                    topScorer = { player, team, flag: TEAMS[team]?.flag, goals };
                }
            }
            
            return {
                player: topScorer.player,
                team: topScorer.team,
                flag: topScorer.flag || TEAMS[topScorer.team]?.flag,
                goals: maxGoals
            };
        }
        
        // No scorers - pick star player from winning team
        const winningTeam = homeScore > awayScore ? homeTeam : (awayScore > homeScore ? awayTeam : homeTeam);
        const roster = PLAYER_ROSTERS ? PLAYER_ROSTERS[winningTeam] : null;
        const player = roster ? roster.forwards[0] : 'Star Player';
        
        return {
            player: player,
            team: winningTeam,
            flag: TEAMS[winningTeam]?.flag,
            goals: 0
        };
    }
    
    reset() {
        // Track reset/play again
        this.trackEvent('Tournament Reset', {
            previousChampion: this.champion,
            previousMode: this.simulationMode
        });
        
        // Reset all state
        this.groupStandings = {};
        this.groupMatches = {};
        this.knockoutTeams = [];
        this.knockoutMatches = {};
        this.currentRound = 'round32';
        this.champion = null;
        this.runnerUp = null;
        this.thirdPlace = null;
        this.fourthPlace = null;
        this.favoriteTeam = null;
        // Note: Keep simulationMode - user may want to keep their preference
        this.goldenBoot = {};
        this.goldenGlove = {};
        this.playerPerformance = {};
        this.youngPlayerStats = {};
        this.teamCards = {};
        this.tournamentStats = {
            totalGoals: 0,
            matchesPlayed: 0
        };
        // Reset card & injury tracking
        this.playerCards = {};
        this.playerInjuries = {};
        this.yellowsResetForSemis = false;
        this.matchEvents = [];
        this.lastMatchEvents = [];
        
        // Reinitialize
        this.initializeGroups();
        
        // Reset UI
        document.getElementById('simulateGroupsBtn').disabled = false;
        document.getElementById('simulateGroupsBtn').innerHTML = '<span class="btn-icon">⚡</span> Simulate All Groups';
        document.getElementById('toKnockoutBtn').disabled = true;
        document.getElementById('simulateKnockoutBtn').style.display = 'inline-flex';
        document.getElementById('simulateKnockoutBtn').disabled = false;
        document.getElementById('myTeamTracker').classList.add('hidden');
        document.getElementById('goldenBootSection').classList.add('hidden');
        document.getElementById('confirmTeamBtn').disabled = true;
        document.querySelectorAll('.team-option').forEach(opt => opt.classList.remove('selected'));
        document.getElementById('teamSearchInput').value = '';
        
        // Reset match-by-match buttons
        document.getElementById('simulateNextMatchBtn').style.display = 'none';
        document.getElementById('simulateOtherGroupsBtn').classList.add('hidden');
        document.getElementById('simulateOtherGroupsBtn').disabled = false;
        document.getElementById('simulateOtherGroupsBtn').innerHTML = '<span class="btn-icon">⏩</span> Simulate Other Matches';
        
        this.showScreen('welcomeScreen');
    }
}

// Initialize simulator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.simulator = new WorldCupSimulator();
    
    // Update achievements modal content
    if (window.achievementSystem) {
        const content = document.getElementById('achievementsContent');
        if (content) {
            content.innerHTML = achievementSystem.renderAchievementsPanel();
        }
    }
});

// Sound toggle function
function toggleSound() {
    if (window.soundManager) {
        const enabled = soundManager.toggle();
        const btn = document.getElementById('soundToggle');
        btn.textContent = enabled ? '🔊' : '🔇';
        btn.classList.toggle('muted', !enabled);
        
        if (enabled) {
            soundManager.playClick();
        }
    }
}

window.toggleSound = toggleSound;
