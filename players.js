// FIFA World Cup 2026 - Complete Player Rosters
// At least 11 players per team with positions
// Sources: National team announcements, FIFA, UEFA, Transfermarkt

const PLAYER_ROSTERS = {
    // ===== CONMEBOL =====
    
    'Argentina': {
        forwards: ['Messi', 'Lautaro Martínez', 'Julián Álvarez', 'Ángel Di María', 'Garnacho'],
        midfielders: ['De Paul', 'Enzo Fernández', 'Mac Allister', 'Lo Celso', 'Paredes'],
        defenders: ['Romero', 'Otamendi', 'Lisandro Martínez', 'Molina', 'Acuña', 'Tagliafico'],
        goalkeepers: ['E. Martínez', 'Rulli'],
        youngStars: ['Garnacho', 'Enzo Fernández']
    },
    
    'Brazil': {
        forwards: ['Vini Jr', 'Rodrygo', 'Endrick', 'Raphinha', 'Richarlison'],
        midfielders: ['Paquetá', 'Bruno Guimarães', 'Casemiro', 'Gerson', 'João Gomes'],
        defenders: ['Marquinhos', 'Militão', 'Gabriel Magalhães', 'Danilo', 'Wendell'],
        goalkeepers: ['Alisson', 'Ederson'],
        youngStars: ['Endrick', 'Savinho']
    },
    
    'Uruguay': {
        forwards: ['Darwin Núñez', 'Luis Suárez', 'Pellistri', 'De Arrascaeta'],
        midfielders: ['Valverde', 'Ugarte', 'Bentancur', 'De la Cruz', 'Nicolás de la Cruz'],
        defenders: ['Araujo', 'Giménez', 'Olivera', 'Nández', 'Viña'],
        goalkeepers: ['Rochet', 'Muslera'],
        youngStars: ['Pellistri', 'Ugarte']
    },
    
    'Colombia': {
        forwards: ['Luis Díaz', 'Jhon Córdoba', 'Jhon Durán', 'Rafael Santos Borré'],
        midfielders: ['James Rodríguez', 'Jhon Arias', 'Jefferson Lerma', 'Mateus Uribe', 'Richard Ríos'],
        defenders: ['Davinson Sánchez', 'Yerry Mina', 'Johan Mojica', 'Daniel Muñoz', 'Carlos Cuesta'],
        goalkeepers: ['Camilo Vargas', 'David Ospina'],
        youngStars: ['Jhon Durán', 'Richard Ríos']
    },
    
    'Ecuador': {
        forwards: ['Enner Valencia', 'Kevin Rodríguez', 'Jordy Caicedo', 'Michael Estrada'],
        midfielders: ['Moisés Caicedo', 'Kendry Páez', 'Alan Franco', 'Jeremy Sarmiento', 'Ángel Mena'],
        defenders: ['Piero Hincapié', 'Félix Torres', 'Pervis Estupiñán', 'Byron Castillo', 'Robert Arboleda'],
        goalkeepers: ['Galíndez', 'Alexander Domínguez'],
        youngStars: ['Kendry Páez', 'Moisés Caicedo']
    },
    
    'Paraguay': {
        forwards: ['Miguel Almirón', 'Julio Enciso', 'Adam Bareiro', 'Antonio Sanabria'],
        midfielders: ['Ángel Romero', 'Matías Rojas', 'Andrés Cubas', 'Diego Gómez', 'Oscar Romero'],
        defenders: ['Gustavo Gómez', 'Omar Alderete', 'Junior Alonso', 'Alberto Espínola', 'Fabián Balbuena'],
        goalkeepers: ['Rodrigo Fernández', 'Carlos Coronel'],
        youngStars: ['Julio Enciso', 'Diego Gómez']
    },
    
    // ===== UEFA - TOP TEAMS =====
    
    'France': {
        forwards: ['Mbappé', 'Griezmann', 'Thuram', 'Kolo Muani', 'Dembélé'],
        midfielders: ['Tchouaméni', 'Camavinga', 'Kanté', 'Rabiot', 'Zaïre-Emery'],
        defenders: ['Upamecano', 'Konaté', 'Saliba', 'Theo Hernández', 'Koundé'],
        goalkeepers: ['Maignan', 'Areola'],
        youngStars: ['Zaïre-Emery', 'Camavinga']
    },
    
    'England': {
        forwards: ['Kane', 'Saka', 'Rashford', 'Foden', 'Palmer'],
        midfielders: ['Bellingham', 'Rice', 'Mainoo', 'Gallagher', 'Alexander-Arnold'],
        defenders: ['Walker', 'Stones', 'Guehi', 'Trippier', 'Shaw', 'Konsa'],
        goalkeepers: ['Pickford', 'Pope'],
        youngStars: ['Mainoo', 'Palmer']
    },
    
    'Spain': {
        forwards: ['Yamal', 'Nico Williams', 'Morata', 'Oyarzabal', 'Ferran Torres'],
        midfielders: ['Pedri', 'Rodri', 'Fabián Ruiz', 'Dani Olmo', 'Gavi'],
        defenders: ['Carvajal', 'Cucurella', 'Laporte', 'Le Normand', 'Nacho', 'Grimaldo'],
        goalkeepers: ['Unai Simón', 'David Raya'],
        youngStars: ['Yamal', 'Gavi']
    },
    
    'Germany': {
        forwards: ['Musiala', 'Havertz', 'Wirtz', 'Füllkrug', 'Sané'],
        midfielders: ['Kroos', 'Gündoğan', 'Kimmich', 'Andrich', 'Pavlović'],
        defenders: ['Rüdiger', 'Tah', 'Schlotterbeck', 'Raum', 'Mittelstädt'],
        goalkeepers: ['Neuer', 'Ter Stegen'],
        youngStars: ['Musiala', 'Wirtz']
    },
    
    'Portugal': {
        forwards: ['Ronaldo', 'Rafael Leão', 'Diogo Jota', 'Gonçalo Ramos', 'Francisco Conceição'],
        midfielders: ['Bruno Fernandes', 'Vitinha', 'Bernardo Silva', 'João Palhinha', 'Rúben Neves'],
        defenders: ['Rúben Dias', 'Pepe', 'Nuno Mendes', 'João Cancelo', 'Diogo Dalot'],
        goalkeepers: ['Diogo Costa', 'José Sá'],
        youngStars: ['Francisco Conceição', 'Vitinha']
    },
    
    'Netherlands': {
        forwards: ['Gakpo', 'Depay', 'Simons', 'Weghorst', 'Malen'],
        midfielders: ['Frenkie de Jong', 'Gravenberch', 'Reijnders', 'Schouten', 'Wijnaldum'],
        defenders: ['Van Dijk', 'De Ligt', 'De Vrij', 'Dumfries', 'Aké'],
        goalkeepers: ['Verbruggen', 'Flekken'],
        youngStars: ['Simons', 'Gravenberch']
    },
    
    'Belgium': {
        forwards: ['Lukaku', 'Doku', 'Openda', 'Trossard', 'Bakayoko'],
        midfielders: ['De Bruyne', 'Tielemans', 'Onana', 'Mangala', 'Vanaken'],
        defenders: ['Vertonghen', 'Faes', 'Theate', 'Castagne', 'De Cuyper'],
        goalkeepers: ['Casteels', 'Mignolet'],
        youngStars: ['Doku', 'Openda']
    },
    
    'Croatia': {
        forwards: ['Kramarić', 'Petković', 'Budimir', 'Oršić'],
        midfielders: ['Modrić', 'Kovačić', 'Brozović', 'Majer', 'Pašalić'],
        defenders: ['Gvardiol', 'Lovren', 'Šutalo', 'Juranović', 'Sosa'],
        goalkeepers: ['Livaković', 'Ivanušec'],
        youngStars: ['Gvardiol', 'Majer']
    },
    
    'Switzerland': {
        forwards: ['Shaqiri', 'Embolo', 'Okafor', 'Ndoye', 'Zeqiri'],
        midfielders: ['Xhaka', 'Freuler', 'Aebischer', 'Sow', 'Rieder'],
        defenders: ['Akanji', 'Elvedi', 'Rodríguez', 'Widmer', 'Schär'],
        goalkeepers: ['Sommer', 'Köhn'],
        youngStars: ['Ndoye', 'Rieder']
    },
    
    'Austria': {
        forwards: ['Arnautović', 'Gregoritsch', 'Baumgartner', 'Schmid'],
        midfielders: ['Sabitzer', 'Laimer', 'Seiwald', 'Grillitsch', 'Wimmer'],
        defenders: ['Alaba', 'Danso', 'Wöber', 'Posch', 'Prass'],
        goalkeepers: ['Pentz', 'Lindner'],
        youngStars: ['Baumgartner', 'Seiwald']
    },
    
    'Ukraine': {
        forwards: ['Mudryk', 'Dovbyk', 'Yaremchuk', 'Zubkov'],
        midfielders: ['Zinchenko', 'Malinovskyi', 'Sudakov', 'Shaparenko', 'Stepanenko'],
        defenders: ['Zabarnyi', 'Matviyenko', 'Bondar', 'Tymchyk', 'Mykolenko'],
        goalkeepers: ['Lunin', 'Trubin'],
        youngStars: ['Mudryk', 'Sudakov']
    },
    
    'Poland': {
        forwards: ['Lewandowski', 'Milik', 'Świderski', 'Piątek'],
        midfielders: ['Zieliński', 'Szymański', 'Moder', 'Frankowski', 'Zalewski'],
        defenders: ['Kiwior', 'Bednarek', 'Dawidowicz', 'Bereszyński', 'Cash'],
        goalkeepers: ['Szczęsny', 'Skorupski'],
        youngStars: ['Zalewski', 'Moder']
    },
    
    'Turkey': {
        forwards: ['Yıldız', 'Aktürkoğlu', 'Enes Ünal', 'Cenk Tosun'],
        midfielders: ['Çalhanoğlu', 'Kökcü', 'Güler', 'Kahveci', 'Yazıcı'],
        defenders: ['Çelik', 'Demiral', 'Kabak', 'Müldür', 'Kadioglu'],
        goalkeepers: ['Günok', 'Bayındır'],
        youngStars: ['Yıldız', 'Güler']
    },
    
    'Scotland': {
        forwards: ['Adams', 'Dykes', 'Christie', 'Morgan'],
        midfielders: ['McTominay', 'McGinn', 'Gilmour', 'McLean', 'McGregor'],
        defenders: ['Robertson', 'Tierney', 'Hendry', 'Porteous', 'McKenna'],
        goalkeepers: ['Gunn', 'Gordon'],
        youngStars: ['Gilmour', 'McTominay']
    },
    
    'Wales': {
        forwards: ['Bale', 'James', 'Johnson', 'Moore'],
        midfielders: ['Ramsey', 'Wilson', 'Ampadu', 'Allen', 'Colwill'],
        defenders: ['Davies', 'Rodon', 'Mepham', 'N. Williams', 'Roberts'],
        goalkeepers: ['Ward', 'Hennessey'],
        youngStars: ['James', 'Colwill']
    },
    
    'Norway': {
        forwards: ['Haaland', 'Ødegaard', 'Sørloth', 'King'],
        midfielders: ['Berge', 'Ødegaard', 'Thorstvedt', 'Aursnes', 'Berg'],
        defenders: ['Ryerson', 'Østigård', 'Pedersen', 'Meling', 'Nyland'],
        goalkeepers: ['Nyland', 'Haikin'],
        youngStars: ['Haaland', 'Ødegaard']
    },
    
    // ===== CAF (Africa) =====
    
    'Morocco': {
        forwards: ['Hakimi', 'En-Nesyri', 'Boufal', 'Diaz'],
        midfielders: ['Ziyech', 'Amrabat', 'Ounahi', 'El Khannouss', 'Amallah'],
        defenders: ['Hakimi', 'Mazraoui', 'Aguerd', 'Saïss', 'Dari'],
        goalkeepers: ['Bounou', 'Munir'],
        youngStars: ['El Khannouss', 'Ounahi']
    },
    
    'Senegal': {
        forwards: ['Sadio Mané', 'Dieng', 'Dia', 'Sarr'],
        midfielders: ['Gueye', 'Kouyaté', 'P. Sarr', 'Diallo', 'Mendy'],
        defenders: ['Koulibaly', 'Diallo', 'Jakobs', 'Sabaly', 'Cissé'],
        goalkeepers: ['E. Mendy', 'Gomis'],
        youngStars: ['Sarr', 'Dieng']
    },
    
    'Egypt': {
        forwards: ['Salah', 'Marmoush', 'Mostafa Mohamed', 'Trezeguet'],
        midfielders: ['Elneny', 'Fathy', 'Emam', 'Ashour', 'Kouka'],
        defenders: ['Hegazy', 'Abdelmonem', 'Fatouh', 'Kamal', 'Ashraf'],
        goalkeepers: ['El-Shenawy', 'Abou Gabal'],
        youngStars: ['Marmoush', 'Emam']
    },
    
    'Algeria': {
        forwards: ['Mahrez', 'Bounedjah', 'Slimani', 'Belaili'],
        midfielders: ['Bennacer', 'Boudaoui', 'Benrahma', 'Zerrouki', 'Aouar'],
        defenders: ['Mandi', 'Bedrane', 'Atal', 'Bensebaini', 'Tougai'],
        goalkeepers: ["M'Bolhi", 'Mandrea'],
        youngStars: ['Aouar', 'Boudaoui']
    },
    
    "Côte d'Ivoire": {
        forwards: ['Haller', 'Gradel', 'Boly', 'Adingra'],
        midfielders: ['Kessié', 'Seri', 'Sangaré', 'Pepe', 'Fofana'],
        defenders: ['Aurier', 'Bailly', 'Konan', 'Deli', 'Diomandé'],
        goalkeepers: ['Sangaré', 'Gbohouo'],
        youngStars: ['Adingra', 'Fofana']
    },
    
    'Ghana': {
        forwards: ['Ayew', 'Kudus', 'Iñaki Williams', 'Semenyo'],
        midfielders: ['Partey', 'André Ayew', 'Sulemana', 'Baba', 'Kyereh'],
        defenders: ['Amartey', 'Djiku', 'Salisu', 'Lamptey', 'Rahman'],
        goalkeepers: ['Ati-Zigi', 'Wollacott'],
        youngStars: ['Kudus', 'Sulemana']
    },
    
    'Tunisia': {
        forwards: ['Khazri', 'Msakni', 'Jaziri', 'Sliti'],
        midfielders: ['Skhiri', 'Laidouni', 'Ben Slimane', 'Mejbri', 'Chaalali'],
        defenders: ['Bronn', 'Meriah', 'Talbi', 'Drager', 'Abdi'],
        goalkeepers: ['Dahmen', 'Ben Said'],
        youngStars: ['Mejbri', 'Laidouni']
    },
    
    'South Africa': {
        forwards: ['Tau', 'Foster', 'Mokoena', 'Zwane'],
        midfielders: ['Mokotjo', 'Mokoena', 'Mbule', 'Mabasa', 'Hlanti'],
        defenders: ['Hlatshwayo', 'Mphahlele', 'De Reuck', 'Modiba', 'Mashego'],
        goalkeepers: ['Williams', 'Khune'],
        youngStars: ['Mokoena', 'Foster']
    },
    
    'Cabo Verde': {
        forwards: ['Garry Rodrigues', 'Lisandro Semedo', 'Hélder Tavares', 'Ryan Mendes'],
        midfielders: ['Kenny Rocha', 'Jamiro Monteiro', 'Nené', 'Júlio Tavares', 'Bebé'],
        defenders: ['Steven Fortes', 'Roberto Lopes', 'Dylan Tavares', 'Stopira', 'Logan Costa'],
        goalkeepers: ['Vozinha', 'Rúben Silva'],
        youngStars: ['Hélder Tavares', 'Logan Costa']
    },
    
    // ===== AFC (Asia) =====
    
    'Japan': {
        forwards: ['Mitoma', 'Kubo', 'Maeda', 'Ueda', 'Kamada'],
        midfielders: ['Endo', 'Tanaka', 'Doan', 'Morita', 'Minamino'],
        defenders: ['Tomiyasu', 'Yoshida', 'Itakura', 'Nagatomo', 'Machida'],
        goalkeepers: ['Suzuki', 'Gonda'],
        youngStars: ['Kubo', 'Mitoma']
    },
    
    'South Korea': {
        forwards: ['Son Heung-min', 'Hwang Hee-chan', 'Lee Kang-in', 'Cho Gue-sung'],
        midfielders: ['Hwang In-beom', 'Lee Jae-sung', 'Paik Seung-ho', 'Jung Woo-young', 'Kim Min-jae'],
        defenders: ['Kim Min-jae', 'Kim Young-gwon', 'Kim Jin-su', 'Lee Ki-je', 'Cho Yu-min'],
        goalkeepers: ['Kim Seung-gyu', 'Jo Hyeon-woo'],
        youngStars: ['Lee Kang-in', 'Cho Gue-sung']
    },
    
    'Iran': {
        forwards: ['Taremi', 'Azmoun', 'Jahanbakhsh', 'Ansarifard'],
        midfielders: ['Ezatolahi', 'Nourollahi', 'Amiri', 'Gholizadeh', 'Hajsafi'],
        defenders: ['Pouraliganji', 'Hosseini', 'Mohammadi', 'Moharrami', 'Rezaeian'],
        goalkeepers: ['Beiranvand', 'Abedzadeh'],
        youngStars: ['Amiri', 'Gholizadeh']
    },
    
    'Saudi Arabia': {
        forwards: ['Al-Dawsari', 'Al-Shehri', 'Hamdallah', 'Al-Buraikan'],
        midfielders: ['Kanno', 'Al-Malki', 'Al-Faraj', 'Al-Muwallad', 'Otayf'],
        defenders: ['Al-Shahrani', 'Al-Bulaihi', 'Al-Amri', 'Tambakti', 'Abdulhamid'],
        goalkeepers: ['Al-Owais', 'Al-Yami'],
        youngStars: ['Al-Dawsari', 'Abdulhamid']
    },
    
    'Qatar': {
        forwards: ['Afif', 'Ali', 'Al-Haydos', 'Muntari'],
        midfielders: ['Boudiaf', 'Hatem', 'Madibo', 'Al-Haydos', 'Ahmed'],
        defenders: ['Hassan', 'Khoukhi', 'Salman', 'Ahmed', 'Al-Rawi'],
        goalkeepers: ['Al-Sheeb', 'Barsham'],
        youngStars: ['Afif', 'Muntari']
    },
    
    'Australia': {
        forwards: ['Taggart', 'Duke', 'Maclaren', 'Leckie'],
        midfielders: ['Mooy', 'McGree', 'Irvine', 'Hrustic', 'Baccus'],
        defenders: ['Souttar', 'Rowles', 'Behich', 'Atkinson', 'Deng'],
        goalkeepers: ['Ryan', 'Redmayne'],
        youngStars: ['McGree', 'Baccus']
    },
    
    'Uzbekistan': {
        forwards: ['Shomurodov', 'Nasimov', 'Sergeev', 'Urunov'],
        midfielders: ['Fayzullaev', 'Kobilov', 'Shukurov', 'Khamrobekov', 'Abdullaev'],
        defenders: ['Islomov', 'Azimov', 'Kholmatov', 'Alibaev', 'Denisov'],
        goalkeepers: ['Nematov', 'Ergashev'],
        youngStars: ['Fayzullaev', 'Shomurodov']
    },
    
    'Jordan': {
        forwards: ['Musa Al-Taamari', 'Yazan Al-Naimat', 'Hamza Al-Dardour', 'Baha Seif'],
        midfielders: ['Mousa Tamari', 'Mahmoud', 'Yaseen Al-Bakhit', 'Saleh Rateb', 'Hassoneh'],
        defenders: ['Abdallah Nasib', 'Anas Bani-Yaseen', 'Salem Al-Ajalin', 'Yazan Al-Arab', 'Rawhi'],
        goalkeepers: ['Yazid Abu Laila', 'Ahmad Abu Nahyeh'],
        youngStars: ['Al-Taamari', 'Al-Naimat']
    },
    
    'Bahrain': {
        forwards: ['Abdulla Yusuf', 'Ali Madan', 'Mahdi Al-Humaidan', 'Mohamed Al-Rumaihi'],
        midfielders: ['Komail Al-Aswad', 'Ali Haram', 'Kamil Al-Aswad', 'Jamal Rashid', 'Mohamed Marhoon'],
        defenders: ['Sayed Shubbar', 'Ahmed Merza', 'Sayed Mohammed', 'Waleed Al-Hayam', 'Hamad Al-Shamsan'],
        goalkeepers: ['Sayed Jaffer', 'Ebrahim Lutfallah'],
        youngStars: ['Komail Al-Aswad', 'Ali Haram']
    },
    
    'Indonesia': {
        forwards: ['Marselino Ferdinan', 'Ramadhan Sananta', 'Yakob Sayuri', 'Egy Maulana Vikri'],
        midfielders: ['Marc Klok', 'Ricky Kambuaya', 'Ivar Jenner', 'Witan Sulaeman', 'Arkhan Fikri'],
        defenders: ['Jay Idzes', 'Jordi Amat', 'Rizky Ridho', 'Asnawi Mangkualam', 'Pratama Arhan'],
        goalkeepers: ['Maarten Paes', 'Nadeo Argawinata'],
        youngStars: ['Marselino Ferdinan', 'Arkhan Fikri']
    },
    
    // ===== CONCACAF =====
    
    'USA': {
        forwards: ['Pulisic', 'Weah', 'Reyna', 'Balogun', 'Pepi'],
        midfielders: ['McKennie', 'Adams', 'Musah', 'Aaronson', 'De la Torre'],
        defenders: ['Dest', 'Robinson', 'Richards', 'Scally', 'Ream'],
        goalkeepers: ['Turner', 'Horvath'],
        youngStars: ['Reyna', 'Musah']
    },
    
    'Mexico': {
        forwards: ['Lozano', 'Jiménez', 'Vega', 'Giménez', 'Antuna'],
        midfielders: ['Edson Álvarez', 'Pineda', 'Romo', 'Chávez', 'Gutiérrez'],
        defenders: ['Araujo', 'Montes', 'Sánchez', 'Gallardo', 'Vasquez'],
        goalkeepers: ['Ochoa', 'González'],
        youngStars: ['Vega', 'Giménez']
    },
    
    'Canada': {
        forwards: ['Davies', 'David', 'Larin', 'Buchanan', 'Shaffelburg'],
        midfielders: ['Eustáquio', 'Osorio', 'Koné', 'Piette', 'Millar'],
        defenders: ['Johnston', 'Miller', 'Cornelius', 'Kennedy', 'Adekugbe'],
        goalkeepers: ['Crepeau', 'Borjan'],
        youngStars: ['Davies', 'David']
    },
    
    'Panama': {
        forwards: ['Bárcenas', 'Fajardo', 'Rodríguez', 'Murillo'],
        midfielders: ['Carrasquilla', 'Godoy', 'Martínez', 'Blackman', 'Gondola'],
        defenders: ['Davis', 'Torres', 'Murillo', 'Escobar', 'Miller'],
        goalkeepers: ['Mejía', 'Mosquera'],
        youngStars: ['Bárcenas', 'Carrasquilla']
    },
    
    'Haiti': {
        forwards: ['Nazon', 'Etienne Jr', 'Pierre', 'Pierrot'],
        midfielders: ['Derrick Etienne', 'Alceus', 'Fleurant', 'Lafrance', 'Revaujour'],
        defenders: ['Jems Geffrard', 'Duverger', 'Elisdort', 'Arcus', 'Bazile'],
        goalkeepers: ['Josue Duverger', 'Johny Placide'],
        youngStars: ['Etienne Jr', 'Pierrot']
    },
    
    'Curaçao': {
        forwards: ['Leandro Bacuna', 'Jarchinio Antonia', 'Rangelo Janga', 'Elson Hooi'],
        midfielders: ['Kenji Gorré', 'Michaël Maria', 'Jurien Gaari', 'Shanon Carmelia', 'Darryl Lachman'],
        defenders: ['Cuco Martina', 'Shermaine Martina', 'Juriën Gaari', 'Gino van Kessel', 'Noah Howell'],
        goalkeepers: ['Eloy Room', 'Jairon Martina'],
        youngStars: ['Jarchinio Antonia', 'Kenji Gorré']
    },
    
    // ===== OFC =====
    
    'New Zealand': {
        forwards: ['Chris Wood', 'Callum McCowatt', 'Ben Waine', 'Matt Garbett'],
        midfielders: ['Joe Bell', 'Marko Stamenic', 'Sarpreet Singh', 'Cameron Devlin', 'Clayton Lewis'],
        defenders: ['Winston Reid', 'Tim Payne', 'Liberato Cacace', 'Michael Boxall', 'Tommy Smith'],
        goalkeepers: ['Stefan Marinovic', 'Oliver Sail'],
        youngStars: ['Garbett', 'Stamenic']
    }
};

// Generate a random goal scorer from a team's roster
function getRandomScorer(teamName) {
    const roster = PLAYER_ROSTERS[teamName];
    if (!roster) return 'Player';
    
    const scorerPool = [
        ...roster.forwards,
        ...roster.forwards, // Weight forwards more heavily
        ...roster.midfielders
    ];
    
    return scorerPool[Math.floor(Math.random() * scorerPool.length)];
}

// Get star players (for featured display)
function getStarPlayers(teamName) {
    const roster = PLAYER_ROSTERS[teamName];
    if (!roster) return [];
    return roster.forwards.slice(0, 3);
}

// Get young stars
function getYoungStars(teamName) {
    const roster = PLAYER_ROSTERS[teamName];
    if (!roster) return [];
    return roster.youngStars || [];
}

// Get goalkeeper
function getGoalkeeper(teamName) {
    const roster = PLAYER_ROSTERS[teamName];
    if (!roster || !roster.goalkeepers) return 'Goalkeeper';
    return roster.goalkeepers[0];
}

// Export for use in simulator
window.PLAYER_ROSTERS = PLAYER_ROSTERS;
window.getRandomScorer = getRandomScorer;
window.getStarPlayers = getStarPlayers;
window.getYoungStars = getYoungStars;
window.getGoalkeeper = getGoalkeeper;

