import React from 'react'

class Alien {
    constructor (id, rank, name, specie, planet){
        this._id = id
        this._rank = rank
        this._name = name
        this._specie = specie
        this._planet = planet
    }
    get id(){
        return this._id
    }
    get rank(){
        return this._rank
    }
    get name(){
        return this.name
    }
    get specie(){
        return this._specie
    }
    get planet(){
        return this._planet
    }
    sayName(){
        console.log(`Hi, my name is ${this._name}.`)
    }
}

class Borg extends Alien {
    constructor (id, rank, name, specie, planet, fromFederation) {
        super(id, rank, name, specie, planet)
        this._fromFederation = fromFederation
    }
    get fromFederation(){
        return this._fromFederation
    }
    set fromFederation(fromFederation){
        this._fromFederation = fromFederation
    }
    stateIntention(){
        console.log(super.sayName())
    }
}

var tuvok = new Alien(1, "Commander", "Tuvok", "Volcan", "Volcano")
var queenBorg = new Borg(2, "Queen", "One", "Borg", "unknown", false)

export default function Es6Javascript(){
    return (<div>
        <h2>{`ES6 and Javascript`}</h2>
        <h3>
            {`[Character ${tuvok._id}]: ${tuvok._rank} ${tuvok._name} is a ${tuvok._specie} from ${tuvok._planet} planet.`}
            {tuvok.sayName()}
        </h3>
        <h3>
            {`[Character ${queenBorg._id}]: ${queenBorg._fromFederation === false ? "Warning!": null} ${queenBorg._rank} ${queenBorg._name} is a ${queenBorg._specie} from ${queenBorg._planet} planet.`}
            {queenBorg.stateIntention()}
        </h3>
    </div>)
}