module.exports = () => (
    [
      ['pompous', 'communist', 'dicknose', 'pie-eating', 'racist', 'elitist', 'white trash', 'drug-loving', 'butterface', 'tone-deaf', 'ugly', 'creepy'],
      ['crotch', 'bitch', 'turd', 'prick', 'slut', 'taint', 'fuck', 'dick', 'boner', 'shart', 'nut', 'sphincter'],
      ['jockey', 'nazi', 'waffle', 'goblin', 'blossom', 'biscuit', 'clown', 'socket', 'monster', 'hound', 'dragon', 'balloon']
    ].map(choice => choice[Math.floor(Math.random() * choice.length)]).join(' ')
);
