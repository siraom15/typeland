const WordsDb = [
  `the`,
  `of`,
  `to`,
  `and`,
  `in`,
  `is`,
  `it`,
  `that`,
  `he`,
  `was`,
  `for`,
  `you`,
  `be`,
  `on`,
  `are`,
  `with`,
  `as`,
  `have`,
  `not`,
  `his`,
  `they`,
  `at`,
  `this`,
  `from`,
  `by`,
  `one`,
  `or`,
  `had`,
  `but`,
  `hot`,
  `we`,
  `there`,
  `what`,
  `were`,
  `all`,
  `do`,
  `she`,
  `can`,
  `out`,
  `an`,
  `when`,
  `said`,
  `up`,
  `your`,
  `which`,
  `will`,
  `some`,
  `their`,
  `other`,
  `if`,
  `would`,
  `about`,
  `time`,
  `so`,
  `use`,
  `her`,
  `make`,
  `into`,
  `each`,
  `them`,
  `like`,
  `how`,
  `then`,
  `many`,
  `more`,
  `him`,
  `go`,
  `my`,
  `see`,
  `who`,
  `no`,
  `way`,
  `has`,
  `these`,
  `could`,
  `word`,
  `two`,
  `look`,
  `come`,
  `write`,
  `than`,
  `long`,
  `know`,
  `its`,
  `people`,
  `day`,
  `get`,
  `over`,
  `water`,
  `first`,
  `now`,
  `take`,
  `oil`,
  `did`,
  `may`,
  `most`,
  `been`,
  `find`,
  `sound`,
  `new`,
  `say`,
  `year`,
  `work`,
  `down`,
  `only`,
  `number`,
  `thing`,
  `call`,
  `man`,
  `any`,
  `after`,
  `me`,
  `back`,
  `made`,
  `good`,
  `feel`,
  `just`,
  `place`,
  `give`,
  `live`,
  `where`,
  `little`,
  `think`,
  `because`,
  `part`,
  `our`,
  `nation`,
  `round`,
  `through`,
  `great`,
  `very`,
  `become`,
  `much`,
  `name`,
  `before`,
  `show`,
  `also`,
  `develop`,
  `came`,
  `well`,
  `too`,
  `general`,
  `low`,
  `want`,
  `sentence`,
  `mean`,
  `old`,
  `even`,
  `right`,
  `tell`,
  `form`,
  `cause`,
  `same`,
  `differ`,
  `boy`,
  `such`,
  `turn`,
  `must`,
  `another`,
  `move`,
  `help`,
  `three`,
  `under`,
  `does`,
  `line`,
  `child`,
  `hand`,
  `small`,
  `put`,
  `against`,
  `here`,
  `end`,
  `set`,
  `around`,
  `interest`,
  `every`,
  `state`,
  `large`,
  `person`,
  `us`,
  `home`,
  `high`,
  `port`,
  `follow`,
  `big`,
  `read`,
  `public`,
  `need`,
  `during`,
  `present`,
  `air`,
  `land`,
  `ask`,
  `house`,
  `why`,
  `different`,
  `hold`,
  `govern`,
  `play`,
  `men`,
  `went`,
  `possible`,
  `world`,
  `spell`,
  `side`,
  `should`,
  `off`,
  `consider`,
  `act`,
  `own`,
  `program`,
  `problem`,
  `kind`,
  `however`,
  `point`,
  `lead`,
  `try`,
  `system`,
  `again`,
  `still`,
  `picture`,
  `order`,
  `change`,
  `away`,
  `add`,
  `plan`,
  `animal`,
  `fact`,
  `school`,
  `since`,
  `mother`,
  `increase`,
  `between`,
  `early`,
  `real`,
  `build`,
  `page`,
  `course`,
  `last`,
  `self`,
  `stand`,
  `late`,
  `near`,
  `never`,
  `head`,
  `answer`,
  `found`,
  `light`,
  `study`,
  `learn`,
  `father`,
  `country`,
  `below`,
  `earth`,
  `food`,
  `seem`,
  `keep`,
  `might`,
  `plant`,
  `eye`,
  `life`,
  `while`,
  `cover`,
  `sun`,
  `those`,
  `few`,
  `thought`,
  `tree`,
  `without`,
  `leave`,
  `city`,
  `begin`,
  `start`,
  `door`,
  `both`,
  `open`,
  `don't`,
  `cross`,
  `story`,
  `run`,
  `letter`,
  `saw`,
  `along`,
  `left`,
  `something`,
  `hard`,
  `grow`,
  `draw`,
  `close`,
  `four`,
  `don't`,
  `press`,
  `next`,
  `sea`,
  `group`,
  `example`,
  `together`,
  `important`,
  `night`,
  `got`,
  `let`,
  `always`,
  `paper`,
  `children`,
  `often`,
  `white`,
  `far`,
  `walk`,
  `ease`,
  `stop`,
  `until`,
  `mile`,
  `music`,
  `feet`,
  `car`,
  `face`,
  `mark`,
  `river`,
  `book`,
  `took`,
  `carry`,
  `began`,
  `later`,
  `second`,
  `miss`,
  `care`,
  `enough`,
  `once`,
  `eat`,
  `rain`,
  `hear`,
  `idea`,
  `room`,
  `friend`,
  `really`,
  `almost`,
  `above`,
  `fish`,
  `girl`,
  `watch`,
  `mountain`,
  `sometimes`,
  `north`,
  `base`,
  `young`,
  `cut`,
  `talk`,
  `horse`,
  `soon`,
  `list`,
  `sure`,
  `song`,
  `being`,
  `color`,
  `family`,
  `wood`,
  `it's`,
  `main`,
  `shine`,
  `bright`,
  `phone`,
  `trust`,
  `pressure`,
  `destoy`,
  `disappear`,
  `besides`,
  `limited`,
  `supply`,
  `cat`,
  `phase`,
  `address`,
  `pet`,
  `yesterday`,
  `top`,
  `house`,
  `jeep`,
  `enormous`,
  `indirect`,
  `statement`,
  `speech`,
  `safe`,
  `speed`,
  `pain`,
  `heat`,
  `fight`,
  `window`,
  `arrive`,
  `success`,
  `promise`,
  `raw`,
  `vital`,
  `preserve`,
  `purchase`,
  `inert`,
  `tent`,
  `soothe`,
  `decay`,
  `basin`,
  `relish`,
  `test`

]

export function randomWords(length: number): Array<string> {
  const wordCount = WordsDb.length
  return [...Array(length)].map(() => {
    return WordsDb[~~(Math.random() * wordCount)]
  })
}
