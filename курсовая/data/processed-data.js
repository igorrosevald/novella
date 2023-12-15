var characters = 
{
  "default":{
    "poses":{
		
    },
    "name":"ты"
  },

  "story":{
   
    "poses":{
    
    },
    "name":""
  },
  
  "grid":{
    "poses":{
      "default":"img/goblin 2-variant-00.png",
      "happy":"img/goblin 2-variant-00.png"
    },
    "name":"грид"
  },

  "alice":{
    "poses":{
      "default":"img/Character2_face1.png"
      ,"happy":"img/Character2_face2.png"
    },
    "name":"алиса"
  },

  "bobby":{
    "poses":{
      "default":"img/Character2_face1.png",
      "happy":"img/Character2_face2.png"
    },
    "name":"Кристина"
  }
}; 
 var places = 
{
	"street" : {
		"name":"акт 1",
    	"image":"img/fon1.png"
    }
}; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place street>>\n{{story}} история происходит в 1400 году, на окраине королевства Ларион была деревня лекарей <b></b>\n{{bobby}} вставай\n[[проснуться.|explanation]]\n[[игнор.|awkward_pause]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "awkward_pause",
		"tags": "",
		"body": "{{bobby}} ПРОСНИСЬ!\n[[открыть глаза.|explanation]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "explanation",
		"tags": "",
		"body": "{{story}} при открытии глаз ты видешь перед собой жену .\n {{grid}}\n[[0.|i_know_right]]\n",
		"position": {
			"x": 615,
			"y": 540
		},
		"colorID": 0
	},
	{
		"title": "i_know_right",
		"tags": "",
		"body": "{{bobby,happy}} 0.\n//0.\n[[{{bobby}} 0|thanks_bobby]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "you_lier",
		"tags": "",
		"body": "<<string liedTobobby true>>\n{{bobby}} 0\n{{bobby,happy}} 0\n[[{{bobby}} 0.|thanks_bobby]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
	{
		"title": "go_read_it",
		"tags": "",
		"body": "{{bobby,happy}} 0.\n{{bobby}} 0.\n{{bobby}} 0.\n{{bobby}} 0\n[[{{bobby,happy}} 0|thanks_bobby]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "thanks_bobby",
		"tags": "",
		"body": "{{bobby}} 0.\n{{bobby,happy}} 0\n{{алиса}} 0\n{{bobby,happy}} 0\n{{алиса}} 0\n[[{{bobby}} 0]] <<string liedTobobby != true>>\n[[{{bobby}} 0.]] <<string liedTobobby == true>>\n{{алиса,happy}} 0\n[[{{bobby,happy}} 0|end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "thanks_bobby",
		"tags": "",
		"body": "{{bobby}} 0.\n{{bobby,happy}} 0\n{{алиса}} 0\n{{bobby,happy}} 0\n{{алиса}} 0\n[[{{bobby}} 0]] <<string liedTobobby != true>>\n[[{{bobby}} 0.]] <<string liedTobobby == true>>\n{{алиса,happy}} 0\n[[{{bobby,happy}} 0|end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "secret",
		"tags": "",
		"body": "[[{{bobby,happy}} 0|end]]",
		"position": {
			"x": 1210,
			"y": 1279
		},
		"colorID": 0
	}
]; 
