
var imgSelected;

var imageSelect = function(event) {
    if ((event.target.classList.contains("imgClass"))) {

        if (event.target === document.querySelector("#ironMan")){
            sessionStorage.setItem('selectedImg', 'ironMan')
        };
        if (event.target === document.querySelector("#captianAmerica")){
            sessionStorage.setItem('selectedImg', 'captianAmerica')
        };
        if (event.target === document.querySelector("#thor")){
            sessionStorage.setItem('selectedImg', 'thor')
        };
        if (event.target === document.querySelector("#avengers")){
            sessionStorage.setItem('selectedImg', 'avengers')
        };
        if (event.target === document.querySelector("#antMan")){
            sessionStorage.setItem('selectedImg', 'antMan')
        };
        if (event.target === document.querySelector("#guardians")){
            sessionStorage.setItem('selectedImg', 'guardians')
        };
    };
};

var titleInfoBuild = function(){
    var selectedImg = sessionStorage.getItem('selectedImg')

    if (document.title === 'GMDB-Title-Info'){
    if (selectedImg === 'ironMan') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Iron Man'
        document.querySelector('#titleInfoDescRel').innerHTML = '2008 | PG-13 | 2h 6m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'Jon Favreau'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Robert Downey Jr. | Gwyneth Paltrow | Terrence Howard'
        document.querySelector('#titleInfoDesc').innerHTML = "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters."
    };
    if (selectedImg === 'captianAmerica') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_FMjpg_UX1000_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Captian America: Winter Solider'
        document.querySelector('#titleInfoDescRel').innerHTML = '2014 | PG-13 | 2h 16m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'Anthony Russo | Joe Russo'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Chris Evans | Samuel L. Jackson | Scarlett Johansson'
        document.querySelector('#titleInfoDesc').innerHTML = "For Steve Rogers, awakening after decades of suspended animation involves more than catching up on pop culture; it also means that this old school idealist must face a world of subtler threats and difficult moral complexities. That becomes clear when Director Nick Fury is killed by the mysterious assassin, the Winter Soldier, but not before warning Rogers that SHIELD has been subverted by its enemies. When Rogers acts on Fury's warning to trust no one there, he is branded as a traitor by the organization. Now a fugitive, Captain America must get to the bottom of this deadly mystery with the help of the Black Widow and his new friend, The Falcon. However, the battle will be costly for the Sentinel of Liberty, with Rogers finding enemies where he least expects them while learning that the Winter Soldier looks disturbingly familiar."
    };
    if (selectedImg === 'thor') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Thor'
        document.querySelector('#titleInfoDescRel').innerHTML = '2011 | PG-13 | 1h 55m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'Kenneth Branagh'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Chris Hemsworth | Anthony Hopkins | Natalie Portman'
        document.querySelector('#titleInfoDesc').innerHTML = "The reckless Thor (Chris Hemsworth), son of Odin (Sir Anthony Hopkins), challenges his brother Loki's (Tom Hiddleston's) claim to the throne of Asgard. To teach him humility, Odin casts the young warrior down to Earth to live amongst humans. Robbed of his powers, Thor falls in love with scientist Jane Foster (Natalie Portman). While Loki usurps the throne of Asgard for evil gain and plans revenge, Thor's love for Jane and his lessons of humility turn him into the true hero and legendary and immortal warrior-defender of the people of the Earth, saving them from destruction."
    };
    if (selectedImg === 'avengers') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Avengers'
        document.querySelector('#titleInfoDescRel').innerHTML = '2012 | PG-13 | 2h 23m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'Joss Whedon'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Robert Downey Jr. | Chris Evans | Scarlett Johansson'
        document.querySelector('#titleInfoDesc').innerHTML = "S.H.I.E.L.D. has located the mysterious Tesseract device and the Army's super soldier Captain America. The Tesseract is actually a gateway to an entirely new world called Asgard. A mysterious being known as Loki arrives on earth and immediately assumes that he can rule all human beings. But that irks S.H.I.E.L.D. director Nick Fury the wrong way. As Loki escapes with the Tesseract, Nick Fury believes this is an act of war against Earth. His only hope is to assemble an actual team of super heroes. Dr. Bruce Banner, who turns into an enormous green rage monster known as the Hulk. Tony Stark and his venerable Iron Man armor. Captain America, the Stark Enterprises created super soldier. Thor, the god of thunder, protector of Earth and his home planet of Asgard, and Loki's brother. Master assassins Hawkeye and Natasha Romanoff. Together they will become a team to take on an attack that will call them to become the greatest of all time."
    };
    if (selectedImg === 'antMan') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Ant-Man'
        document.querySelector('#titleInfoDescRel').innerHTML = '2015 | PG-13 | 1h 57m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'Peyton Reed'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Paul Rudd | Michael Douglas | Corey Stoll'
        document.querySelector('#titleInfoDesc').innerHTML = "After serving a few years in prison, former burglar Scott Lang is released. Now wanting to be straight, Scott sets out to find himself a job. But he is totally unaware that his record is preventing him from working and seeing his young daughter Cassie. When he steals a powerful suit, he quickly returns it only to find himself arrested again. But a mysterious man named Hank Pym has other ideas for him. Pym explains that it has the power to shrink in size and increase in strength due to a special formula called the Pym Particle. He was once its owner and called himself Ant-Man. Unfortunately during his SHIELD days, Pym discovers that others wanted to replicate his design. Now Pym wants to use Scott to being the new Ant-Man because his former apprentice Darren Cross is working to replicate the formula for his own evil purposes. So Scott and Pym, along with Pym's daughter Hope must plan a heist that will stop Cross and save the world from certain chaos."
    };
    if (selectedImg === 'guardians') {
        document.querySelector('#titleInfoImg').src = 'https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg';
        document.querySelector('#titleInfoDescH1').innerHTML = 'Guardians Of The Galaxy'
        document.querySelector('#titleInfoDescRel').innerHTML = '2014 | PG-13 | 2h 1m'
        document.querySelector('#titleInfoDescDirector').innerHTML = 'James Gunn'
        document.querySelector('#titleInfoDescStars').innerHTML = 'Chris Pratt | Vin Diesel(voice) | Bradley Cooper(voice)'
        document.querySelector('#titleInfoDesc').innerHTML = "Scarred for life after surviving a life-altering close encounter of the fourth kind, Peter Quill, aka Star-Lord, now leads a dangerous life as an intergalactic outlaw. And bent on striking it rich, Quill steals the Orb: an alien stone of immense power. But first, Peter will have to sell it. As a result, the notorious scavenger forms an uneasy alliance with a team of misfits: Gamora, Thanos' adopted daughter; former criminal Drax the Destroyer; the genetically enhanced Rocket Raccoon; and Groot, a plant-like organism. However, thwarting the evil plans of Ronan the Accuser, an unstoppable Kree warlord and space terrorist, is easier said than done. Are the mismatched Guardians of the Galaxy the last hope of the universe?"
    };
}
};

window.addEventListener("click", imageSelect);
window.addEventListener('load', titleInfoBuild(), true);
