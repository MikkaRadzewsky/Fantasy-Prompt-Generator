
/// <reference path="jquery-3.6.0.js" />



(() => {

    function randomizeCategory(array1, array2, array3) {
        const number = Math.floor(Math.random() * 3) + 1;
        switch (number) {
            case 1:
                return array1;
            case 2:
                return array2;
            default:
                return array3;
        }
    }

    let lastPromptPlacement;

    function generateRandom(array) {
        let i = Math.floor(Math.random() * array.length)
        const result = array[i];
        return result;
    }

    function generateRandomPrompt(array) {
        let i;
        if (lastPromptPlacement !== undefined) {
            if ($("#inpLock").prop("checked") === false) {
                i = Math.floor(Math.random() * array.length)
                lastPromptPlacement = i;
            } else {
                i = lastPromptPlacement;
            }
        } else {
            i = Math.floor(Math.random() * array.length)
            lastPromptPlacement = i;
        }
        const result = array[i];
        return result;
    }

    generatorButton.addEventListener("click", () => {

        const prompts = allPrompts();
        const prompt = generateRandomPrompt(prompts);
        textDiv.innerHTML = prompt;
    })


    copy.addEventListener("click", async () => {
        const text = document.getElementById("textDiv");
        const copyText = text.textContent;
        console.log(copyText)
        await navigator.clipboard.writeText(copyText);
        alert("Text Copied ");
    })





    //Arrays:

    const neutralGroups = [
        `Werewolves`, `Elves`, `Humans`, `Merpeople`, `Draconoids`, `Tieflings`, `Centaurs`, `Dwarves`, `Fairies`, `Nymphs`,
        `Dryads`, `Giants`, `Gnomes`, `Pixies`, `Satyrs`,
        `Alchemists`, `Bards`, `Wizards`, `Sorcerers`, `Mystics`, `Barbarians`, `Clerics`, `Druids`, `Monks`, `Paladins`,
        `Rogues`, `Rangers`, `Warlocks`, `Spirits`, `Vampires`
    ]
    const goodGroups = [
        `Townsfolk`, `Merchants`, `Citizens`, `Nobles`, `Commoners`, `Children`, `Locals`
    ]

    const badGroups = [
        `Werewolves`, `Demons`, `Orcs`, `Ogres`, `Goblins`, `Gremlins`, `Banshees`, `Undead`, `Dragons`, `Bugbears`, `Gorgons`,
        `Harpies`, `Spirits`, `Ghosts`, `Vampires`,

        `Assassins`, `Bandits`, `Alchemists`, `Thieves`, `Pirates`, `Warlocks`, `Terrorists`,
    ]



    const races = [
        `Dragon`, `Werewolf`, `Elf`, `Human`, `Merperson`, `Draconoid`, `Tiefling`, `Centaur`, `Dwarf`, `Fairy`, `Nymph`,
        `Dryad`, `Giant`, `Gnome`, `Aasimar`, `Demon`, `Ogre`, `Goblin`, `Orc`, `Banshee`, `Dragon`, `Bugbear`, `Harpy`, `Gorgon`,
        `Minotaur`, `Siren`, `Cyclops`, `Vampire`, `Sphinx`
    ]

    const archetypes = [
        `Alchemist`, `Bard`, `Wizard`, `Sorcerer`, `Mystic`, `Barbarian`, `Cleric`, `Druid`, `Monk`, `Paladin`, `Rogue`,
        `Ranger`, `Warlock`, `Knight`, `Necromancer`
    ]

    const beings = [
        `Baron`, `God`, `King`, `Queen`, `Doppelganger`, `Spirit`, `Ghost`, `Demigod`, `Deity`,
    ]

    const creatures = [
        `Lion`, `Wolf`, `Bear`, `Basilisk`, `Giant spider`, `Griffin`, `Unicorn`, `Chimera`, `Hydra`, `Kraken`, `Wyvern`
    ]



    const places = [
        `Cemetary`, `City`, `Town`, `Castle`, `Pond`, `River`, `Forest`, `Tavern`, `Circus`, `Bazaar`, `Market`, `Hospital`,
        `Forge`, `Monestary`, `Crypt`, `Chapel`, `Meadow`, `Ravine`, `Swamp`, `Gladiator arena`
    ]

    const locations = [
        `A maze of catacombs`, `The Ocean`, `Hell`, `Heaven`, `Earth`, `A foreign land`, `A foreign planet`, `The Desert`,
        `The spiritual plane`, `An alternate universe`, `An alternate dimension`, `The capital`,
        `Ancient ruins`, `The great mountains`, `The hollow jungle`, `The countryside`,
    ]


    const names = [
        `Azreal`, `Douma`, `Adriel`, `Sareash`, `Sequt`, `Eisax`, `Aszix`, `Thaitik Uzias`, `Teklan Bozu`, `Ekneh Aberu`, `Tolralath`,
        `Jazras`, `Ostramad`, `Zonoroth`, `Ger'geth`, `Keryth Gilralei`, `Kailu Gremaris`, `Cyran Neritoris`, `Vlesor`, `Fadvir`,
        `Irus`, `Auris`, `Evissaem`, `Alaffyn`, `Vabras`, `Diwyss`, `Eseqinn`, `Uzohr`
    ]

    const titles = [
        `The undefeated`, `King of the mountain`, `Queen of the dead`, `The prophesized`, `Master of night`, `Lady of the wind`,
        `Paragon of hate`, `King of liberation`, `Witch of the north`, `Divine elemental`, `Protector of peace`, `Mother of monsters`,
        `Son of Darkness`, `Mistress of doom`, `The butcher`, `Chosen of the gods`, `The widow-maker`, `The kingdom killer`

    ]


    const specialItems = [
        `Veil of blood`, `Gem of great power`, `Book of shadows`, `Clockwork amulet`, `Coin of delving`, `Eye of Vecna`,
        `Scroll of prophecies`, `Wand of death`, `Plague Compendium`, `Cloak of teleportation`, `Spear of Assal`,
        `Pandora's box`, `Sun blade`, `Horn of Valhalla`, `Talisman of Ultimate Evil`
    ]

    const mundaneItems = [
        `Wooden spoon`, `Apron`, `Helm`, `Knife`, `Candlestick`, `Button`, `Wooden box`, `Bow`, `Bottle of mead`, `Pan`,
        `Silver Ring`, `Leather boot`, `Gold coin`, `Hankerchief`, `Sidebag`, `Pillow`, `Stick`, `Doll`, `Amulet`
    ]

    const abstractConcepts = [
        `Love`, `Hate`, `Time`, `Torture`, `Terror`, `Winter`, `Virtues`, `Honor`, `Sleep`, `Death`, `Life`, `Spring`, `Summer`,
        `Autumn`, `Fire`, `Water`, `Wind`, `Earth`, `Heroes`, `Conquest`, `Night`, `Day`, `Destiny`, `Light`, `War`, `Luck`, `Justice`
    ]

    const events = [
        `Earthquake`, `Tornado`, `Tsunami`, `Volcanic eruption`, `Avalanche`, `Landslide`, `Flood`, `Wildfire`
    ]


    function allPrompts() {

        const prompts = [
            `<span><span class="randomized">${generateRandom(names)}</span>, <span class="randomized">${generateRandom(titles)}</span>, is attacking many a <span class="randomized">${generateRandom(places)}</span> in hopes of expanding their army before their assault on the capital.</span>`,
            `<span><span class="randomized">${generateRandom(goodGroups)}</span> hear chants in the nearby <span class="randomized">${generateRandom(places)}</span>, the party is asked to help investigate.</span>`,
            `<span>Someone in the party is secretly a <span class="randomized">${generateRandom(beings)}</span>.</span>`,
            `<span><span class="randomized">${generateRandom(badGroups)}</span> threaten cities across the nation.</span>`,
            `<span>The party's <span class="randomized">${generateRandom(archetypes)}</span> has been assassinated.</span>`,
            `<span>A large army of <span class="randomized">${generateRandom(badGroups)}</span> wages war against a local city.</span>`,
            `<span>The <span class="randomized">${generateRandom(specialItems)}</span> is needed to cure a plague and your group is sent to collect it.</span>`,
            `<span>A powerful <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> hires your party to retrieve the fabled <span class="randomized">${generateRandom(specialItems)}</span> from a dead <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span>'s coffin.</span>`,
            `<span>The party is tasked with breaking into a <span class="randomized">${generateRandom(places)}</span> to steal the <span class="randomized">${generateRandom(specialItems)}</span>.</span>`,
            `<span>The party finds a <span class="randomized">${generateRandom(mundaneItems)}</span> that opens a portal to <span class="randomized">${generateRandom(locations)}</span>.</span>`,
            `<span>Mysteriously, an entire city of <span class="randomized">${generateRandom(neutralGroups)}</span> has lost its inhabitants overnight.</span>`,
            `<span>The characters must chase escaping <span class="randomized">${generateRandom(badGroups)}</span> through the countryside.</span>`,
            `<span>The party is chased by <span class="randomized">${generateRandom(badGroups)}</span> through the countryside.</span>`,
            `<span>a sinister <span class="randomized">${generateRandom(mundaneItems)}</span> in the local <span class="randomized">${generateRandom(places)}</span> comes to life at night.</span>`,
            `<span>The party finds a small <span class="randomized">${generateRandom(mundaneItems)}</span> which keeps multiplying every day. They have to find a way to destroy it before its too late.</span>`,
            `<span>A <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> believes that all humans exist for their dining pleasure.</span>`,
            `<span>Catacombs have opened beneath the <span class="randomized">${generateRandom(places)}</span>, guarded by ancient <span class="randomized">${generateRandom(neutralGroups)}</span> who let no one pass.</span>`,
            `<span>The sacred <span class="randomized">${generateRandom(mundaneItems)}</span> of <span class="randomized">${generateRandom(names)}</span>,<span class="randomized">${generateRandom(titles)}</span> has gone missing.</span>`,
            `<span><span class="randomized">${generateRandom(names)}</span> the <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> regards a party member as "The perfect mate."</span>`,
            `<span>A god's <span class="randomized">${generateRandom(mundaneItems)}</span> has fallen to <span class="randomized">${generateRandom(locations)}</span> and now there is a race to obtain it.</span>`,
            `<span>A party member's <span class="randomized">${generateRandom(mundaneItems)}</span> comes to life and tries to leave.</span>`,
            `<span>The party meets several groups of <span class="randomized">${generateRandom(randomizeCategory(goodGroups, neutralGroups, badGroups))}</span> headed in the same direction, claiming to be going to something called "The Games.</span>"`,
            `<span>A <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> is after a party member because of a case of mistaken identity.</span>`,
            `<span>A very superstitious village is holding a witch trial, and a party member is mistaken for a famous <span class="randomized">${generateRandom(beings)}</span> and called to act as the judge.</span>`,
            `<span>A hidden pathway in an abandoned <span class="randomized">${generateRandom(places)}</span> leads to a lair of <span class="randomized">${generateRandom(names)}</span>,<span class="randomized">${generateRandom(titles)}</span>.</span>`,
            `<span>The party is raiding a <span class="randomized">${generateRandom(places)}</span> when they are captured and forced to entertain the king.</span>`,
            `<span>A <span class="randomized">${generateRandom(archetypes)}</span> summons a demon but is unable to control it and is possessed.</span>`,
            `<span>The world is hit by an asteroid that mutates anyone that touches it into a sentient <span class="randomized">${generateRandom(creatures)}</span>.</span>`,
            `<span>A large egg of some sort is discovered and the <span class="randomized">${generateRandom(neutralGroups)}</span> are coming for it. Will the party try to hatch it?</span>`,
            `<span>A thick plague-inducing fog is slowly covering the <span class="randomized">${generateRandom(places)}</span>.</span>`,
            `<span>A <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> goes mad, turning evil while still thinking he is good.</span>`,
            `<span>An illusion of peace and tranquility is projected over a giant <span class="randomized">${generateRandom(places)}</span>. Can the party discover what is really happening?</span>`,
            `<span>The God of <span class="randomized">${generateRandom(abstractConcepts)}</span> punishes a <span class="randomized">${generateRandom(places)}</span> for not worshiping him. Can the party help the inhabitants?</span>`,
            `<span>The local <span class="randomized">${generateRandom(neutralGroups)}</span> are killing people; are the <span class="randomized">${generateRandom(neutralGroups)}</span> to blame?</span>`,
            `<span>The party is framed for causing a giant <span class="randomized">${generateRandom(events)}</span>.`,
            `<span>A giant <span class="randomized">${generateRandom(creatures)}</span> captures the party and takes them home to feed to their babies.</span>`,
            `<span><span class="randomized">${generateRandom(badGroups)}</span> are attacking a <span class="randomized">${generateRandom(places)}</span>; the party must prevent them from taking it.</span>`,
            `<span>Suspicion arises that the inhabitants of a <span class="randomized">${generateRandom(places)}</span> are gradually being replaced by impostor <span class="randomized">${generateRandom(neutralGroups)}</span>.</span>`,
            `<span>A phantom <span class="randomized">${generateRandom(archetypes)}</span> passes by a small <span class="randomized">${generateRandom(places)}</span> once a month, leaving malevolent, supernatural occurrences in its wake.</span>`,
            `<span>A local ruler is suspected of making a pact with a powerful evil <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span>.</span>`,
            `<span>The local <span class="randomized">${generateRandom(randomizeCategory(goodGroups, neutralGroups, badGroups))}</span> guild is planning a coup.</span>`,
            `<span>A secret <span class="randomized">${generateRandom(neutralGroups)}</span> society is inflicting barbaric punishments on <span class="randomized">${generateRandom(neutralGroups)}</span> unjustly.</span>`,
            `<span>A small community of neutral <span class="randomized">${generateRandom(neutralGroups)}</span> tries to convince inhabitants of a nearby <span class="randomized">${generateRandom(places)}</span> that they mean them no harm after a suspicious "accident" has happened.</span>`,
            `<span>A powerful <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> is about to be hanged for their crimes, but is sprung from prison by a mysterious group.</span>`,
            `<span><span class="randomized">${generateRandom(badGroups)}</span> occupy an abandoned <span class="randomized">${generateRandom(places)}</span>, using it as a base from which to launch raids on <span class="randomized">${generateRandom(races)}</span> settlements.</span>`,
            `<span>The party is sent to deliver the ransom for a <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span>, who is being held by a gang of <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}s</span>.</span>`,
            `<span>The party members are hired as marshals to escort a powerful Fallen <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> across <span class="randomized">${generateRandom(locations)}</span>, where he is to stand trial.</span>`,
            `<span>An ancient <span class="randomized">${generateRandom(mundaneItems)}</span> must be retrieved from the bottom of the sea.`,
            `<span>A <span class="randomized">${generateRandom(creatures)}</span> has made the nearest <span class="randomized">${generateRandom(places)}</span> its home. A siege is on the horizon and evacuation must begin but everything is blocked by the creature.`,
            `<span>A powerful <span class="randomized">${generateRandom(randomizeCategory(beings, archetypes, races))}</span> offers each of the party members their greatest wish. This is too good to be true.`,
            `<span>The newly chosen <span class="randomized">${generateRandom(races)}</span> leader has arrived! All followers gather to take their rightful place in the world.`,
            `<span>The party has been stuck in the same place for months - every time they try to leave a <span class="randomized">${generateRandom(events)}</span> starts out of nowhere.`
        ];
        return prompts;
    }




})();