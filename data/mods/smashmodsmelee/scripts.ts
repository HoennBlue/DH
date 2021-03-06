export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	init: function () {
		this.modData('Learnsets', 'raichu').learnset.highjumpkick = ['7L1'];
		this.modData('Learnsets', 'trubbishmarshadow').learnset.spectralresidue = ['7L1'];
		this.modData('Learnsets', 'beheeyem').learnset.inverseroom = ['7L1'];
		this.modData('Learnsets', 'beheeyem').learnset.magicroom = ['7L1'];
		this.modData('Learnsets', 'beheeyem').learnset.meteorshower = ['7L1'];
		this.modData('Learnsets', 'beheeyem').learnset.pragmastrike = ['7L1'];
		this.modData('Learnsets', 'beheeyem').learnset.psywave = ['7L1'];
		this.modData('Learnsets', 'garbodor').learnset.knockoff = ['7L1'];
		this.modData('Learnsets', 'garbodor').learnset.stealthrock = ['7L1'];
		this.modData('Learnsets', 'miltank').learnset.playrough = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.breakingswipe = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.dragonclaw = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.dragondance = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.earthquake = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.flareblitz = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.outrage = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.stompingtantrum = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.stoneedge = ['7L1'];
		this.modData('Learnsets', 'camomander').learnset.superpower = ['7L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.bulkup = ['8L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.flamethrower = ['8L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.powertrip = ['8L1'];
		this.modData('Learnsets', 'moltresgalar').learnset.roost = ['8L1'];
		this.modData('Learnsets', 'copperajahforge').learnset.flareblitz = ['8L1'];
		this.modData('Learnsets', 'copperajahforge').learnset.rapidspin = ['8L1'];
		this.modData('Learnsets', 'copperajahforge').learnset.spikes = ['8L1'];
		this.modData('Learnsets', 'copperajahforge').learnset.stealthrock = ['8L1'];
		this.modData('Learnsets', 'copperajahforge').learnset.willowisp = ['8L1'];
		this.modData('Learnsets', 'claydol').learnset.powergem = ['7L1'];
		this.modData('Learnsets', 'claydol').learnset.recover = ['7L1'];
		delete this.modData('Learnsets', 'claydol').learnset.gigaimpact;
		delete this.modData('Learnsets', 'claydol').learnset.hyperbeam;
		delete this.modData('Learnsets', 'claydol').learnset.toxic;
		this.modData('Learnsets', 'escavalier').learnset.guillotine = ['7L1'];
		this.modData('Learnsets', 'escavalier').learnset.horndrill = ['7L1'];
		this.modData('Learnsets', 'escavalier').learnset.shieldslam = ['7L1'];
		this.modData('Learnsets', 'escavalier').learnset.spikecannon = ['7L1'];
		this.modData('Learnsets', 'escavalier').learnset.stalwartsword = ['7L1'];
		this.modData('Learnsets', 'escavalier').learnset.pluck = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.burningjealousy = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.dazzlinggleam = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.earthquake = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.ember = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.fieryboost = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.fireblast = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.firelash = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.firepunch = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.firespin = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.flamethrower = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.flareblitz = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.incinerate = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.leafblade = ['7L1'];
		this.modData('Learnsets', 'floraflare').learnset.solarblade = ['7L1'];
		this.modData('Learnsets', 'lycanrocdusk').learnset.stormshardslash = ['7L1'];
		this.modData('Learnsets', 'roseradescarfed').learnset.drainingkiss = ['7L1'];
		this.modData('Learnsets', 'roseradescarfed').learnset.moonblast = ['7L1'];
		this.modData('Learnsets', 'roseradescarfed').learnset.quiverdance = ['7L1'];
		this.modData('Learnsets', 'roseradescarfed').learnset.stickyweb = ['7L1'];
		this.modData('Learnsets', 'roseradescarfed').learnset.uturn = ['7L1'];
	},
	unownStats: {
		unownm: {
			num: 201,
			species: "Unown-M",
			forme: "M",
			types: ["Bug", "Dark"],
			baseStats: {hp: 70, atk: 115, def: 140, spa: 70, spd: 115, spe: 70},
			abilities: {0: "Magic Guard"},
			otherFormes: ["unownp", "unowns", "unown"],
			heightm: 0.5,
			weightkg: 5,
			gender: "N",
		},	
	},
	onUnown: function( pokemon, unownStats ) {
		let pokemonid = toID( pokemon.set.species );
		let stats = unownStats[ pokemonid ];
		console.log( pokemonid )
		console.log( '-------------------------' )
		console.log( stats )
		pokemon.species.baseStats = stats.baseStats;
		pokemon.baseSpecies.baseStats = stats.baseStats;
		// for ( let statName in pokemon.species.baseStats ){
			
		// }
		console.log( pokemon.species.baseStats )
	},
};
